"use client";

import TestimonialThumbSlider1 from "@/components/slider/TestimonialThumbSlider1";
import { Col } from "react-bootstrap";
import ModelVideo from "./ModalVideo";
import { useState } from "react";

export default function Testimonial() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [secondShow, setsecondShow] = useState(false);
  const secondHandleClose = () => setsecondShow(false);
  const secondHandleShow = () => setsecondShow(true);
  const [thirdShow, setThirdShow] = useState(false);
  const thirdHandleClose = () => setThirdShow(false);
  const thirdHandleShow = () => setThirdShow(true);
  return (
    <>
      <ModelVideo
        handleClose={handleClose}
        show={show}
        videoUrl="https://youtu.be/0f2RTcz9Dho"
      />
      <ModelVideo
        handleClose={secondHandleClose}
        show={secondShow}
        videoUrl="https://youtu.be/0f2RTcz9Dho"
      />
      <ModelVideo
        handleClose={thirdHandleClose}
        show={thirdShow}
        videoUrl="https://youtu.be/0f2RTcz9Dho"
      />
      <div className="testimonial-area startTalkingSection testimonial-2 position-relative section-padding">
        <div className="container containerSetting">
          <div className="row justify-content-between">
            <Col xxl={3}>
              <div
                className="startTalkingLeftSection"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <button className="btn startTakBtn">Stars Talk</button>
                <h1 className="starTalkingHeading">Icons Around the World</h1>
                <p className="starTalkingPara">
                  Global leaders are cheering for and supporting FundedNext.
                  Now, it is your turn to be a part of the best trading
                  challenge.
                </p>
              </div>
            </Col>
            <Col xxl={7}>
              <div className="startTalkingRightSection">
                <div className="startTalkCardSetting">
                  <div className="position-relative d-flex justify-content-center">
                    <div
                      className="position-absolute settingVideoIconPost"
                      onClick={handleShow}
                    >
                      <svg
                        width="67"
                        height="67"
                        viewBox="0 0 67 67"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_b_2151_12027)">
                          <rect
                            x="0.890625"
                            y="1.47656"
                            width="65"
                            height="65"
                            rx="32.5"
                            fill="#00A6EE"
                          ></rect>
                          <rect
                            x="0.640625"
                            y="1.22656"
                            width="65.5"
                            height="65.5"
                            rx="32.75"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="0.5"
                          ></rect>
                          <path
                            d="M45.3789 32.6775C46.3789 33.2549 46.3789 34.6982 45.3789 35.2756L28.5215 45.0082C27.5215 45.5856 26.2715 44.8639 26.2715 43.7092L26.2715 24.2439C26.2715 23.0892 27.5215 22.3675 28.5215 22.9449L45.3789 32.6775Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="3"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_2151_12027"
                            x="-9.60938"
                            y="-9.02344"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="5"
                            ></feGaussianBlur>
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_2151_12027"
                            ></feComposite>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_2151_12027"
                              result="shape"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="cardImageSet"
                    style={{
                      backgroundImage: "url(/assets/img/about/colin.webp)",
                    }}
                  ></div>
                  <div>
                    <h2 className="stCardHeading p-0 mt-4">
                      "Join FundedNext and gain BIG, just like I hit BIG sixes!"
                    </h2>
                    <p className="stCardSubHeading p-0 mt-1">
                      Colin Munro , Cricketer
                    </p>
                  </div>
                </div>
                <div className="startTalkCardSetting">
                  <div className="position-relative d-flex justify-content-center">
                    <div
                      className="position-absolute settingVideoIconPost"
                      onClick={handleShow}
                    >
                      <svg
                        width="67"
                        height="67"
                        viewBox="0 0 67 67"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_b_2151_12027)">
                          <rect
                            x="0.890625"
                            y="1.47656"
                            width="65"
                            height="65"
                            rx="32.5"
                            fill="#00A6EE"
                          ></rect>
                          <rect
                            x="0.640625"
                            y="1.22656"
                            width="65.5"
                            height="65.5"
                            rx="32.75"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="0.5"
                          ></rect>
                          <path
                            d="M45.3789 32.6775C46.3789 33.2549 46.3789 34.6982 45.3789 35.2756L28.5215 45.0082C27.5215 45.5856 26.2715 44.8639 26.2715 43.7092L26.2715 24.2439C26.2715 23.0892 27.5215 22.3675 28.5215 22.9449L45.3789 32.6775Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="3"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_2151_12027"
                            x="-9.60938"
                            y="-9.02344"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="5"
                            ></feGaussianBlur>
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_2151_12027"
                            ></feComposite>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_2151_12027"
                              result="shape"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="cardImageSet"
                    style={{
                      backgroundImage: "url(/assets/img/about/martinez.webp)",
                    }}
                  ></div>
                  <div>
                    <h2 className="stCardHeading p-0 mt-4">
                      "Passion takes you to glory."
                    </h2>
                    <p className="stCardSubHeading p-0 mt-1">
                      Emi Martinez , Footballer
                    </p>
                  </div>
                </div>
                <div className="startTalkCardSetting">
                  <div className="position-relative d-flex justify-content-center">
                    <div
                      className="position-absolute settingVideoIconPost"
                      onClick={handleShow}
                    >
                      <svg
                        width="67"
                        height="67"
                        viewBox="0 0 67 67"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_b_2151_12027)">
                          <rect
                            x="0.890625"
                            y="1.47656"
                            width="65"
                            height="65"
                            rx="32.5"
                            fill="#00A6EE"
                          ></rect>
                          <rect
                            x="0.640625"
                            y="1.22656"
                            width="65.5"
                            height="65.5"
                            rx="32.75"
                            stroke="white"
                            strokeOpacity="0.2"
                            strokeWidth="0.5"
                          ></rect>
                          <path
                            d="M45.3789 32.6775C46.3789 33.2549 46.3789 34.6982 45.3789 35.2756L28.5215 45.0082C27.5215 45.5856 26.2715 44.8639 26.2715 43.7092L26.2715 24.2439C26.2715 23.0892 27.5215 22.3675 28.5215 22.9449L45.3789 32.6775Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="3"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_2151_12027"
                            x="-9.60938"
                            y="-9.02344"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="5"
                            ></feGaussianBlur>
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_2151_12027"
                            ></feComposite>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_2151_12027"
                              result="shape"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="cardImageSet"
                    style={{
                      backgroundImage:
                        "url(/assets/img/about/christ_gayle.webp)",
                    }}
                  ></div>
                  <div>
                    <h2 className="stCardHeading p-0 mt-4">
                      "Never give up, it's something you should look into."
                    </h2>
                    <p className="stCardSubHeading p-0 mt-1">
                      Chris Gayle , Cricketer
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="col-lg-8 m-auto" data-aos="fade-up" data-aos-duration={1000}> */
}
{
  /* <TestimonialThumbSlider1 /> */
}
{
  /* </div> */
}
