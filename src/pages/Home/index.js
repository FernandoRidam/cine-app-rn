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
  getTrendingsFilms,
  getMovieGenres,
  searchFilms,
  getSeriesGenres,
  getTrendingsSeries,
  searchSeries,
} from '../../services';

import {
  TrendingCard,
  GenreSection,
  Loading,
  CardFilm,
} from '../../components';

import Styles from './styles';

export function Home({ type }) {
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

      if( type === 'films') {
        const { films } = await searchFilms( search );

        setSearchResult( films );
      } else if( type === 'series') {
        const { series } = await searchSeries( search );

        setSearchResult( series );
      }

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

    if( type === 'films') {
      const { films } = await getTrendingsFilms();

      setTrending( films );
    } else if( type === 'series') {
      const { series } = await getTrendingsSeries();

      setTrending( series );
    }
  };

  async function getGenres() {
    if( type === 'films') {
      const { genres } = await getMovieGenres();

      setGenres( genres );
    } else if( type === 'series') {
      const { genres } = await getSeriesGenres();

      setGenres( genres );
    }

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
          <Text style={ Styles.title }>{ t(`screens.${ type }.trend`)}</Text>
          <View style={ Styles.carouselView }>
            <Carousel
              data={ trendings }
              renderItem={({ item }) => <TrendingCard item={ item }/>}
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

          <Text style={ Styles.title }>{ t(`screens.${ type }.genre`)}</Text>
          <View style={ Styles.genresView }>
            {
              genres.slice( 0, 8 ).map( genre => // slice para diminuir quantas categorias serão renderizadas. Ao renderizar todas causava uma latencia muito grande nas animações.
                <GenreSection
                  type={ type }
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
                  <Text style={ Styles.titleSearch }>{ t(`screens.${ type }.title`)}</Text>

                  <FlatList
                    data={ searchResult }
                    keyExtractor={ item => item.id.toString()}
                    renderItem={({ item }) => <CardFilm item={ item }/>}
                    numColumns={ 2 }
                    columnWrapperStyle={ Styles.wrapperList }
                  />
                </>
              : <View style={ Styles.emptyView }>
                  <Text style={ Styles.titleSearch }>{ t(`screens.${ type }.empty`)}</Text>
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
                placeholder={ t(`screens.${ type }.search`)}
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
