import React from "react";
import hero from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful Cms</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            adipisci sequi harum quam veritatis corrupti ab, unde distinctio
            dolor commodi, rerum magnam, nesciunt eveniet similique debitis.
            Reiciendis modi nam nostrum?
          </p>
        </div>
        <div className="image-container">
          <img src={hero} style={{ height: "10rem" }}></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
