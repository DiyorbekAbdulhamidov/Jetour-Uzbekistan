import HomePage from "../about/home-page/home";
import Jetour from "./jetour-page/jetour";
import Historys from "./history/history";
import Start from "../start-page/start";
import Company from "../company-page/company";
import Footer from "../footer/footer";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>Jetour Uzbekistan</title>
        <meta name="description" content="Jetour Автокомпания - международная производитель автомобилей. Мы производим и поставляем высококачественные автомобили." />
      </Helmet>
      <HomePage />
      <Jetour />
      <Company />
      <Historys />
      <Start />
      <Footer />
    </>
  );
}

export default About;
