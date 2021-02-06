import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import {
  useTranslation,
} from 'react-i18next';

import YouTube from 'react-native-youtube';

const YOUTUBE_KEY = 'AIzaSyAwNmhBI_vGXuwpGQJ2YCW_RdNGr0WwZYA';

import Styles from './styles';

export function VideoPlayer({ item }) {
  const { t } = useTranslation();

  return (
    <View style={ Styles.videoView }>
      <Text style={ Styles.title }>{ item.name }</Text>

      {
        item.site === 'YouTube'
          ? <YouTube
              videoId={ item.key }
              apiKey={YOUTUBE_KEY}
              style={ Styles.background }
            />
          : <View style={ Styles.emptyVideoView }>
              <Text styles={ Styles.emptyVideo }>{ t('screens.details.unavailable')}</Text>
            </View>
      }
    </View>
  );
};
