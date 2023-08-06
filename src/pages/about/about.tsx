import HomePage from "../about/home-page/home";
import Jetour from "./jetour-page/jetour";
import Historys from "./history/history";
import { Helmet } from "react-helmet-async";
import Company from "../../components/company-page/company";
import Start from "../../components/start-page/start";
import Footer from "../../components/footer/footer";

function About() {
  return (
    <>
      <Helmet>
        <title>Про JETOUR</title>
        <meta name="description" content="Jetour Автокомпания - международная производитель автомобилей. Мы производим и поставляем высококачественные автомобили." />
        <link rel="canonical" href="https://jetour-uzbekistan.uz/about" />
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
