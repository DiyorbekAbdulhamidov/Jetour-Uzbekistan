import React, { useState } from "react";
import axios from "axios";
import logo from "../../../src/components/assets/imgs/Jeotur-logo-blanco-final.png";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../../components/about/home-page/home.scss";
import "./building.scss";
import { toast } from "react-hot-toast";

const Building = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const API_URL = `https://jetour-uzbekistan.uz/api/send-message/21a464971f3f1bd202fc97132754c5dd0e0407f9/`;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = {
      name: name,
      phone_number: phoneNumber
    };

    try {
      await axios.post(API_URL, formData).then((response) => {

        setName("");
        setPhoneNumber("");
        // setShowAlert(true);
        toast.success('Ваше сообщение успешно отправлено.', {
          className: 'custom-toast',
        });
      });
    }
    catch (error: any) {
      toast.error(error.message)
      console.error(error.message);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenu = () => {
    return (
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <nav className="home-nav">
          <li className="home-li">
            <NavLink className="home-a" to="/">
              главная
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/about">
              О нас
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/products">
              ПРОДУКЦИЯ
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/blog">
              бЛОГ
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/inovations">
              Инновации
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/contacts">
              Контакты
            </NavLink>
          </li>
        </nav>
      </div>
    );
  };

  return (
    <div className="building">
      <Helmet>
        <title>Construction</title>
        <meta
          name="description"
          content="Jetour Автокомпания - международная производитель автомобилей. Мы производим и поставляем высококачественные автомобили."
        />
        <link rel="canonical" href="https://jetour-uzbekistan.uz/" />
      </Helmet>
      <header className="home-header">
        <a href="/about">
          <img className="home-logo" src={logo} alt="jetour-logo" />
        </a>
        <nav className="home-nav">
          <li className="home-li">
            <NavLink className="home-a" to="/">
              главная
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/about">
              О нас
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/products">
              ПРОДУКЦИЯ
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/blog">
              бЛОГ
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/inovations">
              Инновации
            </NavLink>
          </li>
          <li className="home-li">
            <NavLink className="home-a" to="/contacts">
              Контакты
            </NavLink>
          </li>
        </nav>
        <span
          className={`material-symbols-outlined hamburger-btn ${isMenuOpen ? "close" : ""
            }`}
          onClick={handleHamburgerClick}
        >
          {isMenuOpen ? "close" : "menu"}
        </span>
        <span className="material-symbols-outlined language">language</span>
        {renderMenu()}
      </header>
      <div className="building-info">
        <h1>
          Sorry, site is under construction ⌚,
          <NavLink to="/">
            <span className="material-symbols-outlined arrow"> arrow_back </span>{" "}
            Go to back
          </NavLink>
        </h1>
        <form onSubmit={handleSubmit}>
          <p>Contact us</p>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your phone number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {showAlert && (
        <div className="alert">
          <span className="closebtn" onClick={handleAlertClose}>
            &times;
          </span>
          Ваше сообщение успешно отправлено.
        </div>
      )}
    </div>
  );
};

export default Building;
