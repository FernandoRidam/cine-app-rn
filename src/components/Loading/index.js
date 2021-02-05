import React from 'react';

import {
  Modal,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

import {
  useTranslation,
} from 'react-i18next';

import Styles from './styles';

export function Loading({ loading }) {
  const { t } = useTranslation();

  return (
    <Modal
      animationType="fade"
      hardwareAccelerated
      visible={ loading }
      transparent
    >
      <View
        style={ Styles.modal }
      >
        <ActivityIndicator size={ 80 } color="#FFC527" />

        <Text style={ Styles.wait }>{ t('components.loading.wait')}</Text>
      </View>
    </Modal>
  );
};
