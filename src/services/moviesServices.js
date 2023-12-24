import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM';
const BASE_URL = 'https://api.themoviedb.org/3';

const getRequestConfig = (url, params) => ({
  method: 'GET',
  url: `${BASE_URL}/${url}`,
  params: { language: 'en-US', ...params },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

const castService = async movieID => {
  const options = getRequestConfig(`movie/${movieID}/credits`, {});
  try {
    const { data } = await axios.request(options);
    return data.cast;
  } catch (error) {
    console.error('Error with getting cast', error);
  }
};

const queryMoviesService = async query => {
  const options = getRequestConfig(`search/movie`, {
    query: `${query}`,
    include_adult: 'false',
    page: '1',
  });
  try {
    const response = await axios.request(options);
    const results = response.data.results;
    return results;
  } catch (error) {
    console.error('Error with getting query films', error);
  }
};

const reviewService = async movieID => {
  const options = getRequestConfig(`movie/${movieID}/reviews`, {});
  try {
    const { data } = await axios.request(options);
    return data.results;
  } catch (error) {
    console.error('Error with getting review', error);
  }
};

const singleMovieService = async movieID => {
  const options = getRequestConfig(`movie/${movieID}`, {});
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error with getting single film', error);
  }
};

const trendMoviesService = async () => {
  const options = getRequestConfig(`trending/movie/day`, {});

  try {
    const response = await axios.request(options);
    const results = response.data.results;
    return results;
  } catch (error) {
    console.error('Error with getting trend films', error);
  }
};

export {
  castService,
  queryMoviesService,
  reviewService,
  singleMovieService,
  trendMoviesService,
};
