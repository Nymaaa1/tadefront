import React, { useState } from "react";
import "./Contact.scss";
import { AppWrap, MotionWrap } from "../main/wrapper";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { GoRead } from "react-icons/go";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="head">
        <div className="map-section">
          <div className="gmap-frame">
            <iframe
              id="gmap_canvas"
              title="Map"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=520&amp;hl=en&amp;q=WVG9+7PW,%20Ulaanbaatar%2016090+(Tade%20Contruction)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <div className="location-text">
          <div className="padd">
            <div className="phone">
              <div className="icon">
                <CiLocationOn size={22} />
              </div>
              <div className="text">
                <h3>Оффисын хаяг</h3>
              </div>
            </div>
            <h5>
              3 Тоот, Хөх Сувд Хороолол 502-Р Байр, 10-Р Хороо, Баян-Гол Дүүрэг,
              Улаанбаатар Хот, Монгол Улс
            </h5>
          </div>
          <div className="padd">
            <div className="phone">
              <div className="icon">
                <AiOutlinePhone size={20} />
              </div>
              <div className="text">
                <h3>Утас</h3>
              </div>
            </div>
            <h5>7272-7300</h5>
          </div>
          <div className="padd">
            <div className="phone">
              <div className="icon">
                <GoRead size={20} />
              </div>
              <div className="text">
                <h3>Емэйл</h3>
              </div>
            </div>
            <h5>general@tade.mn</h5>
          </div>
        </div>
      </div>
      <div className="solid-divider"></div>
      <h2 className="head-text">Санал хүсэлт илгээх</h2>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Нэр"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Емэйл"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Зурвас"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Илгээх" : "Илгээгдэж байна..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

// export default Contact;

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
