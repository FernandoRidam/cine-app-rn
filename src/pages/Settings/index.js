import React, {
  useState,
  useEffect,
} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
} from 'react-native';

import {
  getLocales,
} from "react-native-localize";

import {
  useTranslation,
} from 'react-i18next';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Loading,
  Option,
  Separator,
} from '../../components';

import Styles from './styles';

export function Settings() {
  const [ loading, setLoading ] = useState( false );

  const [ language, setLanguage ] = useState ( null );

  const { t, i18n } = useTranslation();

  async function saveLanguage() {
    setLoading( true );

    await AsyncStorage.setItem('CineApp@Language', language );

    setLoading( false );
  };

  async function getLanguage() {
    setLoading( true );

    const lg = await AsyncStorage.getItem('CineApp@Language');
    setLanguage( lg );

    setLoading( false );
  };

  useEffect(() => {
    if( language ) {
      i18n.changeLanguage( language );

      saveLanguage();
    }
  }, [ language ]);

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={ Styles.container }
        behavior="padding"
        enabled={ Platform.OS === 'ios' }
      >
        <View style={ Styles.menu }>
          <Text style={ Styles.label }>{ t('screens.settings.language') }</Text>

          <Separator />

          <View style={ Styles.options }>
            <Option
              onPress={() => setLanguage('pt')}
              label={ t('screens.settings.languages.pt')}
              selected={ language === 'pt'}
            />

            <Option
              onPress={() => setLanguage('en')}
              label={ t('screens.settings.languages.en')}
              selected={ language === 'en'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>

      <Loading
        loading={ loading }
      />
    </>
  );
};
