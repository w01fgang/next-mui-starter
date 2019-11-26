import enLocaleData from '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import ruLocaleData from '@formatjs/intl-relativetimeformat/dist/locale-data/ru';
import itLocaleData from '@formatjs/intl-relativetimeformat/dist/locale-data/it';
import IntlPolyfill from 'intl';
import accepts from 'accepts';

import messages from '../lang';

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const supportedLanguages = ['en', 'ru', 'it'];

const localeDataCache = new Map();
localeDataCache.set('en', enLocaleData);
localeDataCache.set('ru', ruLocaleData);
localeDataCache.set('it', itLocaleData);

const getMessages = (req) => {
  const accept = accepts(req);
  const locale = accept.language(supportedLanguages) || 'en';
  req.locale = locale;
  req.localeDataScript = localeDataCache.get(locale);
  return { locale, messages: messages[locale] };
};

export default getMessages;
