import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<div>no page</div>} />
      </Route>
    </Routes>
  );
};
export default App;
