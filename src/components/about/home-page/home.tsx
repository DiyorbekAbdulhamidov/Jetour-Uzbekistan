import logo from "../../assets/imgs/Jeotur-logo-blanco-final.png"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


import "./home.scss"

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
        <nav className="home-nav">
          <li className="home-li">
            <Link className="home-a" to="/">главная</Link>
          </li>
          <li className="home-li">
            <Link className="home-a" to="/about">О нас</Link>
          </li>
          <li className="home-li">
            <Link className="home-a" to="/">ПРОДУКЦИЯ</Link>
          </li>
          <li className="home-li">
            <Link className="home-a" to="/">Инновации</Link>
          </li>
          <li className="home-li">
            <Link className="home-a" to="/">Контакты</Link>
          </li>
        </nav>
      </div>
    );
  }


  return (
    <section className="home-section">
      <header className="home-header">
        <a href="/about"><img className="home-logo" src={logo} alt="jetour-logo" /></a>
        <nav className="home-nav">
          <li className="home-li"><Link className="home-a" to="/">главная</Link></li>
          <li className="home-li"><Link className="home-a activ" to="/about">О нас</Link></li>
          <li className="home-li"><a className="home-a" href="">ПРОДУКЦИЯ</a></li>
          <li className="home-li"><a className="home-a" href="">бЛОГ</a></li>
          <li className="home-li"><a className="home-a" href="">Инновации</a></li>
          <li className="home-li"><a className="home-a" href="">Контакты</a></li>
        </nav>
        <span className={`material-symbols-outlined hamburger-btn ${isMenuOpen ? 'close' : ''}`} onClick={handleHamburgerClick}>
          {isMenuOpen ? 'close' : 'menu'}
        </span>
        <span className="material-symbols-outlined language">language</span>
        {/* {isMenuOpen && renderMenu()} */}
        {renderMenu()}
      </header>
      <div className="home-info">
        <h2 className="home-h2">О нас</h2>
        <p className="home-p">Главная <span className="home-span">| О нас</span></p>
      </div>

    </section>
  )
};

export default HomePage;
