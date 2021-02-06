import React, {
  useState,
  useEffect,
} from 'react';

import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  View,
  Text,
  FlatList,
  _Text,
} from 'react-native';

import {
  useTranslation,
} from 'react-i18next';

import {
  getFilmVideos,
  getSeriesVideos,
} from '../../services';

import {
  Loading,
  VideoPlayer,
} from '../../components';

import Styles from './styles';

export function Details({ route }) {
  const { t } = useTranslation();

  const {
    item,
  } = route.params;

  const [ loading, setLoading ] = useState( false );
  const [ videos, setVideos ] = useState([]);

  async function getVideos() {
    setLoading( true );

    if( item.type === 'films') {
      const { videos } = await getFilmVideos( item.id );

      setVideos( videos );
    } else if( item.type === 'series') {
      const { videos } = await getSeriesVideos( item.id );

      setVideos( videos );
    }

    setLoading( false );
  };

  useEffect(() => {
    getVideos();
  }, [ item ]);

  return (
    <>
      <ImageBackground
        style={ Styles.background }
        source={{ uri: `https://image.tmdb.org/t/p/original${ item.backdrop_path }`}}
      >
        <KeyboardAvoidingView
          style={ Styles.container }
          behavior="padding"
          enabled={ Platform.OS === 'ios' }
        >
          <ScrollView
            style={ Styles.scroll }
            contentContainerStyle={ Styles.scrollContainer }
          >
            <View style={ Styles.coverView }>
              <Image
                style={ Styles.cover }
                source={{ uri: `https://image.tmdb.org/t/p/w500${ item.poster_path }`}}
              />

              <View style={ Styles.info }>
                <Text style={ Styles.average }>{ t('screens.details.assessments')}: { item.vote_count }</Text>

                <Text style={ Styles.average }>{ t('screens.details.average')}: { item.vote_average }</Text>

                <Text style={ Styles.title }>{ item.title || item.name }</Text>
              </View>
            </View>

            <Text style={ Styles.overview }>{ item.overview }</Text>

            {
              videos.length > 0
                ? <>
                    <Text style={ Styles.trailers }>Trailers</Text>
                    {
                      videos.map( video => <VideoPlayer key={ video.id } item={ video }/>)
                    }
                  </>
                : <View style={ Styles.emptyView }>
                    <Text style={ Styles.empty }>{ t('screens.details.empty')}</Text>
                  </View>
            }
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>

      <Loading
        loading={ loading }
      />
    </>
  );
};
