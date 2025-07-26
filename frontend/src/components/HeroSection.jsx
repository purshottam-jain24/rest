import React from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";

// --- Data for the component ---
// Content is focused on a clear, powerful message.
const heroData = {
  headline: "Experience Culinary Excellence",
  subheading:
    "Where every dish tells a story and every bite is a journey. Fresh ingredients, passionate chefs, and an unforgettable atmosphere.",
  ctaButtonText: "Book A Table",
  // IMPORTANT: Use a high-quality, relevant background image for the best effect.
  // You can find free ones on sites like Unsplash or Pexels.
  backgroundImage: "/hero-background.jpg",
};

// --- Component Styles (CSS-in-JS via a style tag) ---
const HeroSectionStyles = () => (
  <style jsx="true">{`
    /* Animation for a polished entrance */
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

    .hero-section {
      min-height: 100vh; /* Takes up the full viewport height */
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      position: relative;
      background-image: url(${heroData.backgroundImage});
      background-size: cover;
      background-position: center;
      text-align: center;
      color: #fff;
      font-family: "Oswald", sans-serif;
    }

    /* Dark overlay for text readability - a crucial UI/UX technique */
    .hero-section::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.3)
      );
      z-index: 1;
    }

    .hero-section__container {
      position: relative; /* Places content above the overlay */
      z-index: 2;
      max-width: 900px;
    }

    .hero-section__headline {
      font-size: 5rem;
      font-weight: 500;
      line-height: 1.1;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      /* Staggered animation */
      animation: fadeInUp 0.8s ease-out forwards;
    }

    .hero-section__subheading {
      font-size: 1.25rem;
      font-weight: 300;
      font-family: sans-serif; /* Use a more readable font for paragraphs */
      max-width: 700px;
      margin: 0 auto 2rem auto;
      opacity: 0; /* Start hidden for animation */
      animation: fadeInUp 0.8s ease-out 0.3s forwards;
    }

    .hero-section__cta-button {
      padding: 14px 32px;
      border-radius: 30px;
      border: 2px solid #fff;
      background: transparent;
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
      text-decoration: none;
      display: inline-block;
      opacity: 0; /* Start hidden for animation */
      animation: fadeInUp 0.8s ease-out 0.6s forwards;
    }

    .hero-section__cta-button:hover {
      background-color: #fff;
      color: #111;
    }

    /* --- Responsive Breakpoints --- */
    @media (max-width: 768px) {
      .hero-section__headline {
        font-size: 3.5rem;
      }
      .hero-section__subheading {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 1rem;
      }
      .hero-section__headline {
        font-size: 2.5rem;
      }
    }
  `}</style>
);

// --- The React Component ---
// Note: The <Navbar /> component is no longer here.
// It should be rendered in your main App.jsx or Home.jsx file.
const HeroSection = () => {
  return (
    <>
      <HeroSectionStyles />
      <Navbar />
      <section className="hero-section" id="heroSection">
        <div className="hero-section__container">
          <h1 className="hero-section__headline">{heroData.headline}</h1>
          <p className="hero-section__subheading">{heroData.subheading}</p>
          <Link
            to="reservation" // This should match the ID of your Reservation section
            spy={true}
            smooth={true}
            duration={500}
            className="hero-section__cta-button"
          >
            {heroData.ctaButtonText}
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
