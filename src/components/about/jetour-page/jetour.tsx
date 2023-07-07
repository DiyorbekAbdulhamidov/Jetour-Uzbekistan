import cars from "../../assets/imgs/cars.svg";
import cherry from "../../assets/imgs/cherry.svg";
import life from "../../assets/imgs/life.svg";
import "./jetour.scss"

function Jetour() {
  return (
    <section className="jetour-page">
      <div className="jetour-flx1">
        <div className="jetour-infos">
          <span className="pro">Про JETOUR</span>
          <p className="onas">О нас</p>
          <span className="soz">Холдинговая группа Chery была основана 20 октября 2010 года, расположена в <br /> экономическом и
            Зона технологического развития, Аньхой, Китай. <br />
            Подчиненная инвестиционная отрасль включает в себя различные сегменты <br /> бизнеса, включая автомобили, производство автозапчастей и НИОКР, <br /> судостроение, финансовые инвестиции, торговлю услугами и т.д., <br /> охватывающие около 80 стран и регионов по всему миру. В настоящее время в <br /> компании работает более 48000 сотрудников, а общий объем активов <br /> составляет более 120 миллиардов юаней.</span>
        </div>
        <img className="cherry" src={cherry} alt="cherry-holding" />
      </div>
      <div className="jetour-flx">
        <img className="life" src={life} alt="mountain" />
        <img className="cars" src={cars} alt="cars" />
      </div>
    </section>
  )
}

export default Jetour