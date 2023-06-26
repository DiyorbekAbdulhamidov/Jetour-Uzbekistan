import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import country1 from "../assets/imgs/country-1.svg";
import country2 from "../assets/imgs/country-2.svg";
import country3 from "../assets/imgs/country-3.svg";
import country4 from "../assets/imgs/country-4.svg";
import country5 from "../assets/imgs/country-5.svg";
import country6 from "../assets/imgs/country-6.svg";
import country7 from "../assets/imgs/country-7.svg";
import country8 from "../assets/imgs/country-8.svg";
import country9 from "../assets/imgs/country-9.svg";
import "./partner.scss";

function Partner() {
  return (
    <section className="partner-page">
      <h3>НАШИ <span>ПАРТНЕРЫ</span> </h3>
      <div className="partner-imgs">
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={1000}
          transitionTime={500}
          emulateTouch={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={10}
        >
          <div>
            <img src={country1} alt="" />
          </div>
          <div>
            <img src={country2} alt="" />
          </div>
          <div>
            <img src={country3} alt="" />
          </div>
          <div>
            <img src={country4} alt="" />
          </div>
          <div>
            <img src={country5} alt="" />
          </div>
          <div>
            <img src={country6} alt="" />
          </div>
          <div>
            <img src={country7} alt="" />
          </div>
          <div>
            <img src={country8} alt="" />
          </div>
          <div>
            <img src={country9} alt="" />
          </div>
          <div>
            <img src={country5} alt="" />
          </div>
          <div>
            <img src={country6} alt="" />
          </div>
          <div>
            <img src={country7} alt="" />
          </div>
          <div>
            <img src={country8} alt="" />
          </div>
          <div>
            <img src={country9} alt="" />
          </div>
          <div>
            <img src={country1} alt="" />
          </div>
          <div>
            <img src={country2} alt="" />
          </div>
          <div>
            <img src={country3} alt="" />
          </div>
          <div>
            <img src={country4} alt="" />
          </div>
          <div>
            <img src={country5} alt="" />
          </div>
          <div>
            <img src={country1} alt="" />
          </div>
          <div>
            <img src={country2} alt="" />
          </div>
          <div>
            <img src={country3} alt="" />
          </div>
          <div>
            <img src={country4} alt="" />
          </div>
          <div>
            <img src={country5} alt="" />
          </div>
          <div>
            <img src={country1} alt="" />
          </div>
          <div>
            <img src={country2} alt="" />
          </div>
          <div>
            <img src={country3} alt="" />
          </div>
          <div>
            <img src={country4} alt="" />
          </div>
          <div>
            <img src={country5} alt="" />
          </div>
          <div>
            <img src={country6} alt="" />
          </div>
          <div>
            <img src={country7} alt="" />
          </div>
          <div>
            <img src={country8} alt="" />
          </div>
          <div>
            <img src={country9} alt="" />
          </div>
          <div>
            <img src={country5} alt="" />
          </div>
          <div>
            <img src={country6} alt="" />
          </div>
          <div>
            <img src={country7} alt="" />
          </div>
          <div>
            <img src={country8} alt="" />
          </div>
          <div>
            <img src={country9} alt="" />
          </div>
          <div>
            <img src={country1} alt="" />
          </div>
          <div>
            <img src={country2} alt="" />
          </div>
          <div>
            <img src={country3} alt="" />
          </div>
          <div>
            <img src={country4} alt="" />
          </div>
          <div>
            <img src={country5} alt="" />
          </div>
          <div>
            <img src={country1} alt="" />
          </div>
          <div>
            <img src={country2} alt="" />
          </div>
          <div>
            <img src={country3} alt="" />
          </div>
          <div>
            <img src={country4} alt="" />
          </div>
          <div>
            <img src={country5} alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Partner;
