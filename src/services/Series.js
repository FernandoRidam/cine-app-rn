import api from '../config/api';

export async function getTrendingsSeries() {
  const { data } = await api.get('/trending/tv/week');

  return { series: data.results };
};

export async function searchSeries( search ) {
  const { data } = await api.get('/search/tv', {
    params: {
      query: search,
    },
  });

  return { series: data.results };
};

export async function getSeriesByGenre( genre ) {
  const { data } = await api.get('/discover/tv', {
    params: {
      with_genres: genre,
    },
  });

  return { series: data.results };
};
