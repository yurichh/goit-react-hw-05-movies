import axios from 'axios';

const singleMovieService = async movieID => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieID}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів', error);
  }
};

export default singleMovieService;
