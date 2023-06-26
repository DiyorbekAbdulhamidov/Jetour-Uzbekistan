import "./company.scss"

function Company() {
  return (
    <div className="box">
      <div className="o-company">
        <p>О Компании</p>
        <span>
          "JETOUR" - это серия автомобильных продуктов, <br /> выпущенных холдинговой группой Chery 22 января 2018 <br /> года.
          Придерживаясь концепции путешествия + стратегия, <br /> путешествия + рынок.
        </span>
      </div>
      <div className="company-st">
        <div>
          <span>80</span>
          <div className="col">
            <span>+</span>
            <p>Стран</p>
          </div>
        </div>

        <div>
          <span>10</span>
          <div className="col">
            <span>+</span>
            <p>Продуктов</p>
          </div>
        </div>

        <div>
          <span>48000</span>
          <div className="col">
            <span>+</span>
            <p>Сотрудников</p>
          </div>
        </div>

        <div>
          <span>2018</span>
          <div className="col">
            <span>+</span>
            <p>Был Основан </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;