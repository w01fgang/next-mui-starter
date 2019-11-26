// @flow
/**
 * This script will extract the internationalization messages from all components
   and package them in the translation json files in the translations file.
 */
const fs = require('fs');
const _ = require('lodash');
// $flow: no module export defined
const fetch = require('node-fetch');
const path = require('path');
const nodeGlob = require('glob'); // eslint-disable-line
const { transform } = require('@babel/core'); // eslint-disable-line

const animateProgress = require('./helpers/progress');
const addCheckmark = require('./helpers/checkmark');

const presets = ['next/babel'];
const plugins = [];

const DEFAULT_LOCALE = 'en';

require('shelljs/global'); // eslint-disable-line
require('dotenv-safe').config();

// Glob to match all js files except test files
const FILES_TO_PARSE = '**/messages.js';
const locales = ['en', 'ru', 'it', 'es', 'pt', 'fr'];


// Locize
const PROJECT_ID = '67f6a8ad-97a3-486c-be70-c840f1b28362'; // PROJECT_ID from locize
const { LOCIZE_API_KEY } = process.env; // LOCIZE_API_KEY with admin rights from locize
const VERSION = 'latest';
const NAMESPACE = 'app';
const messagesToLocize = [];

const newLine = () => process.stdout.write('\n');

// Progress Logger
let progress;
const task = (message) => {
  progress = animateProgress(message);
  process.stdout.write(message);

  return (error) => {
    if (error) {
      process.stderr.write(error);
    }
    clearTimeout(progress);
    return addCheckmark(() => newLine());
  };
};

// Wrap async functions below into a promise
const glob = (pattern) => new Promise((resolve, reject) => {
  nodeGlob(
    pattern,
    { ignore: ['**/node_modules/**', './node_modules/**'] },
    (error, value) => (error ? reject(error) : resolve(value)),
  );
});

const readFile = (filename) => new Promise((resolve, reject) => {
  fs.readFile(
    filename,
    (error, value) => (error ? reject(error) : resolve(value)),
  );
});

const writeFile = (filename, data) => new Promise((resolve, reject) => {
  fs.writeFile(
    filename,
    data,
    (error, value) => (error ? reject(error) : resolve(value)),
  );
});

// Store existing translations into memory
const oldLocaleMappings = {};
const localeMappings = {};
// Loop to run once per locale
for (const locale of locales) { // eslint-disable-line
  oldLocaleMappings[locale] = {};
  localeMappings[locale] = {};
  // File to store translation messages into
  const translationFileName = path.resolve(__dirname, '..', 'lang', `${locale}.json`);
  try {
    // Parse the old translation message JSON files
    const messages = JSON.parse(fs.readFileSync(translationFileName, 'utf8'));
    const messageKeys = Object.keys(messages);
    for (const messageKey of messageKeys) { // eslint-disable-line
      oldLocaleMappings[locale][messageKey] = messages[messageKey];
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      process.stderr.write(`There was an error loading this translation file: ${
        translationFileName
      }
        \n${error}`);
    }
  }
}

/* push `react-intl` plugin to the existing plugins that are already configured in `package.json`
   Example:
   ```
  "babel": {
    "plugins": [
      ["transform-object-rest-spread", { "useBuiltIns": true }]
    ],
    "presets": [
      "env",
      "react"
    ]
  }
  ```
*/
plugins.push(['react-intl']);

const extractFromFile = async (filename) => {
  try {
    const code = await readFile(filename);
    // Use babel plugin to extract instances where react-intl is used
    // filename is a workaround https://github.com/yahoo/babel-plugin-react-intl/issues/156
    const { metadata: result } = await transform(code, { presets, plugins, filename });
    for (const message of result['react-intl'].messages) { // eslint-disable-line
      messagesToLocize.push(message);
      for (const locale of locales) { // eslint-disable-line
        const oldLocaleMapping = oldLocaleMappings[locale][message.id];
        // Merge old translations into the babel extracted instances where react-intl is used
        const newMsg = locale === DEFAULT_LOCALE ? message.defaultMessage : '';
        localeMappings[locale][message.id] = oldLocaleMapping || newMsg;
      }
    }
  } catch (error) {
    process.stderr.write(`Error transforming file: ${filename}\n${error}\n`);
  }
};

