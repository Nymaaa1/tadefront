import React, { useState } from "react";
import Heading from "../common/Heading";
import "./Apartment.scss";
import { images } from "../main/constants";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const Apartment = () => {
  const [imageindex, setImageindex] = useState([0]);
  const imagess = [
    {
      original: images.qr,
      thumbnail: images.qr,
    },
    {
      original: images.qr2,
      thumbnail: images.qr2,
    },
    {
      original: images.qr3,
      thumbnail: images.qr3,
    },
    {
      original: images.qr4,
      thumbnail: images.qr4,
    },
    {
      original: images.qr5,
      thumbnail: images.qr5,
    },
    {
      original: images.qr6,
      thumbnail: images.qr6,
    },
  ];
  const handleImageClick = (event, index) => {
    setImageindex(index);
  };
  return (
    <div className="apartment">
      <section className="apartment_hero">
        <div className="content">
          <h1>TADE APARTMENT</h1>
          <div className="solid-divider"></div>
        </div>
      </section>
      <div className="padding10"></div>
      <section className="about_apart">
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="TADE APARTMENT" subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
            <p>
              “Ти Эй Ди И констракшн” ХХК нь 2017 онд Улаанбаатар хотод
              байгуулагдсан ба Барилга хот байгуулалтын яамнаас олгосон тусгай
              зөвшөөрлийн хүрээнд барилгын засвар, гадаад худалдаа, интерьер
              дизайны чиглэлээр үйл ажиллагаа явуулдаг компани юм.
            </p>
          </div>
          <div className="right row">
            <img src={images.tadeApartment} alt="" />
          </div>
        </div>
        <div className="containers flex mtop">
          <div className="right row">
            <img src={images.apart2} alt="" />
          </div>
        </div>
        <div className="padding10"></div>
        <div className="container flex mtop">
          <div className="left row">
            <div className="heading">
              <h1>
                {imageindex === 0
                  ? "'A' 2 өрөө орон сууц 66.44м2"
                  : imageindex === 1
                  ? "'Б' 2 өрөө орон сууц 66.44м2"
                  : imageindex === 2
                  ? "'B' 2 өрөө орон сууц 47.80м2"
                  : imageindex === 3
                  ? "'B' 3 өрөө орон сууц 66.19м2"
                  : imageindex === 4
                  ? "'Г' 1 өрөө орон сууц 33.43м2"
                  : imageindex === 5
                  ? "'Д' 2 өрөө орон сууц 48.09м2"
                  : "'Е' 1 өрөө орон сууц 36.03м2"}
              </h1>
            </div>
            <p>
              Та QR кодыг уншуулан 3D гээр харах боломжтой. Энэхүү байр нь европ
              чанар стандартын дагуу баригдаж байгаа, төвийн ус дулаантай
              холбогдсон.
            </p>
          </div>
        </div>
        <div className="padding10"></div>
        <ImageGallery
          showIndex={false}
          infinite={true}
          items={imagess}
          showPlayButton={false}
          slideInterval={1000}
          slideOnThumbnailOver={true}
          onThumbnailClick={handleImageClick}
        />
        <div className="containers flex mtop">
          <div className="left row">
            <Heading subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
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
            <img src={images.apart3} alt="" />
          </div>
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <Heading subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
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
            <img src={images.apart4} alt="" />
          </div>
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <img src={images.apart5} alt="" />
          </div>
          <div className="paddingwidth5"></div>
          <div className="right row">
            <Heading subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
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
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <img src={images.apart6} alt="" />
          </div>
          <div className="paddingwidth5"></div>
          <div className="right row">
            <Heading subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
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
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <Heading subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
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
            <img src={images.apart7} alt="" />
          </div>
        </div>
        <div className="containers flex mtop">
          <div className="left row">
            <Heading subtitle="ОРОН СУУЦНЫ БАРИЛГА" />
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
            <img src={images.apart8} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apartment;

// export default About