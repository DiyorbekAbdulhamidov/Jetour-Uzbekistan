import React from "react";
import "./mp4.scss";
import suvCar from "../assets/imgs/suv-car.svg";
import mp4Logo from "../assets/imgs/mp4-icon.svg";

function Mp4() {
  const handleIconClick = () => {
    window.open("https://www.youtube.com/embed/XVxx6TSzP94", "_blank");
  };

  return (
    <section className="mp4">
      <h2>jetour - <span>Управляй своим будущим </span> </h2>
      <div>
        <img className="suv-car" src={suvCar} alt="" />
        <img className="icon" src={mp4Logo} alt="" onClick={handleIconClick} />
      </div>
    </section>
  );
}

export default Mp4;
