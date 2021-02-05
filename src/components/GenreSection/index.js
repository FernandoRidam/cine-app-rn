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
} from '../../services';

import {
  CardFilm,
} from '../CardFilm';
import { Separator } from '../Separator';

import Styles from './styles';

export function GenreSection({ genre }) {
  const [ films, setFilms ] = useState([]);

  async function getFilms() {
    const { films } = await getFilmsByGenre( genre.id );

    setFilms( films );
  };

  useEffect(() => {
    getFilms();
  }, [ genre ]);

  return (
    <View style={ Styles.genreContainer }>
      <View style={ Styles.title }>
        <Text style={ Styles.genre }>{ genre.name }</Text>

        <Separator />
      </View>

      <FlatList
        data={ films.slice( 0, 3 )}
        keyExtractor={ item => item.id.toString()}
        renderItem={({ item }) => <CardFilm film={ item }/>}
        horizontal
      />
    </View>
  );
};
