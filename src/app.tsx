import { Helmet } from "react-helmet-async";
import Company from "./components/company-page/company";
import { Container } from "./components/container/container";
import Footer from "./components/footer/footer";
import Home from "./components/home-page/home";
import Mp4 from "./components/mp4-page/mp4";
import News from "./components/news-page/news";
import Partner from "./components/partner-page/parnter";
import Prizes from "./components/prizes-page/prizes";
import Products from "./components/products-page/products";
import Start from "./components/start-page/start";
import Travel from "./components/travel-page/travel";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Jetour Uzbekistan</title>
        <meta name="description" content="Jetour Автокомпания - международная компания, которая специализируется на производстве и поставке высококачественных автомобилей. Наша миссия - предоставить клиентам надежные и инновационные автомобили с высокой производительностью и комфортом. Мы гордимся своими продуктами, которые сочетают в себе современный дизайн, передовые технологии и безопасность. Приобретая автомобили Jetour, вы получаете надежное средство передвижения, которое обеспечит вам комфорт и уверенность на дороге." />
        <link rel="canonical" href="https://jetour-uzbekistan.uz/" />
      </Helmet>
      <Home></Home>
      <Company></Company>
      <Products></Products>
      <Mp4></Mp4>
      <Travel></Travel>
      <Prizes></Prizes>
      <News></News>
      <Partner></Partner>
      <Start></Start>
      <Footer></Footer>
    </div>
  );
}

export default App;