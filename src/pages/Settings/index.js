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
  useTranslation,
} from 'react-i18next';

import {
  Option,
  Separator,
} from '../../components';

import Styles from './styles';

export function Settings() {
  const [ language, setLanguage ] = useState('pt');

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage( language );
  }, [ language ]);

  return (
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
  );
};
