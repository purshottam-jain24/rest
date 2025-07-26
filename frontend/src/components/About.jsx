import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>From our kitchen to your heart.</p>
            </div>
            <p className="mid">
              At Dish Delights & Design, food isn't just a meal — it's an experience. Born from a passion for flavor and a love for bringing people together, we serve dishes that blend tradition with creativity. Every plate tells a story — of fresh ingredients, skilled hands, and a whole lot of heart. Whether you're here for a quick bite or a full feast, we're here to make every moment delicious.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
