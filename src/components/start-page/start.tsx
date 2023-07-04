import { Container } from "../container/container";
import "./start.scss"

function Start() {
  return (
    <div className="start-container">
      <Container>
      <div className="start">
        <h2>Давайте вместе <br /> обсудим что-нибудь классное</h2>
        <button>начать</button>
      </div>
      </Container>
    </div>

  );
}

export default Start;
