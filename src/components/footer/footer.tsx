import linkedin from "../assets/imgs/link.svg";
import twitter from "../assets/imgs/twitter.svg";
import youtube from "../assets/imgs/youtube.svg";
import ai from "../assets/imgs/ai.svg";

import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-gg">
          <p>JETOUR</p>
          <span>
            Добро пожаловать в нашу быстро <br /> ростущую компанию по производству <br /> Китайских электромобилей
          </span>
          <div className="logos">
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={ai} alt="" />
          </div>
        </div>

        <div className="footer-gg">
          <p>Навигация</p>
          <span>О нас</span>
          <span>Продукция</span>
          <span>Блог</span>
          <span>Инновация</span>
        </div>

        <div className="footer-gg">
          <p>Контакты</p>
          <span>г.Ташкент, Сергелийский район</span>
          <span>+998 (78) 113 13 78</span>
          <span>jetour@outlook.com</span>
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
    </footer>
  );
}

export default Footer;