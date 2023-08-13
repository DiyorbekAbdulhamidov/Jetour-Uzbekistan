import { Helmet } from "react-helmet-async";
import Company from "./components/company-page/company";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home-page/home";
import Mp4 from "./pages/home/mp4-page/mp4";
import News from "./pages/home/news-page/news";
import Partner from "./pages/home/partner-page/parnter";
import Prizes from "./pages/home/prizes-page/prizes";
import Products from "./pages/home/products-page/products";
import Start from "./components/start-page/start";
import Travel from "./pages/home/travel-page/travel";
import { useState, createContext, useEffect } from "react";
import Loader from "./components/loader/loader";
import { API_URl } from "./api";
import axios from "axios";

type Cars = {
  id: number;
  name: string;
  car_image: string;
  created_on: string;
};

export type CarsType = {
  cars: Cars[];
  setCars: (cars: Cars[]) => void;
};

export const AppContext = createContext<CarsType | null>(null);

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios(API_URl);
        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Jetour Uzbekistan</title>
        <meta
          name="description"
          content="Jetour Автокомпания - международная компания, которая специализируется на производстве и поставке высококачественных автомобилей. Наша миссия - предоставить клиентам надежные и инновационные автомобили с высокой производительностью и комфортом. Мы гордимся своими продуктами, которые сочетают в себе современный дизайн, передовые технологии и безопасность. Приобретая автомобили Jetour, вы получаете надежное средство передвижения, которое обеспечит вам комфорт и уверенность на дороге."
        />
        <link rel="canonical" href="https://jetour-uzbekistan.uz/" />
      </Helmet>

      <AppContext.Provider value={{ cars, setCars }}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Home />
            <Company />
            <Products />
            <Mp4 />
            <Travel />
            <Prizes />
            <News />
            <Partner />
            <Start />
            <Footer />
          </>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
