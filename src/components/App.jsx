import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="movies/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<div>no page</div>} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
