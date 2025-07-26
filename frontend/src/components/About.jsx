import React from "react";
// Importing icons for our new "Core Values" section
import { FaLeaf, FaHeart, FaStar } from "react-icons/fa";

// --- Data for the component ---
// The data is now richer to support the new UI elements.
const aboutData = {
  heading: "OUR STORY",
  subheading: "From a Passionate Kitchen to Your Plate.",
  paragraph:
    "At ZEST, food isn't just a meal — it's an experience. Born from a passion for flavor and a love for bringing people together, we serve dishes that blend tradition with creativity. Every plate tells a story of fresh ingredients, skilled hands, and a whole lot of heart.",
  founderQuote:
    "“The best meals are made with the heart and shared with the soul.”",
  imageSrc: "/about.png", // Make sure this path is correct in your public folder
  ourValues: [
    {
      icon: FaLeaf,
      title: "Quality Ingredients",
      description:
        "We source the freshest local produce to ensure every dish is vibrant and flavorful.",
    },
    {
      icon: FaHeart,
      title: "Culinary Passion",
      description:
        "Our chefs pour their love and expertise into crafting memorable dining experiences.",
    },
    {
      icon: FaStar,
      title: "Service Excellence",
      description:
        "We are dedicated to providing warm, attentive service that makes you feel at home.",
    },
  ],
};

// --- Component Styles (CSS-in-JS via a style tag) ---
const AboutStyles = () => (
  <style jsx="true">{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .about-section {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6rem 2rem;
      background-color: #f9fbf2;
      overflow: hidden;
    }

    .about-section__container {
      display: flex;
      gap: 4rem;
      align-items: center;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }

    .about-section__content {
      flex: 1;
      position: relative;
    }

    .about-section__content::before {
      content: "ZEST";
      position: absolute;
      top: -50px;
      left: -30px;
      font-size: 10rem;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.04);
      z-index: 1;
      white-space: nowrap;
    }

    .about-section__heading,
    .about-section__subheading,
    .about-section__paragraph,
    .about-section__quote,
    .our-values__list {
      position: relative;
      z-index: 2;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out forwards;
    }

    .about-section__heading {
      font-size: 3.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      font-family: "Oswald", sans-serif;
      color: #111;
    }

    .about-section__subheading {
      font-size: 1.1rem;
      font-weight: 400;
      color: #555;
      margin-bottom: 1.5rem;
      animation-delay: 0.2s;
    }

    .about-section__paragraph {
      font-size: 1rem;
      line-height: 1.7;
      color: #333;
      margin-bottom: 1.5rem;
      animation-delay: 0.4s;
    }

    .about-section__quote {
      font-size: 1.1rem;
      font-style: italic;
      color: #111;
      border-left: 3px solid #ccc;
      padding-left: 1rem;
      margin: 2rem 0;
      animation-delay: 0.6s;
    }

    .our-values__list {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      animation-delay: 0.8s;
    }

    .our-values__item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .our-values__icon-wrapper {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #eaf5e5;
      color: #5a8a48;
      font-size: 1.2rem;
    }

    .our-values__title {
      font-size: 1.1rem;
      font-weight: 500;
      color: #111;
      margin-bottom: 0.25rem;
    }

    .our-values__description {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
    }

    .about-section__image-wrapper {
      flex: 1;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.2s forwards;
    }

    .about-section__image {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }

    @media (max-width: 992px) {
      .about-section__container {
        flex-direction: column;
      }
      .about-section__content::before {
        font-size: 8rem;
        top: -30px;
        left: -10px;
      }
    }
  `}</style>
);

// --- The React Component ---
const About = () => {
  return (
    <>
      <AboutStyles />
      <section className="about-section" id="about">
        <div className="about-section__container">
          <div className="about-section__content">
            <h1 className="about-section__heading">{aboutData.heading}</h1>
            <p className="about-section__subheading">{aboutData.subheading}</p>
            <p className="about-section__paragraph">{aboutData.paragraph}</p>

            <blockquote className="about-section__quote">
              {aboutData.founderQuote}
            </blockquote>

            <div className="our-values__list">
              {aboutData.ourValues.map((value, index) => (
                <div key={index} className="our-values__item">
                  <div className="our-values__icon-wrapper">
                    <value.icon />
                  </div>
                  <div className="our-values__text-wrapper">
                    <h3 className="our-values__title">{value.title}</h3>
                    <p className="our-values__description">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-section__image-wrapper">
            <img
              src={aboutData.imageSrc}
              alt="Interior of the ZEST restaurant"
              className="about-section__image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
