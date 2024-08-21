import React from "react";
import { footer } from "../../../data/Data";
import "./Footer.scss";
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
                Манай баг хамт олон нь Иргэний ба үйлдвэрийн барилгын мэргэшсэн
                инженер гурав, Инженер техникийн ажилчид зургаа, ерөнхий
                менежер, нярав, засал, арматур, мужаан, туслах 20-н
                ажилтантайгаар нийт 31 хүний бүрэлдэхүүнтэйгээр үйл ажиллагаа
                явуулж байна. ​
              </p>
            </div>
          </div>
          {footer.map((val) => (
            <div className="box">
              <ul>
                <li>{val.title}</li>
                <div className="li_class">
                  {val.text.map((list) => (
                    <li>
                      {list.url === null ? (
                        list.list
                      ) : (
                        <Link to={list.url}>{list.list}</Link>
                      )}
                    </li>
                  ))}
                </div>
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
