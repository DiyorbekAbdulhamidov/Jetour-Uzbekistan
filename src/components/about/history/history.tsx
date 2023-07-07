import pr from "../../assets/imgs/pr.svg"

import "./history.scss"

function Historys() {
  return (
    <section className="history-page">
      <img className="pr" src={pr} alt="president-jetour" />
      <div className="history-info">
        <span className="hs">История JETOUR</span>
        <p className="hp">История</p>
        <span className="js">"JETOUR" - это серия автомобильных продуктов, выпущенных  <br /> холдинговой группой Chery 22 января 2018 года.
          Придерживаясь <br /> концепции путешествия + стратегия, путешествия + рынок.
        </span>
          <span className="j">22 января 2018 года холдинговая группа Chery выпустила серию <br /> продуктов JETOUR в сегменте рынка "путешествия+", а в Пекине был <br /> представлен первый 7-местный внедорожник X70/S. После многих лет <br /> разработок компания JETOUR стремится создать хороший автомобиль <br /> для жизни современной молодежи, который проявит их индивидуальность и определит путешествие совместными действиями.</span>
      </div>
    </section>
  )
}

export default Historys