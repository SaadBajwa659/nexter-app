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
            <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-trophy"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
            <p className="feature__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
              rerum sed a eligendi aut quia.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">All homes in in top locations</h4>
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
            <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
            <p className="feature__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum
              mollitia quae.
            </p>
          </div>
        </section>

        <div className="story__pictures">Story pictures</div>

        <div className="story__content">Story content</div>

        <section className="homes">Homes</section>

        <section className="gallery">Gallery</section>

        <footer className="footer">Footer</footer>
      </body>
    </div>
  );
};

export default Home;
