import React, { Suspense, useEffect } from 'react';

import {
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  getLocales,
} from "react-native-localize";

import {
  useTranslation,
} from 'react-i18next';

import AsyncStorage from '@react-native-community/async-storage';

import Routes from './routes';

import './config/i18n';

export default function App() {

  const { i18n } = useTranslation();

  async function saveDefaultLanguage() {
    const lg = await AsyncStorage.getItem('CineApp@Language');

    if( !lg ) {
      await AsyncStorage.setItem('CineApp@Language', getLocales()[0].languageCode );
    } else {
      i18n.changeLanguage( lg );
    }
  };

  useEffect(() => {
    saveDefaultLanguage();
  }, []);

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StatusBar
        backgroundColor="#020916"
        barStyle="light-content"
      />

      <Routes />
    </Suspense>
  );
};
