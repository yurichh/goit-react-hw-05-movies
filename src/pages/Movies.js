// import { Link } from 'react-router-dom';

const Movies = () => {
  const handleChange = ({ target: { value } }) => {
    const searchParams = new URLSearchParams('');
    console.log('searchParams', searchParams);
  };

  return (
    <>
      <div>Movies page</div>
      <form>
        <input
          name="movieName"
          placeholder="movie name"
          onChange={handleChange}
        ></input>
      </form>
    </>
  );
};

export default Movies;
