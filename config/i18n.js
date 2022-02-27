import tc from '../locales/tc';
import en from '../locales/en';
import sc from '../locales/sc';

export default {
  locales: [
    {
      code: 'tc',
      name: '繁體中文',
      iso: 'zh',
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en',
    },
    {
      code: 'sc',
      name: 'English',
      iso: 'zh-CN',
    },
  ],
  defaultLocale: 'tc',
  strategy: 'prefix',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    onlyOnRoot: true,
  },
  vueI18n: {
    fallbackLocale: 'tc',
    messages: { tc, en, sc },
  },
};
