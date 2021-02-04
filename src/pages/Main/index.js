import React from 'react';

import {
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Styles from './styles';

export function Main() {
  return (
    <KeyboardAvoidingView
      style={ Styles.container }
      behavior="padding"
      enabled={ Platform.OS === 'ios' }
    >
      {/*  */}
    </KeyboardAvoidingView>
  );
};
