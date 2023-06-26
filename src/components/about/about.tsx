import HomePage from "../about/home-page/home";
import Jetour from "./jetour-page/jetour";
import Historys from "./history/history";
import Start from "../start-page/start";
import Company from "../company-page/company";
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
