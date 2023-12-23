import axios from 'axios';
const queryMoviesService = async query => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: `${query}`,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM',
    },
  };
  try {
    const response = await axios.request(options);
    const results = response.data.results;
    return results;
  } catch (error) {
    console.error('Error with getting query films', error);
  }
};

export default queryMoviesService;
