import logo from "../assets/imgs/Jeotur-logo-blanco-final.png"
import link from "../assets/imgs/link.svg"
import "./home.scss"

function Home() {
  return (
    <>
      <section className="home">
        <header>
          <img className="logo" src={logo} alt="" />
          <nav>
            <li><a className="gl" href="">главная</a></li>
            <li><a href="">О нас</a></li>
            <li><a href="">ПРОДУКЦИЯ</a></li>
            <li><a href="">Инновации</a></li>
            <li><a href="">Контакты</a></li>
          </nav>
        </header>
        <div className="info">
          <h2>Наслаждайся жизнью, </h2>
          <h3>Наслаждайся поездкой.</h3>
        </div>
        <div className="inovations">
          <p>Инновация</p>
          <span>
            Движимый инновациями и стремлением к совершенству, Chery Holding <br />
            полон решимости стать лидером в каждой из своих областей и стать <br />
            влиятельным и заслуживающим доверия брендом группы. <br />
          </span>
        </div>
        <img className="link" src={link} alt="" />
      </section>
    </>
  );
}

export default Home;