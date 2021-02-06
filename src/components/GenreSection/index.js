import React, {
  useState,
  useEffect,
} from 'react';

import {
  View,
  Text,
  FlatList,
} from 'react-native';

import {
  getFilmsByGenre,
  getSeriesByGenre,
} from '../../services';

import {
  CardFilm,
} from '../CardFilm';

import {
  Separator,
} from '../Separator';

import Styles from './styles';

export function GenreSection({ type, genre }) {
  const [ data, setData ] = useState([]);

  async function getData() {
    if( type === 'films') {
      const { films } = await getFilmsByGenre( genre.id );

      setData( films );
    } else if( type === 'series') {
      const { series } = await getSeriesByGenre( genre.id );

      setData( series );
    }
  };

  useEffect(() => {
    getData();
  }, [ genre, type ]);

  return (
    <View style={ Styles.genreContainer }>
      <View style={ Styles.title }>
        <Text style={ Styles.genre }>{ genre.name }</Text>

        <Separator />
      </View>

      <FlatList
        data={ data.slice( 0, 3 )} // slice para diminuir quantos filmes serão renderizados. Ao renderizar todos causava uma latencia muito grande nas animações.
        keyExtractor={ item => item.id.toString()}
        renderItem={({ item }) => <CardFilm type={ type } item={ item }/>}
        horizontal
      />
    </View>
  );
};
