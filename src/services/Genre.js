import api from '../config/api';

export async function getMovieGenres() {
  const { data } = await api.get('/genre/movie/list');

  return { genres: data.genres };
};

export async function getSeriesGenres() {
  const { data } = await api.get('/genre/tv/list');

  return { genres: data.genres };
};
