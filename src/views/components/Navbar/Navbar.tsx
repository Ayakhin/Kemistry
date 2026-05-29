import { Link } from 'react-router-dom';
import './Navbar.css'; // Si tu as créé un fichier CSS dédié


export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Kemistry</Link>
      </div>
      {/* <div className="">
        <input type="text"  placeholder="Rechercher..." className="navbar-search" />
      </div> */}
      <ul className="navbar-links">
        <li>
          <Link to="/boutique">La boutique</Link>
        </li>
        <li>
          <Link to="/historique">Notre histoire</Link>
        </li>
        <li>
          <Link to="/panier">Mon panier</Link>
        </li>
      </ul>
    </nav>
  );
};