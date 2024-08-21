import React from "react";
import { AppWrapAbout, MotionWrap } from "../../wrapper";
// import FullButton from "../About/Button";
// import styled from "styled-components";
// import { images } from "../../constants";


const JobPage = () => {
  return (
    <div className="lightBg">
      {/* <div className="container">
        <Advertising className="flexSpaceCenter">
          <AddLeft>
            <h4 className="font15 semiBold">A few words about company</h4>
            <h2 className="font40 extraBold">A Study of Creativity</h2>
            <p className="font12">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
              <div style={{ width: "190px" }}>
                <FullButton
                  title="Get Started"
                  action={() => alert("clicked")}
                  border
                />
              </div>
              <div style={{ width: "190px", marginLeft: "15px" }}>
                <FullButton
                  title="Contact Us"
                  action={() => alert("clicked")}
                  border
                />
              </div>
            </ButtonsRow>
          </AddLeft>
          <AddRight>
            <AddRightInner>
              <div className="flexNullCenter">
                <AddImgWrapp1 className="flexCenter">
                  <img src={images.about} alt="office" />
                </AddImgWrapp1>
                <AddImgWrapp2>
                  <img src={images.aboutHoh} alt="office" />
                </AddImgWrapp2>
              </div>
              <div className="flexNullCenter">
                <AddImgWrapp3>
                  <img src={images.apartmnet1} alt="office" />
                </AddImgWrapp3>
                <AddImgWrapp4>
                  <img src={images.apartmnet13} alt="office" />
                </AddImgWrapp4>
              </div>
            </AddRightInner>
          </AddRight>
        </Advertising>
      </div> */}
    </div>
  );
};

export default JobPage;

// export default AppWrapAbout(
//   MotionWrap(JobPage, "app__wrapper_about_screen"),
//   "about",
//   ""
// );

// const Advertising = styled.div`
//   margin: 80px 0;
//   padding: 100px 0;
//   position: relative;
//   @media (max-width: 1160px) {
//     padding: 100px 0 40px 0;
//   }
//   @media (max-width: 860px) {
//     flex-direction: column;
//     padding: 0 0 30px 0;
//     margin: 80px 0 0px 0;
//   }
// `;

// const AddLeft = styled.div`
//   width: 50%;
//   p {
//     max-width: 475px;
//   }
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//     text-align: center;
//     h2 {
//       line-height: 3rem;
//       margin: 15px 0;
//     }
//     p {
//       margin: 0 auto;
//     }
//   }
// `;

// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;

// const AddRight = styled.div`
//   width: 50%;
//   position: absolute;
//   top: -70px;
//   right: 0;
//   @media (max-width: 860px) {
//     width: 80%;
//     position: relative;
//     order: 1;
//     top: -40px;
//   }
// `;

// const AddRightInner = styled.div`
//   width: 100%;
// `;

// const AddImgWrapp1 = styled.div`
//   width: 48%;
//   margin: 0 6% 10px 6%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
// const AddImgWrapp2 = styled.div`
//   width: 30%;
//   margin: 0 5% 10px 5%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
// const AddImgWrapp3 = styled.div`
//   width: 20%;
//   margin-left: 40%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
// const AddImgWrapp4 = styled.div`
//   width: 30%;
//   margin: 0 5%auto;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
