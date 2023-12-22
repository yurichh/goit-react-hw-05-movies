import { Link, Outlet } from 'react-router-dom';
const data = [1, 2, 3, 4, 5];
const Movies = () => {
  return (
    <>
      <div>Movies page</div>
      {data.map(d => (
        <Link key={d} to={`movie/${d}`}>
          Details {d}
        </Link>
      ))}
    </>
  );
};

export default Movies;
