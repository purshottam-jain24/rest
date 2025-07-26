import React, { useState, useEffect } from "react";

// --- Data for the component ---
// All data is self-contained. I've added more dishes for a complete example.
const menuData = {
  heading: "OUR MENU",
  subheading:
    "Discover a world of flavor, crafted with passion and served with a smile.",
  dishes: [
    {
      id: 1,
      image: "/dinner1.jpeg",
      title: "Roasted Lamb Rump",
      category: "Dinner",
    },
    {
      id: 2,
      image: "/dinner2.png",
      title: "Citrus Cured Salmon",
      category: "Dinner",
    },
    {
      id: 3,
      image: "/breakfast1.png",
      title: "Pan Seared Sea Bass",
      category: "Breakfast",
    },
    {
      id: 4,
      image: "/dinner3.png",
      title: "Strawberry & Cream",
      category: "Dessert",
    },
    {
      id: 5,
      image: "/lunch1.png",
      title: "Classic Beef Burger",
      category: "Lunch",
    },
    {
      id: 6,
      image: "/dinner4.png",
      title: "Hearty Mussels Soup",
      category: "Dinner",
    },
    {
      id: 7,
      image: "/dinner5.png",
      title: "Classic Italian Spaghetti",
      category: "Dinner",
    },
    {
      id: 8,
      image: "/dinner6.png",
      title: "Grilled Fish & Veggies",
      category: "Dinner",
    },
  ],
  // The categories for our filter buttons
  filters: ["All", "Breakfast", "Lunch", "Dinner", "Dessert"],
};

// --- Component Styles (CSS-in-JS via a style tag) ---
const MenuStyles = () => (
  <style jsx="true">{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .menu-section {
      padding: 6rem 2rem;
      background-color: #fff;
      text-align: center;
    }

    .menu-section__header {
      margin-bottom: 3rem;
    }

    .menu-section__heading {
      font-size: 3.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      font-family: "Oswald", sans-serif;
      color: #111;
    }

    .menu-section__subheading {
      font-size: 1.1rem;
      color: #555;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Filter Buttons Styling */
    .menu-section__filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 10px 24px;
      border: 1px solid #ddd;
      background-color: #fff;
      color: #333;
      border-radius: 20px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .filter-btn:hover {
      background-color: #f0f0f0;
      border-color: #ccc;
    }

    .filter-btn.active {
      background-color: #111;
      color: #fff;
      border-color: #111;
    }

    /* Dishes Grid Styling */
    .menu-section__grid {
      display: grid;
      /* This creates a perfectly responsive grid */
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Dish Card Styling */
    .dish-card {
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      text-align: left;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeIn 0.5s ease-out;
      position: relative;
    }

    .dish-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }

    .dish-card__image-container {
      width: 100%;
      height: 250px;
      overflow: hidden;
    }

    .dish-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .dish-card:hover .dish-card__image {
      transform: scale(1.05);
    }

    .dish-card__content {
      padding: 1.5rem;
    }

    .dish-card__title {
      font-size: 1.25rem;
      font-weight: 500;
      color: #111;
      margin-bottom: 0.5rem;
    }

    .dish-card__category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      padding: 6px 12px;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      color: #111;
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: 15px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `}</style>
);

// --- The React Component ---
const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredDishes, setFilteredDishes] = useState([]);

  // This effect runs whenever the activeFilter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredDishes(menuData.dishes);
    } else {
      const newFilteredDishes = menuData.dishes.filter(
        (dish) => dish.category === activeFilter
      );
      setFilteredDishes(newFilteredDishes);
    }
  }, [activeFilter]);

  return (
    <>
      <MenuStyles />
      <section className="menu-section" id="menu">
        <div className="menu-section__header">
          <h1 className="menu-section__heading">{menuData.heading}</h1>
          <p className="menu-section__subheading">{menuData.subheading}</p>
        </div>

        <div className="menu-section__filters">
          {menuData.filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="menu-section__grid">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <div className="dish-card__image-container">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="dish-card__image"
                />
              </div>
              <div className="dish-card__content">
                <h3 className="dish-card__title">{dish.title}</h3>
              </div>
              <div className="dish-card__category">{dish.category}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
