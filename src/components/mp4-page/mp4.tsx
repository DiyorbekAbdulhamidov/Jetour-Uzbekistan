import React from "react";
import "./mp4.scss";
import suvCar from "../assets/imgs/suv-car.svg";
import mp4Logo from "../assets/imgs/mp4-icon.svg";
import { Container } from "../container/container";

function Mp4() {
  const handleIconClick = () => {
    window.open("https://www.youtube.com/embed/XVxx6TSzP94", "_blank");
  };

  return (
    <section className="mp4">
      <Container>
        <h2>jetour - <span>Управляй своим будущим </span> </h2>
        <div>
          <img className="suv-car" src={suvCar} alt="jetour-car" />
          <img className="icon" src={mp4Logo} alt="mp4player" onClick={handleIconClick} />
        </div>
      </Container>
    </section>
  );
}

export default Mp4;
