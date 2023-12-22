import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const data = useParams();
  console.log(data);
  return (
    <>
      <div>Movie{data.id} details page</div>
    </>
  );
};

export default MovieDetails;
