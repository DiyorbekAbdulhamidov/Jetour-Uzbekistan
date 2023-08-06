import { Link, NavLink } from 'react-router-dom';
import link from '../../../assets/imgs/link.svg';
import './home.scss';
import { Container } from '../../../components/container/container';
import Header from '../../../components/header/header';

function HomePage() {

  return (
    <section className="home">
      <Container>
        <Header></Header>
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