const processEntries = (entries) => {
  const remappedEntries = {};
  for (const entry of entries) { // eslint-disable-line
    remappedEntries[entry.id] = {
      value: entry.defaultMessage,
      context: {
        text: entry.description || '',
      },
    };
  }

  return remappedEntries;
};

const writeLocales = async (locizeMappings = {}) => {
  for (const locale of locales) { // eslint-disable-line
    const translationFileName = path.resolve(__dirname, '..', 'lang', `${locale}.json`);

    let localeTaskDone = console.log.bind(console); // eslint-disable-line
    try {
      localeTaskDone = task(`Writing translation messages for ${locale} to: ${translationFileName}`);

      // Sort the translation JSON file so that git diffing is easier
      // Otherwise the translation messages will jump around every time we extract
      const messages = {};
      Object.keys(localeMappings[locale])
        .sort()
        .forEach((key) => {
          messages[key] = localeMappings[locale][key];
        });

      if (!_.isEmpty(locizeMappings)) {
        Object.keys(locizeMappings[locale])
          .sort()
          .forEach((key) => {
            messages[key] = locizeMappings[locale][key];
          });
      }

      // Write to file the JSON representation of the translation messages
      const prettified = `${JSON.stringify(messages, null, 2)}\n`;

      await writeFile(translationFileName, prettified); // eslint-disable-line no-await-in-loop

      localeTaskDone();
    } catch (error) {
      localeTaskDone(`There was an error saving this translation file: ${translationFileName}
        \n${error}`);
    }
  }
};

const main = async () => {
  const memoryTaskDone = task('Storing language files in memory');
  const files = await glob(FILES_TO_PARSE);
  memoryTaskDone();

  const extractTaskDone = task('Run extraction on all files');
  // Run extraction on all files that match the glob on line 16
  await Promise.all(files.map((filename) => extractFromFile(filename)));
  extractTaskDone();

  // Make the directory if it doesn't exist, especially for first run
  // mkdir("-p", "src/functions/lang");
  await writeLocales();

  const findNewEntries = task('Finding new entries to send to locize');

  try {
    const oldKeys = Object.keys(localeMappings[DEFAULT_LOCALE]);

    const newEntriesToLocize = _.filter(messagesToLocize, (message) => !_.includes(oldKeys, message.id));

    findNewEntries();

    const sendNewEntriesToLocize = task('Sending new entries to locize');

    const processedEntries = processEntries(newEntriesToLocize);

    // TODO: update URL to work with private projects
    const postUrl = `https://api.locize.io/update/${PROJECT_ID}/${VERSION}/${DEFAULT_LOCALE}/${NAMESPACE}`;

    try {
      if (!_.isEmpty(newEntriesToLocize)) {
        try {
          await fetch(postUrl, {
            method: 'post',
            body: JSON.stringify(processedEntries),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${LOCIZE_API_KEY || 'key_is_missing'}`,
            },
          });
          sendNewEntriesToLocize();
        } catch (e) {
          sendNewEntriesToLocize(e.message);
        }
      } else {
        sendNewEntriesToLocize('\nNo new entries were sent to locize');
      }

      const getNewTranslationsFromLocize = task('Getting new translations from locize');

      const locizeMappings = {};

      for (const locale of locales) { // eslint-disable-line
        // TODO: update URL to work with private projects
        const getUrl = `https://api.locize.io/${PROJECT_ID}/${VERSION}/${locale}/${NAMESPACE}`;
        locizeMappings[locale] = await fetch(getUrl).then((res) => res.json()); // eslint-disable-line no-await-in-loop
      }
      getNewTranslationsFromLocize();

      await writeLocales(locizeMappings);
    } catch (e) {
      sendNewEntriesToLocize(`There was an error during fetch ${JSON.stringify(e)}`);
    }
  } catch (e) {
    findNewEntries('There was an error finding new entries');
  }


  process.exit(0);
};
main();
