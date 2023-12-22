import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul className="header">
      <li className="header-nav">
        <NavLink to="/"> Home page </NavLink>
      </li>
      <li className="header-nav">
        <NavLink to="/movies"> Movies </NavLink>
      </li>
    </ul>
  );
};

export default Header;
