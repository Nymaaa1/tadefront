import React from "react";
import { footer } from "../../../data/Data";
import "./footer.scss";
import { Link } from "react-router-dom";
import { images } from "../../../main/constants";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <div className="imageText">
                <img src={images.mainLogo} alt="logo" />
                TADE CONSTRUCTION
              </div>
              <div className="paddings"></div>
              Байгууллагын тухай
              <p>
                “Ти Эй Ди И констракшн” ХХК нь 2017 онд Улаанбаатар хотод
                байгуулагдсан ба МУ-н Барилга хот байгуулалтын яамнаас олгосон
                тусгай зөвшөөрлийн хүрээнд барилгын засвар, гадаад худалдаа,
                интерьер дизайны чиглэлээр үйл ажиллагаа явуулдаг компани юм. ​
              </p>
            </div>
          </div>
          {footer.map((val) => (
            <div className="box">
              <ul>
                <li>{val.title}</li>
                {val.text.map((list) => (
                  <li>
                    <Link to={list.url}>{list.list}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>
          © 2024 - "ТИ ЭЙ ДИ И КОНСТРАКШН" ХХК. Зохиогчийн эрх хуулиар
          хамгаалагдсан.
        </span>
      </div>
    </>
  );
};

export default Footer;
