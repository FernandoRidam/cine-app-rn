import React from 'react';

import {
  View,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Styles from './styles';

export function TrendingCard({ item }) {
  return (
    <View
      key={ item.id }
      style={ Styles.card }
    >
      <ImageBackground
        style={ Styles.image }
        imageStyle={ Styles.image }
        source={{ uri: `https://image.tmdb.org/t/p/w500${ item.backdrop_path }`}}
      >
        <LinearGradient
          style={ Styles.linearGradient }
          colors={['rgba(2, 9, 22, 0.1)', 'rgb(2, 9, 22)']}
        >
          <Image
            style={ Styles.cover }
            source={{ uri: `https://image.tmdb.org/t/p/w500${ item.poster_path }`}}
          />

          <View style={ Styles.info }>
            <Text style={ Styles.title }>{ item.title || item.name }</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
