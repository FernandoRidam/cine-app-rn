import React from 'react';

import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from 'react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import Styles from './styles';

export function CardFilm({ item, type }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={ .8 }
      style={ Styles.card }
      onPress={() => navigation.navigate('Details', { item: { ...item, type }})}
    >
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500${ item.poster_path }`}}
        style={ Styles.image }
        imageStyle={ Styles.image }
      >
        <LinearGradient
          style={ Styles.linearGradient }
          colors={['rgba(2, 9, 22, 0.1)', 'rgba(2, 9, 22, 0.6)']}
        >
          <Text style={ Styles.title }>{ item.title || item.name }</Text>

          <View style={ Styles.averageView }>
            <Text style={ Styles.average }>{ item.vote_average }</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
