import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));

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
