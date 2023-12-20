import { NavLink, Route, Routes } from 'react-router-dom';

const App = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/"> Home page </NavLink>
      </li>
      <li>
        <NavLink to="/dogs"> Dogs </NavLink>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<div>its a header</div>}>
        <Route index element={<div> home page</div>} />
        <Route path="/dogs" element={<div> dog`s page</div>} />
        <Route path="*" element={<div>no page</div>} />
      </Route>
    </Routes>
  </div>
);
export default App;
