import dashing from "../assets/imgs/dashing.svg";
import x95plus from "../assets/imgs/x95plus.svg";
import x70plus from "../assets/imgs/x70plus.svg";
import { Container } from "../../../components/container/container";
import "./products.scss";

function Products() {
  return (
    <section className="products">
      <Container>
        <div className="products-info">
          <div>
            <h3>мы гордимся</h3>
            <h4>Нашими продуктами</h4>
          </div>
          <button>Наши продукты</button>
        </div>
        <div className="products-boxes">
          <div>
            <img src={dashing} alt="JETOUR DASHING" />
            <p>JETOUR Dashing</p>
          </div>

          <div>
            <img src={x95plus} alt="JETOUR X95 PLUS" />
            <p>JETOUR X95Plus </p>
          </div>

          <div>
            <img src={x70plus} alt="JETOUR X70PLUS" />
            <p>JETOUR X70Plus </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Products;