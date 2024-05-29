import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/features">Features</Link></li>
        </ul>
      </nav>
    </header>
  );
};
