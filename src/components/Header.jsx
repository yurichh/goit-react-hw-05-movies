import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul style={{ display: 'flex', listStyle: 'none', gap: 20 }}>
      <li style={{ textDecoration: 'none' }}>
        <NavLink to="/"> Home page </NavLink>
      </li>
      <li>
        <NavLink to="/movies"> Movies </NavLink>
      </li>
    </ul>
  );
};

export default Header;
