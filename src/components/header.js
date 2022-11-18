import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="nav-bar">
    <nav className="navigation">
      <h1 className="nav-header">Bookstore CMS</h1>
      <NavLink to="/" className="link">BOOKS</NavLink>
      <NavLink className="link" to="/categories">CATEGORIES</NavLink>
    </nav>
  </header>
);

export default Header;
