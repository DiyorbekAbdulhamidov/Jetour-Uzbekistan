// import logo from "../assets/imgs/logo.svg"
import link from "../assets/imgs/link.svg"
import "./home.scss"

function Home() {
  return (
    <>
      <section className="home">
        <header>
          <img className="logo" src='https://s3-alpha-sig.figma.com/img/af97/04e5/1286fdc41879b9cb4c54b8349ff0be90?Expires=1688947200&Signature=RYSGxq-gkWXtczY5jmGpq5acI0QkTWK-biAcylTMAZsAzAwNiicb~HoOTAoPgCV6kUiHPAN63DxM4M4lRriOjPlKYsPllBux9Ghhw-tMahZBgzM81J8bnnyEjwPn9ZGMxGzuCRu6Cu~7pRKhCLtsBfXpA21qHRrZzLi~qIcCxh08GWqBNkjlBb19xVv6hG9u--jUJGgN0zpk~BIejbKZRDWNtq9Vq9fIW2B10CCJkc~qxc1Ae7jcf0GJeZm4hCc7DuTwthCD5Mr-HgWX5zPUAq9tzmMUkGFaVK7OTNKBfkep2QsgHzjYGY-2JCl4KFXhQDm2gySBZwXoCDAzsPjL6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" />
          <nav>
            <li><a href="">главная</a></li>
            <li><a href="">О нас</a></li>
            <li><a href="">ПРОДУКЦИЯ</a></li>
            <li><a href="">Инновации</a></li>
            <li><a href="">Контакты</a></li>
          </nav>
        </header>
        <div className="info">
          <h2>Наслаждайся жизнью, </h2>
          <h3>Наслаждайся поездкой.</h3>
        </div>
        <div className="inovations">
          <p>Инновация</p>
          <span>
            Движимый инновациями и стремлением к совершенству, Chery Holding <br />
            полон решимости стать лидером в каждой из своих областей и стать <br />
            влиятельным и заслуживающим доверия брендом группы. <br />
          </span>
        </div>
        <img className="link" src={link} alt="" />
      </section>
    </>
  );
}

export default Home;