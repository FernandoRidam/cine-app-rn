import React from 'react';

import {
  TouchableOpacity,
  Text,
} from 'react-native';

import Styles from './styles';

export function Option({ onPress, selected, label }) {
  return (
    <TouchableOpacity
      activeOpacity={ .8 }
      style={[ Styles.button, selected ? Styles.selected : {}]}
      onPress={ onPress }
    >
      <Text style={[ Styles.textButton, selected ? Styles.selected : {}]}>{ label }</Text>
    </TouchableOpacity>
  );
};
