import React, { useState } from "react";
import axios from "axios";
import twitter from "../assets/imgs/twitter.svg";
import youtube from "../assets/imgs/youtube.svg";
import ai from "../assets/imgs/ai.svg";
import linkedin from "../assets/imgs/linkedin.svg";
import { Container } from "../container/container";
import { toast } from "react-hot-toast";

import './footer.scss';
import { Link } from "react-router-dom";

function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const token = "6234017255:AAGUOISG3bmtcO4mFSArLZ7YNADsjzxSvFU";
  const API_URL = `https://api.telegram.org/bot${token}/sendMessage`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const phoneNumberValue = event.currentTarget.phoneNumber.value;

    const data = {
      chat_id: '-796827606',
      parse_mode: "html",
      text: phoneNumberValue
    };

    try {
      await axios.post(API_URL, data).then((response) => {
        setPhoneNumber("");
        // setShowAlert(true);
        toast.success('Ваше сообщение успешно отправлено.', {
          className: 'custom-toast',
        });

      })
    }
    catch (error: any) {
      toast.error(error?.response?.data);
      console.error(error.message);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

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
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
                <img src={youtube} alt="youtube" />
                <img src={ai} alt="ai" />
              </div>
            </div>

            <div className="footer-gg">
              <p>Навигация</p>
              <span><Link to={"/about"}>О нас</Link></span>
              <span><Link to={"/products"}>Продукция</Link></span>
              <span><Link to={"/blog"}>Блог</Link></span>
              <span><Link to={"/inovations"}>Инновация</Link></span>3
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
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Your Phone Number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                  <button type="submit">Отправить</button>
                </form>
              </div>
              <span>Вам на почту будут приходить новости <br /> и поставки новой продукции от нашей <br /> дилерской компании в Узбекистане</span>
            </div>
          </div>
        </div>
      </Container>
      {showAlert && (
        <div className="alert">
          <span className="closebtn" onClick={handleAlertClose}>
            &times;
          </span>
          Ваше сообщение успешно отправлено.
        </div>
      )}
    </footer>
  );
}

export default Footer;