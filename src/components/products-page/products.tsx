import "./products.scss"
import dashing from "../assets/imgs/dashing.svg";
import x95plus from "../assets/imgs/x95plus.svg";

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
          <img src="https://s3-alpha-sig.figma.com/img/1dc8/2b08/4c068fbdfec9f81c515ab2fa4c7b620a?Expires=1688342400&Signature=ZI2cVnbmg2eZyUMD-erSRdkSHRfRE9MF-nSlMWHvFKC7g~oBB00xEBVMFH-ZlzXYYzmB530hz2w24~UkZmxQmQnH-62F9mFWZQmwPSgibY2ok5TjclapNOg9vIiIqeL14fJxULawVKB8~hztqnTKhAkeo05IsdYeVMZbn~OUXEp4sILCVEdRKJik9Xrs5M2NWQT231TfLluGlE7~D89DuzxptzObQpQzZ-R3MQrbhZHcmHaZYclIxhRscZdmJn~EZKG5yX4wMTAxPZ-vFKytv~XpHltDN06IYM002xaFKqpsF32K~DEtaBu-vZ~JFzA0zlHsxUwNqOV4pGpTbynELQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="SVG Image" />
          <p>JETOUR X70Plus </p>
        </div>
      </div>
    </section>
  );
}

export default Products;