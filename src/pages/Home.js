import React from "react";
import "../styles/Base.scss";
import "../styles/Features.scss";
import "../styles/Footer.scss";
import "../styles/Gallery.scss";
import "../styles/Header.scss";
import "../styles/Homes.scss";
import "../styles/Realtors.scss";
import "../styles/Sidebar.scss";
import "../styles/Story.scss";
import "../styles/Typography.scss";

const Home = () => {
  return (
    <div>
      <body className="container">
        <div className="sidebar">Sidebar</div>

        <header className="header">Header</header>

        <div className="realtors">Top 3 realtors</div>

        <section className="features">
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-global"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              World's best luxury homes
            </h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-trophy"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              Only the best properties
            </h4>
            <p className="feature__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
              rerum sed a eligendi aut quia.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              All homes in in top locations
            </h4>
            <p className="feature__text">
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem
              consequatur harum.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">New home in one week</h4>
            <p className="feature__text">
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-presentation"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
            <p className="feature__text">
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-lock"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              Secure payments on nexter
            </h4>
            <p className="feature__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum
              mollitia quae.
            </p>
          </div>
        </section>

        <div className="story__pictures">
          <img
            src="img/story-1.jpeg"
            alt="Couple with new house"
            className="story__img-1"
          />
          <img
            src="img/story-2.jpeg"
            alt="New house"
            className="story__img-2"
          />
        </div>

        <div className="story__content">
          <h3 className="heading-3 mb-sm">Happy Customers</h3>
          <h2 className="heading-2 heading-2--dark mb-md">
            &ldquo;The best decision of our lives&rdquo;
          </h2>
          <p className="story__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
            harum volupta!
          </p>
          <button className="btn">Find your own home</button>
        </div>

        <section className="homes">
          <div className="home">
            <img src="img/house-1.jpeg" alt="House 1" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>5 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-key"></use>
              </svg>
              <p>$1,200,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src="img/house-2.jpeg" alt="House 2" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Modern Glass Villa</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>Canada</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                450 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-key"></use>
              </svg>
              <p>$2,750,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>
          <div className="home">
            <img src="img/house-3.jpeg" alt="House 3" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Cozy Country House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>UK</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>4 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                250 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-key"></use>
              </svg>
              <p>$850,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>
          <div className="home">
            <img src="img/house-4.jpeg" alt="House 4" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Large Rustical Villa</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>Portugal</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                480 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-key"></use>
              </svg>
              <p>$1,950,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>
          <div className="home">
            <img src="img/house-5.jpeg" alt="House 5" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Majestic Palace House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>Germany</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>18 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                4230 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-key"></use>
              </svg>
              <p>$9,500,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>
          <div className="home">
            <img src="img/house-6.jpeg" alt="House 6" className="home__img" />
            <svg className="home__like">
              <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Modern Family Apartment</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>Italy</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>3 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                180 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="img/sprite.svg#icon-key"></use>
              </svg>
              <p>$600,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>
        </section>

        <section className="gallery">Gallery</section>

        <footer className="footer">Footer</footer>
      </body>
    </div>
  );
};

export default Home;
