import logo from "../../assets/imgs/Jeotur-logo-blanco-final.png"
import { Link } from 'react-router-dom';

import "./home.scss"

function HomePage() {
  return (
    <section className="home-section">
      <header>
        <img className="hh" src={logo} alt="" />
        <nav>
          <li><Link to="/">главная</Link></li>
          <li><Link className="activ" to="/about">О нас</Link></li>
          <li><a href="">ПРОДУКЦИЯ</a></li>
          <li><a href="">бЛОГ</a></li>
          <li><a href="">Инновации</a></li>
          <li><a href="">Контакты</a></li>
        </nav>
      </header>
      <div className="infos">
        <h2>О нас</h2>
        <p>Главная <span className="span">| О нас</span></p>
      </div>

    </section>  
  )
};

export default HomePage;
