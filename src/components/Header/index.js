import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-header">
      <header className="header__container">
        <div className="header__title">
          <h1 className="header__title-text">CryptoSteplix</h1>
          <p className="header__subtitle">Desde Palermo para el mundo.</p>
        </div>
        <nav className="header__navbar">
          <ul className="header__routes">
            <li>
              <Link to="/" className="header__navbar--link">
                Última cotización
              </Link> 
            </li>
            <li>
              <Link to="/insert" className="header__navbar--link">
                Nueva cotización
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
