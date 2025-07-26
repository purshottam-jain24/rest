import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const navbarData = {
  logoText: "ZEST",
  navLinks: [
    { id: 1, title: "HOME", link: "home" },
    { id: 2, title: "ABOUT US", link: "about" },
    { id: 3, title: "SERVICES", link: "qualities" },
    { id: 4, title: "TEAM", link: "team" },
    { id: 5, title: "RESERVATION", link: "reservation" },
  ],
  menuButtonText: "OUR MENU",
};

const NavbarStyles = ({ hasScrolled }) => (
  <style jsx="true">{`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      max-width: 1500px;
      width: 100%;
      height: 80px;
      margin: 0 auto;
    }

    .navbar-container {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      background-color: #fff;
      transition: box-shadow 0.3s ease;
      /* Add shadow when user has scrolled */
      box-shadow: ${hasScrolled ? "0 2px 15px rgba(0, 0, 0, 0.08)" : "none"};
    }

    .navbar__logo {
      font-size: 2.2rem;
      font-weight: 500;
      color: #111;
      font-family: "Inter", sans-serif;
    }

    /* --- Desktop Navigation --- */
    .navbar__links-desktop {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .navbar__links-group {
      display: flex;
      gap: 1.75rem;
    }

    .navbar__link {
      text-decoration: none;
      color: #555;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 1.2px;
      padding-bottom: 5px;
      position: relative;
      transition: color 0.3s ease;
      cursor: pointer;
    }

    /* Animated underline for hover effect */
    .navbar__link::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #111;
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    .navbar__link:hover {
      color: #111;
    }

    .navbar__link:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    .navbar__menu-btn {
      padding: 10px 24px;
      color: #111;
      background: transparent;
      border: 1px solid #111;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .navbar__menu-btn:hover {
      color: #fff;
      background: #111;
    }

    /* --- Mobile Navigation --- */
    .navbar__hamburger {
      display: none; /* Hidden on desktop */
      font-size: 2rem;
      cursor: pointer;
      color: #111;
      z-index: 101; /* Ensure it's above the overlay */
    }

    .navbar__links-mobile {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      /* Animation */
      opacity: 0;
      transform: translateY(-20px);
      pointer-events: none; /* Not clickable when hidden */
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .navbar__links-mobile.show-menu {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all; /* Clickable when shown */
    }

    .navbar__links-mobile .navbar__links-group {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    .navbar__links-mobile .navbar__link {
      font-size: 1.5rem;
    }

    /* --- Responsive Breakpoint --- */
    @media (max-width: 992px) {
      .navbar__links-desktop {
        display: none; /* Hide desktop links */
      }
      .navbar__hamburger {
        display: block; /* Show hamburger icon */
      }
    }
  `}</style>
);

// --- The React Component ---
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Effect to detect scroll for the sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <NavbarStyles hasScrolled={hasScrolled} />
      <header className="navbar-container">
        <nav className="navbar">
          <div className="navbar__logo">{navbarData.logoText}</div>

          {/* Desktop Menu */}
          <div className="navbar__links-desktop">
            <div className="navbar__links-group">
              {navbarData.navLinks.map((element) => (
                <Link
                  to={element.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={element.id}
                  className="navbar__link"
                >
                  {element.title}
                </Link>
              ))}
            </div>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar__menu-btn"
            >
              {navbarData.menuButtonText}
            </Link>
          </div>

          {/* Hamburger Toggle Icon */}
          <div
            className="navbar__hamburger"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={
              showMenu
                ? "navbar__links-mobile show-menu"
                : "navbar__links-mobile"
            }
          >
            <div className="navbar__links-group">
              {navbarData.navLinks.map((element) => (
                <Link
                  to={element.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={element.id}
                  className="navbar__link"
                  onClick={closeMenu} // Close menu on link click
                >
                  {element.title}
                </Link>
              ))}
            </div>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar__menu-btn"
              onClick={closeMenu} // Close menu on button click
            >
              {navbarData.menuButtonText}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
