import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import toast from "react-hot-toast";

// --- Data for the component ---
const footerData = {
  brandName: "ZEST",
  brandSlogan: "Crafting memorable moments, one dish at a time.",
  contactInfo: {
    address: "New Delhi, India",
    hours: "Open: 05:00 PM - 12:00 AM",
  },
  quickLinks: [
    { title: "Home", to: "heroSection" },
    { title: "About", to: "about" },
    { title: "Menu", to: "menu" },
    { title: "Reservation", to: "reservation" },
  ],
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  newsletter: {
    heading: "Stay Updated",
    placeholder: "Enter your email",
  },
  copyrightText: `© ${new Date().getFullYear()} ZEST. All Rights Reserved. Developed By Chahat.`,
};

// --- Component Styles (CSS-in-JS via a style tag) ---
const FooterStyles = () => (
  <style jsx="true">{`
    .footer-section {
      background-color: #18181b; /* A richer, darker charcoal */
      color: rgba(255, 255, 255, 0.7);
      padding: 6rem 2rem 0 2rem; /* No bottom padding here, it's on the sub-footer */
      width: 100%; /* Ensures the background is full-width */
    }

    .footer__container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto; /* This centers the content */
    }

    .footer__main {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      padding-bottom: 4rem;
    }

    .footer__column h4 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 1.5rem;
      font-family: "Oswald", sans-serif;
      letter-spacing: 0.5px;
    }

    /* Brand Column */
    .footer__brand-name {
      font-size: 2.2rem;
      font-weight: 500;
      color: #fff;
      font-family: "Oswald", sans-serif;
      margin-bottom: 0.5rem;
    }
    .footer__brand-slogan {
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    /* Quick Links Column */
    .footer__link-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .footer__link {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: color 0.3s ease, padding-left 0.3s ease;
      cursor: pointer;
    }
    .footer__link:hover {
      color: #fff;
      padding-left: 5px;
    }

    /* Newsletter Form */
    .newsletter-form {
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      overflow: hidden;
    }
    .newsletter-form input {
      flex-grow: 1;
      padding: 12px 15px;
      border: none;
      background: transparent;
      color: #fff;
      font-size: 1rem;
    }
    .newsletter-form input:focus {
      outline: none;
    }
    .newsletter-form button {
      padding: 12px 15px;
      background-color: #d4c5a3;
      color: #111;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-size: 1.2rem;
    }
    .newsletter-form button:hover {
      background-color: #b3a17e;
    }

    /* Bottom Bar */
    .footer__bottom-bar {
      margin-top: 4rem; /* Creates space from the main content */
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2rem 0;
      text-align: center;
      font-size: 0.9rem;
    }
  `}</style>
);

// --- The React Component ---
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend/service
    console.log("Newsletter submitted with email:", email);
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <>
      <FooterStyles />
      <footer className="footer-section">
        <div className="footer__container">
          <div className="footer__main">
            {/* Column 1: Brand & Contact Info */}
            <div className="footer__column">
              <h3 className="footer__brand-name">{footerData.brandName}</h3>
              <p className="footer__brand-slogan">{footerData.brandSlogan}</p>
              <p>{footerData.contactInfo.address}</p>
              <p>{footerData.contactInfo.hours}</p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer__column">
              <h4>Quick Links</h4>
              <ul className="footer__link-list">
                {footerData.quickLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="footer__link"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Newsletter */}
            <div className="footer__column">
              <h4>{footerData.newsletter.heading}</h4>
              <form
                className="newsletter-form"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder={footerData.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <HiOutlineArrowRight />
                </button>
              </form>
            </div>
          </div>

          <div className="footer__bottom-bar">
            <p>{footerData.copyrightText}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
