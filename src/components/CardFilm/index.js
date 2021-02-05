import React from 'react';

import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Styles from './styles';

export function CardFilm({ film }) {
  return (
    <TouchableOpacity
      activeOpacity={ .8 }
      style={ Styles.card }
    >
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500${ film.poster_path }`}}
        style={ Styles.image }
        imageStyle={ Styles.image }
      >
        <LinearGradient
          style={ Styles.linearGradient }
          colors={['rgba(2, 9, 22, 0.1)', 'rgba(2, 9, 22, 0.6)']}
        >
          <Text style={ Styles.title }>{ film.title }</Text>

          <View style={ Styles.averageView }>
            <Text style={ Styles.average }>{ film.vote_average }</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
