import grayArrow from "../assets/imgs/gray-arrow.svg";
import link1 from "../assets/imgs/jetour-link.svg";
import link2 from "../assets/imgs/jetour-link2.svg";
import link3 from "../assets/imgs/jetour-link3.svg";

import "./news.scss"

function News() {
  return (
    <section className="news-page">
      <div className="news-info">
        <p>Наш Блог</p>
        <h2>Читайте <br /> наши новости</h2>
        <span>Читать больше <img src={grayArrow} alt="" /></span>
      </div>
      <div className="news-imgs">
        <img src={link1} alt="" />
        <img src={link2} alt="" />
        <img className="link3" src={link3} alt="" />
      </div>
    </section>
  );
}

export default News;