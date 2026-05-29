import { Link } from 'react-router-dom';
import './Navbar.css'; // Si tu as créé un fichier CSS dédié


export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Kemistry</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/boutique">Boutique</Link>
        </li>
        <li>
          <Link to="/panier">Mon Panier</Link>
        </li>
      </ul>
    </nav>
  );
};