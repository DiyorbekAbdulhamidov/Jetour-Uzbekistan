import "./travel.scss";
import arrow from "../assets/imgs/arrow.svg";
import none from "../assets/imgs/none.svg";
import dog from "../assets/imgs/dog.svg";
import fer from "../assets/imgs/fer.svg"


function Travel() {
  return (
    <section className="travel-page">
      <div className="travel-info">
        <h3>ОПРЕДЕЛИТЕ СВОЕ <br /> ПУТИШЕСТВИЕ</h3>
        <div>
          <button><p>Жизнеспособность <img className="arrow" src={arrow} alt="" /></p></button>
          <button><p>Предприимчивый   <img className="arrow" src={arrow} alt="" /></p></button>
          <button><p>Сила действия    <img className="arrow" src={arrow} alt="" /></p></button>
        </div>
      </div>
      <div className="travel-imgs">
        <img src={dog} alt="" />
        <img src={fer} alt="" />
        <img src={none} alt="" />
      </div>
    </section>
  );
}

export default Travel;