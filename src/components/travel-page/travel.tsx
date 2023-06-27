import React from 'react';
import './travel.scss';
import arrow from '../assets/imgs/arrow.svg';
import none from '../assets/imgs/none.svg';
import dog from '../assets/imgs/dog.svg';
import fer from '../assets/imgs/fer.svg';

function Travel() {
  return (
    <section className="travel-page">
      <div className="travel-info">
        <h3>
          ОПРЕДЕЛИТЕ СВОЕ <br /> <span>ПУТИШЕСТВИЕ </span>
        </h3>
        <div>
          <button>
            <p>
              Жизнеспособность <img className="arrow" src={arrow} alt="" />
            </p>
          </button>
          <button>
            <p>
              Предприимчивый <img className="arrow" src={arrow} alt="" />
            </p>
          </button>
          <button>
            <p>
              Сила действия <img className="arrow" src={arrow} alt="" />
            </p>
          </button>
        </div>
      </div>

      <div className='tr'>
        <div className="travel-imgs">
          <img src={dog} alt="" />
          <div className="overlay">
            <div className="text">
              Запускайте жизнеспособные продукты и <br /> развивайте их будущим с разными людьми
            </div>
          </div>
        </div>

        <div className="travel-imgs">
          <img src={fer} alt="" />
          <div className="overlay">
            <div className="text">
              Мы создаем больше инновационных <br /> технологий для нашего будущего поколения
            </div>
          </div>
        </div>

        <div className="travel-imgs">
          <img src={none} alt="" />
          <div className="overlay">
            <div className="text">
              Сила действия - JETOUR запущен для <br /> будущего, он доказывает это действиями
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Travel;
