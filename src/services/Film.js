import api from '../config/api';

export async function getTrendingsFilms() {
  const { data } = await api.get('/trending/movie/week');

  return { films: data.results };
};

export async function searchFilms( search ) {
  const { data } = await api.get('/search/movie', {
    params: {
      query: search,
    },
  });

  return { films: data.results };
};

export async function getFilmsByGenre( genre ) {
  const { data } = await api.get('/discover/movie', {
    params: {
      with_genres: genre,
    },
  });

  return { films: data.results };
};

export async function getFilmVideos( id ) {
  const { data } = await api.get(`/movie/${ id }/videos`);

  return { videos: data.results };
};
