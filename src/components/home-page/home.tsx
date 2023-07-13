import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/Jeotur-logo-blanco-final.png';
import link from '../assets/imgs/link.svg';
import './home.scss';
import { Container } from '../container/container';

function HomePage() {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (linkName: any) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function renderMenu() {
    return (
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <nav>
          <li>
            <Link className="menu-link" to="/">главная</Link>
          </li>
          <li>
            <Link className="menu-link" to="/about">О нас</Link>
          </li>
          <li>
            <Link className="menu-link" to="/">ПРОДУКЦИЯ</Link>
          </li>
          <li>
            <Link className="menu-link" to="/">Инновации</Link>
          </li>
          <li>
            <Link className="menu-link" to="/">Контакты</Link>
          </li>
        </nav>
      </div>
    );
  }


  return (
    <section className="home">
      <Container>
        <header>
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <nav className={isMenuOpen ? 'menu-open' : ''}>
            <ul>
              <li key="главная">
                <Link
                  className={activeLink === '' ? 'active' : ''}
                  to="/"
                  onClick={() => handleLinkClick('главная')}
                >
                  главная
                </Link>
              </li>
              <li key="О нас">
                <Link
                  className={activeLink === 'О нас' ? 'active' : ''}
                  to="/about"
                  onClick={() => handleLinkClick('О нас')}
                >
                  О нас
                </Link>
              </li>
              <li key="ПРОДУКЦИЯ">
                <Link
                  // className={activeLink === 'ПРОДУКЦИЯ' ? 'active' : ''}
                  to="/"
                  // onClick={() => handleLinkClick('ПРОДУКЦИЯ')}
                >
                  ПРОДУКЦИЯ
                </Link>
              </li>
              <li key="Инновации">
                <Link
                  // className={activeLink === 'Инновации' ? 'active' : ''}
                  to="/"
                  // onClick={() => handleLinkClick('Инновации')}
                >
                  Инновации
                </Link>
              </li>
              <li key="Контакты">
                <Link
                  // className={activeLink === 'Контакты' ? 'active' : ''}
                  to="/"
                  // onClick={() => handleLinkClick('Контакты')}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <span className={`material-symbols-outlined hamburger-btn ${isMenuOpen ? 'close' : ''}`} onClick={handleHamburgerClick}>
            {isMenuOpen ? 'close' : 'menu'}
          </span>
          <span className="material-symbols-outlined language">language</span>
          {/* {isMenuOpen && renderMenu()} */}
          {renderMenu()}
        </header>

        <div className="info">
          <h2 className="hh2">Наслаждайся жизнью,</h2>
          <h3 className="hh3">Наслаждайся поездкой.</h3>
        </div>
        <div className="inovations">
          <p>Инновация</p>
          <span>
            Движимый инновациями и стремлением к совершенству, Chery Holding <br />
            полон решимости стать лидером в каждой из своих областей и стать <br />
            влиятельным и заслуживающим доверия брендом группы. <br />
          </span>
        </div>
        <Link to="/page">
          <img className="link" src={link} alt="link-photo" />
        </Link>
      </Container>
    </section>
  );
}

export default HomePage;
