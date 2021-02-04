import i18n from "i18next";

import {
  initReactI18next,
} from "react-i18next";

import {
  getLocales,
} from "react-native-localize";

import pt from './locales/pt.json';
import en from './locales/en.json';

i18n.use( initReactI18next )
.init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'pt',
  resources: {
    pt: pt,
    en: en,
  },
});
export default i18n;
