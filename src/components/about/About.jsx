import React from "react";
import Heading from "../common/Heading";
import { AppWrap, MotionWrap } from "../main/wrapper";
import { images } from "../main/constants";

const Abouts = () => {
  return (
    <>
      <div className="padding10"></div>
      <Heading title="ТИ ЭЙ ДИ И" subtitle="Групп компани" />
      <section className="">
        <div className="flex mtop">
          <div className="left row">
            <p>
              “Ти Эй Ди И констракшн” ХХК нь 2017 онд Улаанбаатар хотод
              байгуулагдсан ба Барилга хот байгуулалтын яамнаас олгосон тусгай
              зөвшөөрлийн хүрээнд барилгын засвар, гадаад худалдаа, интерьер
              дизайны чиглэлээр үйл ажиллагаа явуулдаг компани юм.
            </p>
            <p>
              <h4>Эрхэм зорилго:</h4>
              “Бид тав тух, аюулгүй байдлыг таны гэрт цогцлооно”
            </p>
            <p>
              <h4>Алсын хараа:</h4>
              Салбартаа тэргүүлэгч, шилдэг иноваци бүхий барилгын компани болох.
            </p>
          </div>
          <div className="right row">
            <img src={images.mainLogo} alt="" />
          </div>
        </div>

        <div className=" flex mtop">
          <div className="left row">
            <Heading subtitle="МАНАЙ ХАМТ ОЛОН​" />
            <p>
              Манай баг хамт олон нь Иргэний ба үйлдвэрийн барилгын мэргэшсэн
              инженер гурав, Инженер техникийн ажилчид зургаа, ерөнхий менежер,
              нярав, засал, арматур, мужаан, туслах 20-н ажилтантайгаар нийт 31
              хүний бүрэлдэхүүнтэйгээр үйл ажиллагаа явуулж байна. ​
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
            <p>
              Манай компани барилгын бүтээн байгуулалтаас гадна гадаад
              худалдааны үйл ажиллагаа явуулж барилгын салбар дахь нэмүү өртгийн
              зардлыг бууруулах, барилгын материалын чанарыг сайжруулах, түүний
              гарцыг нэмэгдүүлэх алсын хараа бүхий компани юм​
            </p>
          </div>
        </div>
        <div className=" flex mtop">
          <div className="left row">
            <Heading subtitle="АЖЛЫН ТУРШЛАГА​​" />
            <p>
              <li>
                2019 онд Сонгинохайрхан дүүрэг Ар Гүнтэд байрлах 2 давхар 3
                ширхэг амины орон сууцны барилгын угсралт, гадна инженерийн
                салбар шугам сүлжээ, гадна тохижилтын ажил
              </li>
            </p>
            <p>
              <li>
                2019 онд Улаанбаатар хот Чингэлтэй дүүрэгт байрлах Ялалт Плаза
                төслийн барилга угсралтын ажлын туслан гүйцэтгэгч
              </li>
            </p>
            <p>
              <li>
                2020 онд Баянгол дүүргийн 23-р хорооны нутаг дэвсгэрт баригдаж
                буй “Mega City” төслийн барилга угсралтын туслан гүйцэтгэгч
              </li>
            </p>
            <p>
              <li>2020 онд Хурд Академи хотхон, Хүннү 2222 дээврийн ажил</li>
            </p>
            <p>
              <li>2020 онд “Иргэний нисэх” спорт цогцолбор дээврийн ажил</li>
            </p>
            <p>
              <li>
                2021 онд Хан-Уул дүүргийн 8-р хороонд байрлах “Актив Гарден
                хороолол”-ын узелын барилгын угсралт, гадна тохижилтын ажил.​
              </li>
            </p>
            <p>
              <li>
                2022-2023 онд Баянгол дүүргийн 10-р хороонд байрлах “Хөх сувд
                хороолл”-ын “С” болон “F” блокын барилга угсралтын ажил хийгдэж
                байна...
              </li>
            </p>
          </div>
        </div>
        <div className=" flex mtop">
          <Heading title="ХИЙГДСЭН АЖИЛЛУУД​" />
        </div>
        <div className="padding10"></div>
        <div className="container flex mtop">
          <div className="left row">
            <Heading subtitle="ХӨХ СУВД ХОРООЛОЛ​​" />
            <p>Төсөл хэрэгжүүлэгч</p>
          </div>
          <div className="right row">
            <img src={images.companyabout2} alt="" />
          </div>
        </div>
        <div className="padding10"></div>
        <div className="container flex mtop">
          <div className="left row">
            <Heading subtitle="МЕГА СИТИ ХОТХОН​" />
            <p>Туслан гүйцэтгэгч</p>
          </div>
          <div className="right row">
            <img src={images.companyabout1} alt="" />
          </div>
        </div>
        <div className="padding10"></div>
        <div className="container flex mtop">
          <div className="left row">
            <Heading subtitle="Мандала Гарден​" />
            <p>Гадна пасат, тохижилт</p>
          </div>
          <div className="right row">
            <img src={images.companyabout3} alt="" />
          </div>
        </div>
        <div className="padding10"></div>
        <div className="container flex mtop">
          <div className="left row">
            <Heading subtitle="ЯЛАЛТ ПЛАЗА​" />
            <p>Дотор засал</p>
          </div>
          <div className="right row">
            <img src={images.companyabout4} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Abouts, "app__footer"),
  "contact",
  "app__whitebg"
);

// export default About
