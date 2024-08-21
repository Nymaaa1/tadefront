import React from "react";
import Heading from "../common/Heading";
import "./Window.scss";
import { images } from "../main/constants";

const Window = () => {
  return (
    <div className="window">
      <section className="window_hero">
        <div className="content">
          <h1>TADE WINDOW</h1>
          <div className="solid-divider"></div>
        </div>
      </section>
      <div className="padding10"></div>
      <section className="about_window">
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="TADE WINDOW" subtitle="ЦОНХ ҮЙЛДВЭРИЙН КОМПАНИ" />
            <p>
              “Ти Эй Ди И констракшн” ХХК нь 2017 онд Улаанбаатар хотод
              байгуулагдсан ба Барилга хот байгуулалтын яамнаас олгосон тусгай
              зөвшөөрлийн хүрээнд барилгын засвар, гадаад худалдаа, интерьер
              дизайны чиглэлээр үйл ажиллагаа явуулдаг компани юм.
            </p>
            <p>
              Манай баг хамт олон нь Иргэний ба үйлдвэрийн барилгын мэргэшсэн
              инженер гурав, Инженер техникийн ажилчид зургаа, ерөнхий менежер,
              нярав, засал, арматур, мужаан, туслах 20-н ажилтантайгаар нийт 31
              хүний бүрэлдэхүүнтэйгээр үйл ажиллагаа явуулж байна.
            </p>
          </div>
          <div className="right row">
            <img src={images.tadeWindow} alt="" />
          </div>
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <Heading subtitle="TADE WINDOW" />
            <p>
              ТИ ЭЙ ДИ И КОНСТРАКШНИЙ охин компани болох TADE WINDOW нь дотоодод
              сайн чанарын цонх үйлдвэрлэж байна{" "}
            </p>
          </div>
          <div className="right row">
            <img src={images.window1} alt="" />
          </div>
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <Heading subtitle="TADE WINDOW" />
            <p>
              ТИ ЭЙ ДИ И КОНСТРАКШНИЙ охин компани болох TADE WINDOW нь дотоодод
              сайн чанарын цонх үйлдвэрлэж байна{" "}
            </p>
          </div>
          <div className="right row">
            <img src={images.window2} alt="" />
          </div>
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <Heading subtitle="TADE WINDOW" />
            <p>
              ТИ ЭЙ ДИ И КОНСТРАКШНИЙ охин компани болох TADE WINDOW нь дотоодод
              сайн чанарын цонх үйлдвэрлэж байна{" "}
            </p>
          </div>
          <div className="right row">
            <img src={images.window3} alt="" />
          </div>
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <Heading subtitle="TADE WINDOW" />
            <p>
              ТИ ЭЙ ДИ И КОНСТРАКШНИЙ охин компани болох TADE WINDOW нь дотоодод
              сайн чанарын цонх үйлдвэрлэж байна{" "}
            </p>
          </div>
          <div className="right row">
            <img src={images.window4} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Window;

// export default About
