import React, { useState, useEffect } from "react";
// Importing icons for each stat to make them more visual
import { FaBuilding, FaUsers, FaCalendarAlt, FaUtensils } from "react-icons/fa";

// --- Data for the component ---
// Renamed for clarity and added icons.
const whoAreWeData = {
  heading: "Our Legacy",
  subheading:
    "Building a tradition of culinary excellence, one plate at a time.",
  stats: [
    { id: 1, icon: FaBuilding, number: 14, title: "Restaurants" },
    { id: 2, icon: FaUsers, number: 20, title: "Chefs In Kitchen" },
    { id: 3, icon: FaCalendarAlt, number: 8, title: "Years Of Experience" },
    { id: 4, icon: FaUtensils, number: 200, title: "Food Dishes" },
  ],
};

// --- Component Styles (CSS-in-JS via a style tag) ---
const WhoAreWeStyles = () => (
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

    .who-are-we-section {
      padding: 6rem 2rem;
      background-color: #f7f7f7; /* A subtle off-white background */
      text-align: center;
    }

    .who-are-we-section__header {
      margin-bottom: 4rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      animation: fadeInUp 0.5s ease-out;
    }

    .who-are-we-section__heading {
      font-size: 3.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      font-family: "Oswald", sans-serif;
      color: #111;
    }

    .who-are-we-section__subheading {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.6;
    }

    .who-are-we-section__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* The stat card styling */
    .stat-card {
      background-color: #fff;
      padding: 2.5rem 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeInUp 0.5s ease-out;
    }

    .stat-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .stat-card__icon {
      font-size: 2.5rem;
      color: #d4c5a3; /* Muted gold/tan accent */
      margin-bottom: 1rem;
    }

    .stat-card__number {
      font-size: 3rem;
      font-weight: 600;
      color: #111;
      font-family: "Oswald", sans-serif;
    }

    .stat-card__title {
      font-size: 1rem;
      color: #555;
      margin-top: 0.25rem;
    }
  `}</style>
);

// A custom component to handle the count-up animation
const CountUpNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end, 10);
    if (start === endValue) return;

    const incrementTime = duration / endValue;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="stat-card__number">{count}</span>;
};

// --- The Main React Component ---
const WhoAreWe = () => {
  return (
    <>
      <WhoAreWeStyles />
      <section className="who-are-we-section" id="who_are_we">
        <div className="who-are-we-section__header">
          <h1 className="who-are-we-section__heading">
            {whoAreWeData.heading}
          </h1>
          <p className="who-are-we-section__subheading">
            {whoAreWeData.subheading}
          </p>
        </div>

        <div className="who-are-we-section__grid">
          {whoAreWeData.stats.map((element) => (
            <div className="stat-card" key={element.id}>
              <div className="stat-card__icon">
                <element.icon />
              </div>
              <CountUpNumber end={element.number} />
              <p className="stat-card__title">{element.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
