import React, { useState, FunctionComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/imgs/Jeotur-logo-blanco-final.png';

interface HeaderProps {

}
const Header: FunctionComponent<HeaderProps> = () => {

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



  return (<header>
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
    <span className="material-symbols-outlined language">
      language
      {/* <select name="language" id="">
        <option value="RU">RU</option>
        <option value="EN">EN</option>
        <option value="UZ">UZ</option>
      </select> */}
    </span>
    {/* {isMenuOpen && renderMenu()} */}
    {renderMenu()}
  </header>);
}

export default Header;