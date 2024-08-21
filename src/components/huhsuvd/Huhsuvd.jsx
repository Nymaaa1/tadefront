import React from "react";
import Heading from "../common/Heading";
import "./huhsuvd.scss";
import { images } from "../main/constants";
import PhotoAlbum from "react-photo-album";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const Huhsuvd = () => {
  const imagess = [
    {
      original: images.huhsuvd6,
      thumbnail: images.huhsuvd6,
    },
    // {
    //   original: images.huhsuvd1,
    //   thumbnail: images.huhsuvd1,
    // },
    {
      original: images.huhsuvd2,
      thumbnail: images.huhsuvd2,
    },
    {
      original: images.huhsuvd3,
      thumbnail: images.huhsuvd3,
    },
    // {
    //   original: images.huhsuvd4,
    //   thumbnail: images.huhsuvd4,
    // },
    {
      original: images.huhsuvd5,
      thumbnail: images.huhsuvd5,
    },

    {
      original: images.huhsuvd7,
      thumbnail: images.huhsuvd7,
    },
    {
      original: images.huhsuvd9,
      thumbnail: images.huhsuvd9,
    },
    {
      original: images.huhsuvd10,
      thumbnail: images.huhsuvd10,
    },
    {
      original: images.huhsuvd11,
      thumbnail: images.huhsuvd11,
    },
  ];

  const photos2 = [
    { src: images.gallery1, width: 900, height: 800 },
    { src: images.huhsuvd12, width: 900, height: 200 },
    { src: images.gallery2, width: 900, height: 800 },
    { src: images.huhsuvd12, width: 900, height: 200 },
    { src: images.gallery3, width: 900, height: 800 },
    { src: images.gallery4, width: 900, height: 800 },
    { src: images.gallery5, width: 900, height: 800 },
    { src: images.gallery6, width: 900, height: 800 },
    { src: images.gallery7, width: 900, height: 800 },
    { src: images.gallery8, width: 900, height: 800 },
  ];

  return (
    <div className="huhsuvd">
      <section className="huhsuvd_hero">
        <div className="content">
          <h1>ХӨХ СУВД ХОТХОН</h1>
          <div className="solid-divider"></div>
        </div>
      </section>
      <section className="about_huhsuvd">
        <div className="flex mtop">
          <div className="left row">
            <Heading title="ХӨХ СУВД ХОТХОН" subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
            <p>
              Манай компани барилгын бүтээн байгуулалтаас гадна гадаад
              худалдааны үйл ажиллагаа явуулж барилгын салбар дахь нэмүү өртгийн
              зардлыг бууруулах, барилгын материалын чанарыг сайжруулах, түүний
              гарцыг нэмэгдүүлэх алсын хараа бүхий компани юм​
            </p>
            <p>
              Үүсгэн байгуулагдсан цагаас хойш ажлын туршлагатай, мэргэжлийн
              боловсон хүчин, байнгын болон гэрээт ажилчид, удирдах болон
              инженерийн баг хамт олонтойгоор шинэлэг иноваци, шилдэг бүтээн
              байгууллалтыг хийх зорилгын дор нэгдэн ажиллаж байна. Бид 2017
              оноос хойш тасралтгүй олон төрлийн төсөл, бүтээн байгуулалтанд
              туслан болон үндсэн гүйцэтгэгчээр оролцож, богино хугацаанд
              чадварлаг хамт олныг бүрдүүлэн өсөн дэвжиж буй хамт олон юм.​
            </p>
          </div>
          <div className="right row">
            <img src={images.mainLogo} alt="" />
          </div>
        </div>
        <div className="padding20"></div>
        <ImageGallery
          showIndex={false}
          infinite={true}
          items={imagess}
          showPlayButton={false}
          slideInterval={1000}
          slideOnThumbnailOver={true}
        />
        <div className="flex mtop">
          <div className="left row">
            <Heading title="ТАНИЛЦУУЛГА" subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
            <p>
              Манай баг хамт олон нь Иргэний ба үйлдвэрийн барилгын мэргэшсэн
              инженер гурав, Инженер техникийн ажилчид зургаа, ерөнхий менежер,
              нярав, засал, арматур, мужаан, туслах 20-н ажилтантайгаар нийт 31
              хүний бүрэлдэхүүнтэйгээр үйл ажиллагаа явуулж байна. ​
            </p>
          </div>
          <div className="right row">
            <img src={images.mainLogo} width="50" height="50" alt="" />
          </div>
        </div>
        <div className="padding30"></div>
        <PhotoAlbum layout="masonry" photos={photos2} />
      </section>
    </div>
  );
};

export default Huhsuvd;
