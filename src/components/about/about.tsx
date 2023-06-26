import HomePage from "../about/home-page/home";
import Start from "../start-page/start";
import Jetour from "./jetour-page/jetour";
import Company from "../company-page/company";
import Historys from "./history/history";
import Footer from "../footer/footer";

function About() {
  return (
    <>
      <HomePage />
      <Jetour></Jetour>
      <Company></Company>
      <Historys></Historys>
      <Start />
      <Footer></Footer>
    </>
  );
}

export default About;
