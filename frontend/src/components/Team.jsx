// Importing icons for the new social links feature
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// --- Data for the component ---
// The data now includes social links and a shortened title for the default view.
const teamData = {
  heading: "OUR TEAM",
  subheading: "The Masters Behind the Magic!",
  members: [
    {
      id: 1,
      image: "/team_member_1.png",
      name: "JOHNATHAN TYLER",
      title: "Quality Control Chef",
      description:
        "The Quality Keeper: Precision on the plate! Johnathan ensures every dish meets our gold standard of freshness and finesse.",
      socialLinks: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
      id: 2,
      image: "/team_member_2.png",
      name: "WADE WARREN",
      title: "Fusion Specialist",
      description:
        "The Modern Maestro: Blending innovation with tradition, Wade crafts fusion dishes that surprise and satisfy every time.",
      socialLinks: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
      id: 3,
      image: "/team_member_3.png",
      name: "JHON DOE",
      title: "Grill Master",
      description:
        "The Flame Artist: Known for his lightning-fast skills and fiery passion, Jhon brings bold flavors to life with every sizzle.",
      socialLinks: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
      id: 4,
      image: "/team_member_4.png",
      name: "ALEX COAL",
      title: "Flavor Expert",
      description:
        "The Taste Wizard: With a nose for spices and a heart for home-style cooking, Alex creates taste that lingers long after the last bite.",
      socialLinks: { twitter: "#", linkedin: "#", instagram: "#" },
    },
  ],
};

// --- Component Styles (CSS-in-JS via a style tag) ---
const TeamStyles = () => (
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

    .team-section {
      padding: 6rem 2rem;
      background-color: #f9f9f9;
      text-align: center;
    }

    .team-section__header {
      margin-bottom: 4rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      animation: fadeInUp 0.5s ease-out;
    }

    .team-section__heading {
      font-size: 3.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      font-family: "Oswald", sans-serif;
      color: #111;
    }

    .team-section__subheading {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.6;
    }

    .team-section__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* The main card element */
    .team-card {
      background-color: #fff;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeInUp 0.5s ease-out;
      position: relative; /* Crucial for the overlay */
      overflow: hidden; /* To contain the overlay */
    }

    .team-card__image-wrapper {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 0 auto 1.5rem auto;
      overflow: hidden;
      border: 4px solid #f0f0f0;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .team-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .team-card__name {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111;
      margin-bottom: 0.25rem;
    }

    .team-card__title {
      font-size: 1rem;
      color: #666;
      margin-bottom: 1rem;
    }

    /* The on-hover overlay */
    .team-card__overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(17, 17, 17, 0.85); /* Black with 85% opacity */
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      opacity: 0; /* Hidden by default */
      transition: opacity 0.3s ease-in-out;
    }

    .team-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .team-card:hover .team-card__overlay {
      opacity: 1; /* Revealed on hover */
    }

    .team-card__description {
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .team-card__social-links {
      display: flex;
      gap: 1rem;
    }

    .social-icon {
      font-size: 1.2rem;
      color: #fff;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    .social-icon:hover {
      color: #d4c5a3; /* Muted gold accent on hover */
      transform: scale(1.1);
    }
  `}</style>
);

// --- The React Component ---
const Team = () => {
  return (
    <>
      <TeamStyles />
      <section className="team-section" id="team">
        <div className="team-section__header">
          <h1 className="team-section__heading">{teamData.heading}</h1>
          <p className="team-section__subheading">{teamData.subheading}</p>
        </div>

        <div className="team-section__grid">
          {teamData.members.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-card__image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card__image"
                />
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__title">{member.title}</p>

              {/* This overlay is hidden by default and appears on hover */}
              <div className="team-card__overlay">
                <p className="team-card__description">{member.description}</p>
                <div className="team-card__social-links">
                  <a
                    href={member.socialLinks.twitter}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={member.socialLinks.linkedin}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.socialLinks.instagram}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
