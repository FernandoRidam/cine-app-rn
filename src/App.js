import React, { Suspense } from 'react';

import {
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import Routes from './routes';

import './config/i18n';

export default function App() {
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
