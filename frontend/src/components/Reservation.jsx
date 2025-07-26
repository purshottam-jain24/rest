import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { HiOutlineArrowRight } from "react-icons/hi";
import { CgSpinner } from "react-icons/cg";
import { FaRegCalendarCheck } from "react-icons/fa";

// --- Data for the component ---
const reservationData = {
  heading: "Make a Reservation",
  subheading: "Reserve your table for an exceptional dining experience.",
  imageSrc: "/reservation.png",
};

// --- Component Styles (CSS-in-JS via a style tag) ---
const ReservationStyles = () => (
  <style jsx="true">{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .reservation-section {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 4rem 2rem;
      background-color: #fdfaf2; /* A warm, parchment-like background */
    }

    .reservation__container {
      display: flex;
      gap: 4rem;
      align-items: center;
      max-width: 1200px;
      width: 100%;
    }

    .reservation__banner {
      flex: 1;
    }

    .reservation__banner_img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .reservation__form-box {
      width: 100%;
      background-color: #fff;
      padding: 3rem;
      border-radius: 4px;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.07);
      border-top: 5px solid #d4c5a3; /* Muted gold/tan accent */
      text-align: center;
    }

    .reservation__form-box h1 {
      font-weight: 400;
      font-size: 2.5rem;
      color: #222;
      margin-bottom: 0.75rem;
      font-family: "Oswald", sans-serif;
      letter-spacing: 1px;
    }

    .reservation__form-box p {
      color: #666;
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
    }

    .reservation__form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      text-align: left;
    }

    .reservation__form-group-row {
      display: flex;
      gap: 1.5rem;
    }

    .reservation__form-group {
      width: 100%;
    }

    .reservation__label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: #555;
    }

    .reservation__input {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #f9f9f9;
      color: #333;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .reservation__input:focus {
      outline: none;
      border-color: #b3a17e;
      box-shadow: 0 0 0 3px rgba(212, 197, 163, 0.25);
    }

    .reservation__button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 14px 28px;
      border-radius: 4px;
      border: none;
      background: #222;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 1.5rem;
    }
    .reservation__button:hover {
      background-color: #333;
    }
    .reservation__button:disabled {
      background-color: #999;
      cursor: not-allowed;
    }

    .loading-spinner {
      animation: spin 1s linear infinite;
    }

    .reservation__success-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 520px;
      animation: fadeIn 0.5s ease;
    }
    .success-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      color: #5a8a48;
    }
    .reservation__success-message h2 {
      font-size: 2rem;
      color: #222;
    }

    @media (max-width: 992px) {
      .reservation__container {
        flex-direction: column;
        gap: 3rem;
      }
    }

    @media (max-width: 576px) {
      .reservation__form-group-row {
        flex-direction: column;
        gap: 2rem;
      }
      .reservation__form-box {
        padding: 2rem;
      }
    }
  `}</style>
);

// --- The React Component ---
const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReservation = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsSubmitted(true);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ReservationStyles />
      <section className="reservation-section" id="reservation">
        <div className="reservation__container">
          <div className="reservation__banner">
            <img
              src={reservationData.imageSrc}
              alt="Dining table at ZEST restaurant"
              className="reservation__banner_img"
            />
          </div>
          <div className="reservation__banner">
            <div className="reservation__form-box">
              {isSubmitted ? (
                <div className="reservation__success-message">
                  <FaRegCalendarCheck className="success-icon" />
                  <h2>Thank You!</h2>
                  <p>
                    Your reservation is confirmed. We look forward to seeing
                    you!
                  </p>
                </div>
              ) : (
                <>
                  <h1>{reservationData.heading}</h1>
                  <p>{reservationData.subheading}</p>
                  <form
                    className="reservation__form"
                    onSubmit={handleReservation}
                  >
                    <div className="reservation__form-group-row">
                      <div className="reservation__form-group">
                        <label
                          htmlFor="firstName"
                          className="reservation__label"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          className="reservation__input"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="reservation__form-group">
                        <label
                          htmlFor="lastName"
                          className="reservation__label"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          className="reservation__input"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="reservation__form-group-row">
                      <div className="reservation__form-group">
                        <label htmlFor="date" className="reservation__label">
                          Date
                        </label>
                        <input
                          id="date"
                          type="date"
                          className="reservation__input"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                        />
                      </div>
                      <div className="reservation__form-group">
                        <label htmlFor="time" className="reservation__label">
                          Time
                        </label>
                        <input
                          id="time"
                          type="time"
                          className="reservation__input"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="reservation__form-group">
                      <label htmlFor="email" className="reservation__label">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="reservation__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="reservation__form-group">
                      <label htmlFor="phone" className="reservation__label">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="reservation__input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="reservation__button"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <CgSpinner className="loading-spinner" />
                          Booking...
                        </>
                      ) : (
                        <>
                          RESERVE NOW
                          <HiOutlineArrowRight />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
