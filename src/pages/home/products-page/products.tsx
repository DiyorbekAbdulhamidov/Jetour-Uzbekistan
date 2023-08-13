import { Container } from "../../../components/container/container";
import "./products.scss";
import { useContext } from "react";
import { AppContext, CarsType } from "../../../app";

function Products() {
  const { cars } = useContext(AppContext) as CarsType;

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
          {cars.map((car) => (
            <div key={car.id}>
              <img src={car.car_image} alt={car.name} />
              <p>{car.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Products;
