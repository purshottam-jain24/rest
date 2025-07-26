import React from "react";

// --- Data for the component ---
// The data is now self-contained, with a new header and subheading.
const qualitiesData = {
  heading: "Why Choose Us?",
  subheading:
    "We are committed to providing you with an exceptional dining experience, from the first bite to the last.",
  qualities: [
    {
      id: 1,
      image: "/quality_food.svg",
      title: "QUALITY FOOD",
      description: "Crafted with care, served with quality.",
    },
    {
      id: 2,
      image: "/super_taste.svg",
      title: "SUPER TASTE",
      description: "One bite, endless delight!.",
    },
    {
      id: 3,
      image: "/fast_delivery.svg",
      title: "FAST DELIVERY",
      description: "Piping hot food, at your door in no time!",
    },
  ],
};

// --- Component Styles (CSS-in-JS via a style tag) ---
const QualitiesStyles = () => (
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

    .qualities-section {
      padding: 0rem 2rem;
      background-color: #fff;
      text-align: center;
    }

    .qualities-section__header {
      margin-bottom: 4rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      animation: fadeInUp 0.5s ease-out;
    }

    .qualities-section__heading {
      font-size: 3.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      font-family: "Oswald", sans-serif;
      color: #111;
    }

    .qualities-section__subheading {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.6;
    }

    /* The main grid for the cards */
    .qualities-section__grid {
      display: grid;
      /* This creates a perfectly responsive grid */
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* The new, improved card styling */
    .quality-card {
      background-color: #fff;
      padding: 2.5rem 2rem;
      border-radius: 12px;
      border: 1px solid #eee;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeInUp 0.5s ease-out;
    }

    /* The hover effect */
    .quality-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    .quality-card__icon-wrapper {
      margin: 0 auto 1.5rem auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      background-color: #f9fbf2;
      border-radius: 50%;
    }

    .quality-card__icon {
      width: 40px;
      height: 40px;
    }

    .quality-card__title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111;
      margin-bottom: 0.75rem;
      font-family: "Oswald", sans-serif;
      letter-spacing: 1px;
    }

    .quality-card__description {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
    }
  `}</style>
);

// --- The React Component ---
const Qualities = () => {
  return (
    <>
      <QualitiesStyles />
      <section className="qualities-section" id="qualities">
        <div className="qualities-section__header">
          <h1 className="qualities-section__heading">
            {qualitiesData.heading}
          </h1>
          <p className="qualities-section__subheading">
            {qualitiesData.subheading}
          </p>
        </div>

        <div className="qualities-section__grid">
          {qualitiesData.qualities.map((element) => (
            <div className="quality-card" key={element.id}>
              <div className="quality-card__icon-wrapper">
                <img
                  src={element.image}
                  alt={element.title}
                  className="quality-card__icon"
                />
              </div>
              <h3 className="quality-card__title">{element.title}</h3>
              <p className="quality-card__description">{element.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Qualities;
