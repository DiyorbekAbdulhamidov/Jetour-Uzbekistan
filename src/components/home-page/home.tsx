import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <li className="home-li"><NavLink className="home-a activ" to="/">главная</NavLink></li>
          <li className="home-li"><NavLink className="home-a" to="/about">О нас</NavLink></li>
          <li className="home-li"><NavLink className="home-a" to="/products">ПРОДУКЦИЯ</NavLink></li>
          <li className="home-li"><NavLink className="home-a" to="/blog">бЛОГ</NavLink></li>
          <li className="home-li"><NavLink className="home-a" to="/inovations">Инновации</NavLink></li>
          <li className="home-li"><NavLink className="home-a" to="/contacts">Контакты</NavLink></li>
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
              <li className="home-li"><NavLink className="home-a activ" to="/">главная</NavLink></li>
              <li className="home-li"><NavLink className="home-a" to="/about">О нас</NavLink></li>
              <li className="home-li"><NavLink className="home-a" to="/products">ПРОДУКЦИЯ</NavLink></li>
              <li className="home-li"><NavLink className="home-a" to="/blog">бЛОГ</NavLink></li>
              <li className="home-li"><NavLink className="home-a" to="/inovations">Инновации</NavLink></li>
              <li className="home-li"><NavLink className="home-a" to="/contacts">Контакты</NavLink></li>
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
