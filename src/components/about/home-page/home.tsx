import logo from "../../assets/imgs/Jeotur-logo-blanco-final.png"
import { Link } from 'react-router-dom';

import "./home.scss"

function HomePage() {
  return (
    <section className="home-section">
      <header className="home-header">
        <img className="home-logo" src={logo} alt="" />
        <nav className="home-nav">
          <li className="home-li"><Link className="home-a" to="/">главная</Link></li>
          <li className="home-li"><Link className="home-a activ" to="/about">О нас</Link></li>
          <li className="home-li"><a className="home-a" href="">ПРОДУКЦИЯ</a></li>
          <li className="home-li"><a className="home-a" href="">бЛОГ</a></li>
          <li className="home-li"><a className="home-a" href="">Инновации</a></li>
          <li className="home-li"><a className="home-a" href="">Контакты</a></li>
        </nav>
      </header>
      <div className="home-info">
        <h2 className="home-h2">О нас</h2>
        <p className="home-p">Главная <span className="home-span">| О нас</span></p>
      </div>

    </section>
  )
};

export default HomePage;
