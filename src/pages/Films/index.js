import React, {
  useState,
  useEffect,
} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Animated,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import {
  useIsFocused,
} from '@react-navigation/native';

import {
  useTranslation,
} from 'react-i18next';

import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  getTrendings,
  getMovieGenres,
  searchFilms,
} from '../../services';

import {
  TrendingCard,
  GenreSection,
  Loading,
  CardFilm,
} from '../../components';

import Styles from './styles';

export function Films() {
  const { t } = useTranslation();

  const isFocused = useIsFocused();

  const widthScreen = Dimensions.get('screen').width;
  const heightScreen = Dimensions.get('screen').height;

  const searchResultView = useState( new Animated.ValueXY({ x: 0, y: heightScreen }))[ 0 ];
  const searchView = useState( new Animated.Value( 0 ))[ 0 ];

  const searchViewStyle = {
    width: searchView.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, widthScreen - 75 ],
    }),
  };

  const searchIconStyle = {
    opacity: searchView.interpolate({
      inputRange: [ 0, .3, 1 ],
      outputRange: [ 1, 0, 1 ],
    }),

    transform: [{
      rotate: searchView.interpolate({
        inputRange: [ 0, 1 ],
        outputRange: ['0deg', '-360deg'],
      }),
    }]
  };

  const [ loading, setLoading ] = useState( false );
  const [ openSearch, setOpenSearch ] = useState( false );

  const [ search, setSearch ] = useState('');
  const [ searchResult, setSearchResult ] = useState([]);

  const [ trendings, setTrending ] = useState([]);
  const [ genres, setGenres ] = useState([]);

  async function handleSearch() {
    if( search !== '') {
      setLoading( true );

      const { films } = await searchFilms( search );

      setSearchResult( films );

      setLoading( false );

      Animated.timing( searchResultView, {
        toValue: { x: 0, y: 0 },
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  async function getFilmsTrendings() {
    setLoading( true );

    const { films } = await getTrendings();

    setTrending( films );
  };

  async function getGenres() {
    const { genres } = await getMovieGenres();

    setGenres( genres );

    setLoading( false );
  };

  useEffect(() => {
    if( isFocused ) {
      setTrending([]);
      setGenres([]);

      getFilmsTrendings();

      getGenres();
    }
  }, [ isFocused ]);

  useEffect(() => {
    Animated.timing( searchView, {
      toValue: openSearch ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing( searchResultView, {
      toValue: { x: 0, y: heightScreen },
      duration: 500,
      useNativeDriver: false,
    }).start();

    setSearchResult([]);
    setSearch('');

    if( openSearch )
      setTimeout(() => {
        this.searchRef.focus();
      }, 500);
  }, [ openSearch ]);

  return (
    <>
      <KeyboardAvoidingView
        style={ Styles.container }
        behavior="padding"
        enabled={ Platform.OS === 'ios' }
      >
        <ScrollView
          contentContainerStyle={ Styles.scrollContainer }
          style={ Styles.scroll }
        >
          <Text style={ Styles.title }>{ t('screens.films.trend')}</Text>
          <View style={ Styles.carouselView }>
            <Carousel
              data={ trendings }
              renderItem={({ item }) => <TrendingCard film={ item }/>}
              horizontal
              inactiveSlideShift={ 0 }
              useScrollView={ true }
              sliderWidth={ widthScreen * .99 }
              itemWidth={ widthScreen * .99 }
              loop
              autoplay
              autoplayDelay={ 2000 }
              autoplayInterval={ 5000 }
            />
          </View>

          <Text style={ Styles.title }>{ t('screens.films.genre')}</Text>
          <View style={ Styles.genresView }>
            {
              genres.slice( 0, 8 ).map( genre =>
                <GenreSection
                  key={ genre.id }
                  genre={ genre }
                />
              )
            }
          </View>
        </ScrollView>

        <Animated.View style={[ searchResultView.getLayout(), Styles.searchResult ]}>
          {
            searchResult.length > 0
              ? <>
                  <Text style={ Styles.titleSearch }>{ t('screens.films.title')}</Text>

                  <FlatList
                    data={ searchResult }
                    keyExtractor={ item => item.id.toString()}
                    renderItem={({ item }) => <CardFilm film={ item }/>}
                    numColumns={ 2 }
                    columnWrapperStyle={ Styles.wrapperList }
                  />
                </>
              : <View style={ Styles.emptyView }>
                  <Text style={ Styles.titleSearch }>{ t('screens.films.empty')}</Text>
                </View>
          }
        </Animated.View>

        <View style={ Styles.searchView }>
          <TouchableOpacity
            activeOpacity={ .8 }
            style={ Styles.searchButton }
            onPress={() => setOpenSearch( !openSearch )}
          >
            <Animated.View style={[ searchIconStyle ]}>
              <Icon name={ openSearch ? 'close' : 'search'} size={ 29 } color="#FFF" />
            </Animated.View>
          </TouchableOpacity>

          <Animated.View style={[ searchViewStyle ]}>
            { openSearch &&
              <TextInput
                ref={(input) => { this.searchRef = input }}
                style={ Styles.search }
                placeholder={ t('screens.films.search')}
                returnKeyType="search"
                onSubmitEditing={ handleSearch }
                value={ search }
                onChangeText={ setSearch }
              />
            }
          </Animated.View>
        </View>
      </KeyboardAvoidingView>

      <Loading
        loading={ loading }
      />
    </>
  );
};
