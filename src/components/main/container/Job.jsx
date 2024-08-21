import React from "react";
import FullButton from "./About/Button";
import styled from "styled-components";
import { images } from "../constants";
import { AppWrapAbout, MotionWrap } from "../wrapper";
import "./job.scss";

const JobPage = () => {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font16 semiBold">
                  <span> Ти Эй Ди И Групп компани</span>
                </h4>
                <div className="padding5"></div>
                <h2 className="font30 semiBold">Эрхэм зорилго:</h2>
                <p className="font14">
                  “Бид тав тух, аюулгүй байдлыг таны гэрт цогцлооно”
                </p>
                <div className="padding5"></div>
                <h2 className="font30 semiBold">Алсын хараа:</h2>
                <p className="font14">
                  Салбартаа тэргүүлэгч, шилдэг иноваци бүхий барилгын компани
                  болох.
                </p>
                <div className="padding5"></div>
                <p className="font14">
                  Манай компани барилгын бүтээн байгуулалтаас гадна гадаад
                  худалдааны үйл ажиллагаа явуулж барилгын салбар дахь нэмүү
                  өртгийн зардлыг бууруулах, барилгын материалын чанарыг
                  сайжруулах, түүний гарцыг нэмэгдүүлэх алсын хараа бүхий
                  компани юм​
                </p>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={images.apart2} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={images.companyabout3} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={images.companyabout1} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={images.companyabout4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AppWrapAbout(
  MotionWrap(JobPage, "app__wrapper_about_screen"),
  "about",
  ""
);

const Wrapper = styled.section`
  width: 100%;
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const AddRight = styled.div`
  width: 60%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;

const AddRightInner = styled.div`
  width: 100%;
`;

const AddImgWrapp1 = styled.div`
  width: 100%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 50%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 30%;
  margin-left: 30%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
