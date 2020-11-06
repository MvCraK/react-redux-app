import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import { zh_CN, en_US } from './lang';

// i18n.languages = ['en_US', 'zh_CN'];
// * initialize i18n config
i18n.use(initReactI18next).init({
  // add resource config file
  resources: {
    'en-US': {
      translation: en_US,
    },
    'zh-CN': {
      translation: zh_CN,
    },
  },
  lng: navigator.language,
  fallbackLng: 'zh-CN',
  // debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  keySeparator: false
});

export default i18n;