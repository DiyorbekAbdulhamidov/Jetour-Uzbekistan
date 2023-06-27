import "./products.scss"
import dashing from "../assets/imgs/dashing.svg";
import x95plus from "../assets/imgs/x95plus.svg";
import x70plus from "../assets/imgs/x70plus.svg";

function Products() {
  return (
    <section className="products">
      <div className="products-info">
        <div>
          <h3>мы гордимся</h3>
          <h4>Нашими продуктами</h4>
        </div>
        <button>Наши продукты</button>
      </div>
      <div className="products-boxes">
        <div>
          <img src={dashing} alt="" />
          <p>JETOUR Dashing</p>
        </div>

        <div>
          <img src={x95plus} alt="" />
          <p>JETOUR X95Plus </p>
        </div>

        <div>
          <img src={x70plus} alt="" />
          <p>JETOUR X70Plus </p>
        </div>
      </div>
    </section>
  );
}

export default Products;