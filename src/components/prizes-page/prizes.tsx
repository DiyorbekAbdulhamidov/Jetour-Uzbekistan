import { Container } from "../container/container";
import "./prizes.scss"

function Prizes() {
  return ( 
    <section className="prizes-page">
      <Container>
        <div className="prizes-pages">
      <h3 className="h3">
        НАШИ <br />
       <span>НАГРАДЫ</span>  
      </h3>
      <div className="prizes-boxes">
        <div>
          <span>2015</span>
          <p>Лучшее зарубежное <br /> имиджевое предприятие.</p>
        </div>

        <div>
          <span>2020</span>
          <p>JETOUR X70, как самая <br /> продаваемая модель.</p>
        </div>

        <div>
          <span>2016</span>
          <p>Лучшее зарубежное <br /> имиджевое предприятие.</p>
        </div>

        <div>
          <span>2021</span>
          <p>Превзошли по продажам таких <br /> гигантов как Toyota и Huyundai.</p>
        </div>
      </div>
      </div>
      </Container>
    </section> 

  );
}

export default Prizes;