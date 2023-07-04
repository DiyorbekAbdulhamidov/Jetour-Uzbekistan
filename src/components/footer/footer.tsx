import { Link } from "react-router-dom";
import twitter from "../assets/imgs/twitter.svg";
import youtube from "../assets/imgs/youtube.svg";
import ai from "../assets/imgs/ai.svg";

import './footer.scss';
import { Container } from "../container/container";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer">

          <div className="footer-top">
            <div className="footer-gg">
              <p>JETOUR</p>
              <span>
                Добро пожаловать в нашу быстро <br /> ростущую компанию по производству <br /> Китайских электромобилей
              </span>
              <div className="logos">
                <img src={ai} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
                <img src={ai} alt="" />
              </div>
            </div>

            <div className="footer-gg">
              <p>Навигация</p>
              <span><a href="">О нас</a></span>
              <span><a href="">Продукция</a></span>
              <span><a href="">Блог</a></span>
              <span><a href="">Инновация</a></span>
            </div>

            <div className="footer-gg">
              <p>Контакты</p>
              <span><a href="">г.Ташкент, Сергелийский район</a></span>
              <span><a href="">+998 (78) 113 13 78</a></span>
              <span><a href="">jetour@outlook.com</a></span>
            </div>

            <div className="footer-gg">
              <p>Будьте в курсе событий</p>
              <div className="inpBtn">
                <input type="text" placeholder="example@gmail.com" />
                <button>Отправить</button>
              </div>
              <span>Вам на почту будут приходить новости <br /> и поставки новой продукции от нашей <br /> диллерской компании в Узбекистане</span>
            </div>
          </div>
          <div className="footer-bot">
            <span>Copyright © 2023 JETOUR.</span>
            <p>Правила использоваия </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;