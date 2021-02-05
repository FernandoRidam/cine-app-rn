import React, {
  useState,
  useEffect,
} from 'react';

import {
  View,
  Text,
  FlatList,
} from 'react-native';

import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import {
  getFilmsByGenre,
  getSeriesByGenre,
} from '../../services';

import {
  CardFilm,
} from '../CardFilm';
import { Separator } from '../Separator';

import Styles from './styles';

export function GenreSection({ type, genre }) {
  const [ loading, setLoading ] = useState( false );

  const [ data, setData ] = useState([]);

  async function getData() {
    setLoading( true );

    if( type === 'films') {
      const { films } = await getFilmsByGenre( genre.id );

      setData( films );
    } else if( type === 'series') {
      const { series } = await getSeriesByGenre( genre.id );

      setData( series );
    }

    setLoading( false );
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

      {
        loading
          ?  <SkeletonPlaceholder style={ Styles.skeleton }>
               <SkeletonPlaceholder.Item style={ Styles.skeletonCard }/>
               <SkeletonPlaceholder.Item style={ Styles.skeletonCard }/>
               <SkeletonPlaceholder.Item style={ Styles.skeletonCard }/>
            </SkeletonPlaceholder>
          : <FlatList
              data={ data.slice( 0, 3 )} // slice para diminuir quantos filmes serão renderizados. Ao renderizar todos causava uma latencia muito grande nas animações.
              keyExtractor={ item => item.id.toString()}
              renderItem={({ item }) => <CardFilm item={ item }/>}
              horizontal
            />
      }
    </View>
  );
};
