import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imgs } from "./partners-list";
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
          infiniteLoop
          autoPlay={true}
          interval={1000}
          transitionTime={500}
          emulateTouch={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={10}
          swipeable={false}
          stopOnHover={false}

        >
          {[...imgs, ...imgs, ...imgs, ...imgs].map((img, i) => <div className="partner-imgs" key={i} ><img src={img} alt="partners" /></div>)}
        </Carousel>
      </div>
    </section>
  );
}

export default Partner;
