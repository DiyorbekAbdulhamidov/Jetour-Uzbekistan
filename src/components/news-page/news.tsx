import grayArrow from "../assets/imgs/gray-arrow.svg";
import link1 from "../assets/imgs/jetour-link.svg";
import link2 from "../assets/imgs/jetour-link2.svg";
import link3 from "../assets/imgs/jetour-link3.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./news.scss";

function News() {
  return (
    <section className="news-page">
      <div className="news-info">
        <p>Наш Блог</p>
        <h3>Читайте  наши <h2>новости </h2> </h3>
        <span>Читать больше <img src={grayArrow} alt="" /></span>
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
        >
          <div>
            <img src={link1} alt="" />
          </div>
          <div>
            <img src={link2} alt="" />
          </div>
          {/* <div> */}
          {/* <img className="link3" src="https://s3-alpha-sig.figma.com/img/8d0f/20f3/fe217c3e52e42bf0e5cd68743f54d0a2?Expires=1688947200&Signature=G4ZWUPhHXVQKbZRTZxDk62RHvwZkeZx13TwbmCuL5h7jZQ209Mr97zkw2vpJPiT4LL1oCkLdB9RJ7zZsiVfaegKSX86-aRLl4ZiCpK8QpBCMVBkzjOfPmJK01OcBGvvcf0L4R~nXHNKt25ga7ci~xV4m~T~7ka1wWubsukfIQLwmELEPeNWMd8bJfHvDg2f11CnM8QfLs-h5alib7OnEGz6wEW8WXZ-B2hdWmkkvjIcW7-XLVSnQvbGI-adrqDBaPzrPrYlBxEnuJbSIUCUo8Htx2-kFN1StBMmudFILEX9iYBsg2Y67thL2om9ABjsxxeYrJMax7ETWNTir-SbDCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /> */}
          {/* </div> */}
          <div>
            <img src={link1} alt="" />
          </div>
          <div>
            <img src={link2} alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default News;