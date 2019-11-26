import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

import themeDecorator from './themeDecorator';
import en from '../../lang/en';

const messages = {
  'en': en,
};

const getMessages = (locale) => messages[locale];

setIntlConfig({
  locales: ['en'],
  defaultLocale: 'en',
  getMessages,
});

addDecorator(withKnobs);
addDecorator(withIntl);
addDecorator(themeDecorator);


configure(require.context('../', true, /\.stories\.js$/), module);
