import grayArrow from "../assets/imgs/gray-arrow.svg";
import link1 from "../assets/imgs/jetour-link.svg";
import link2 from "../assets/imgs/jetour-link2.svg";
import link3 from "../assets/imgs/jetour-link3.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./news.scss";
import { Container } from "../container/container";

function News() {
  return (
    <section className="news-page">
      <Container>
        <div className="news-pages">
          <div className="news-info">
            <p>Наш Блог</p>
            <h3>Читайте  наши <h2>новости </h2> </h3>
            <span>Читать больше <img src={grayArrow} alt="arrow" /></span>
          </div>
          <div className="news-imgs">
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
              centerSlidePercentage={50}
              swipeable={false}
              stopOnHover={false}
            >
              <div>
                <img src={link1} alt="news-info-photo" />
              </div>
              <div>
                <img src={link2} alt="news-info-photo" />
              </div>
              <div>
                <img src={link1} alt="news-info-photo" />
              </div>
              <div>
                <img src={link2} alt="news-info=photo" />
              </div>
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default News;