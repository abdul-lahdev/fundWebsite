"use client";
import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "@/public/assets/css/models.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Form from "react-bootstrap/Form";
import PricingTable from "@/components/homepages/home1/PricingTable";
import Link from "next/link";

import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BadgeButton from "../evaluation-model/component/BadgeBtn";
import Layout from "@/components/layout/Layout";
import ModelVideo from "@/components/homepages/home1/ModalVideo";

export default function Express() {
  const [stepValue, setStepValue] = useState(true); // Default to "2-Step"

  const radioFunc = (event) => {
    setStepValue(event.target.value === "2-Step");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModelVideo
        handleClose={handleClose}
        show={show}
        videoUrl="https://youtu.be/0f2RTcz9Dho"
      />
      <Layout headerStyle={1} footerStyle={1}>
        <section className={styles.heroSection}>
          <div>
            <Container className={styles.containerHero}>
              <Row className="d-flex justify-content-center align-items-center setPadding">
                <Col className="text-center text-white">
                  <div class={styles.chlengeFlx}>
                    <a class={styles.myBtn} href="#">
                      {"<"} Back
                    </a>
                    <a class={styles.myBtn} href="#">
                      <img src="/assets/img/models/express-icon.svg" alt="" />
                      <strong>Express Challenge</strong>- Withdraw from the
                      Challenge Phase!
                    </a>
                  </div>

                  <h1>
                    Grow at Your Own Pace with the
                    <br /> Fundednext Express Challenge
                  </h1>
                  <p>
                    Achieve 25% growth with no time limit and just one Challenge
                    Phase to complete. Trade your <br /> way and withdraw your
                    15% profit share right from the Challenge Phase!
                  </p>
                  <div className={styles.heroCtaBtn}>
                    <div className={styles.primary}>
                      <button style={{ color: "#fff", border: "none" }}>
                        Start Challenge{" "}
                        <svg
                          stroke="#fff"
                          fill="#fff"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="rotate-[-45deg]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            <div className={styles.sliderSection}>
              <Swiper
                className={styles.mySwiper}
                modules={[Pagination, FreeMode]}
                slidesPerView={1.9}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span className="${styles.paginationBullet} ${className}"></span>`;
                  },
                }}
                loop={false}
                dots={true}
                centeredSlides={true}
                initialSlide={1}
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className={styles.slider1}>
                    <h2>Fast-Track Your Trading with the Express Challenge</h2>
                    <p>
                      Earn 15% profit share during the challenge and up to 90%
                      profit split. Trade on your own terms, pressure-free, with
                      the Express Challenge trading account.
                    </p>
                    <button className={styles.button}>Get Plan</button>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className={styles.slider2bg}>
                    <div
                      className={styles.slider2}
                      style={{
                        backgroundImage: `url(/assets/img/models/express-thumbnail.webp)`,
                      }}
                    >
                      <button onClick={handleShow}>
                        {/* <div className={styles.btnPlay}>
                      <div className={styles.buttonRotation}></div> */}
                        <div className={styles.button}>
                          <div>
                            <svg
                              viewBox="0 0 600 600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              fill="red"
                            >
                              <g transform="matrix(0.95173205,0,0,0.95115787,13.901174,12.168794)">
                                <path
                                  d="M 29.830078,-12.726563 C 5.7112733,-14.099797 -14.601552,5.0862749 -14.605469,29.244141 V 575.97852 c 0.0049,31.25526 32.899706,51.57891 60.853516,37.59765 L 592.59961,340.20898 c 14.23447,-7.12574 23.22422,-21.67923 23.22422,-37.59766 0,-15.91842 -8.98975,-30.47191 -23.22422,-37.59765 L 46.248047,-8.3535156 C 41.130004,-10.913268 35.543301,-12.401327 29.830078,-12.726563 Z"
                                  fill="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                        {/* </div> */}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                  <div
                    className={styles.slider3}
                    style={{
                      backgroundImage: `url(/images/models/exslider3.png)`,
                    }}
                  >
                    <h2>Step to Winning with Express Challenge</h2>
                    <p>
                      Prove yourself once, hit your target, and get access to
                      your trading account in as little as 10 trading days. No
                      unrealistic goals, no rush!
                    </p>
                    <button className={styles.button}>Sign Up</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </section>

        <section className={styles.IntroSectionExpress}>
          <Container>
            <Row className="d-flex">
              <Col md={12} lg={12} xl={12}>
                <h1 className="text-center text-white">
                  Introducing Express Challenge{" "}
                </h1>
                <p className={`${styles.greyTextColor} text-center`}>
                  Explore why traders choose the Express Challenge
                </p>
                <div className={styles.IntroCardExpress}>
                  <div className={`${styles.stellaritem} ${styles.firstdiv}`}>
                    <h5>
                      The Express Challenge <br />
                      offers <span>2 types</span> of
                      <br /> accounts for traders
                    </h5>
                  </div>
                  <div className={styles.stellaritem}>
                    <h4>Consistency</h4>
                    <ul>
                      <li>
                        <p>Maximum Challenge Account Size: 200K</p>
                      </li>
                      <li>
                        <p>FundedNext Account: 100% of Challenge Size</p>
                      </li>
                      <li>
                        <p>Maximum Overall Loss: 6%</p>
                      </li>
                      <li>
                        <p>Minimum Trading Days: 10</p>
                      </li>
                      <li>
                        <p>Consistency Rule applicable </p>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.stellaritem}>
                    <h4>Non-Consistency </h4>
                    <ul>
                      <li>
                        <p>Maximum Challenge Account Size: 100K </p>
                      </li>
                      <li>
                        <p>FundedNext Account: 25% of Challenge Size</p>
                      </li>
                      <li>
                        <p>Minimum Trading Days: 10 Days </p>
                      </li>
                      <li>
                        <p>Consistency Rule not applicable </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.benefitSection}>
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xl={6} lg={6} sm={12}>
                <div className={styles.benefits}>
                  <BadgeButton title="Express Challenge Benefits" />
                  <h1 className="text-white my-3">
                    Dominate the
                    <br /> Trading World
                  </h1>
                  <p className="text-white">
                    Reach your goals faster with the Express Challenge. Enjoy{" "}
                    <br /> your profits right from the Challenge Phase, and
                    master <br /> the art of consistent trading for maximum
                    results.
                  </p>
                </div>
              </Col>
              <Col xl={6} lg={6} sm={12} className="d-flex justify-content-end">
                <img
                  src="/assets/img/models/stellar-challenge-benefits.webp"
                  alt=""
                />
              </Col>
              <Col lg={12} xl={12}>
                <div className={styles.stellarPerfectMain}>
                  <div
                    className={`${styles.stellarPerfectItem} cardHeightSetting`}
                  >
                    <img src="/assets/img/models/up.svg" alt="Trade" />
                    <h4 className={styles.stellarPerfectH4}>
                      Trade with up to $200K
                    </h4>
                    <p>
                      Achieve trading mastery with FundedNext. Trade up to $200K
                      through the Express Challenge.
                    </p>
                  </div>

                  <div
                    className={`${styles.stellarPerfectItem} ${styles.marginBottom} cardHeightSetting`}
                  >
                    <img
                      src="/assets/img/models/dollar.svg"
                      alt="Profit Share"
                    />
                    <h4 className={styles.stellarPerfectH4}>
                      Up to 95% Profit Share
                    </h4>
                    <p>
                      Trade with FundedNext and avail upto 95% of the profits
                      you make with your Express trading accounts with an extra
                      add-on.
                    </p>
                  </div>

                  <div
                    className={`${styles.stellarPerfectItem} cardHeightSetting `}
                  >
                    <img
                      src="/assets/img/models/dollar.svg"
                      alt="Profit Share from Challenge"
                    />
                    <h4 className={styles.stellarPerfectH4}>
                      15% Profit Share from Challenge Phase
                    </h4>
                    <p>
                      The only trading prop firm offering 15% profit share from
                      the Challenge Phase profits.
                    </p>
                  </div>

                  <div
                    className={`${styles.stellarPerfectItem} cardHeightSetting`}
                  >
                    <img src="/assets/img/models/lock.svg" alt="Quick Access" />
                    <h4 className={styles.stellarPerfectH4}>
                      Quick Account Access
                    </h4>
                    <p>
                      Get FundedNext Accounts with just 2 days of trading on
                      Stellar 1-Step or 5 days on Stellar 2-Step.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="containerPricingExpress">
          <Container>
            <Row>
              <Col xxl={12}>
                <h1 className="expressPricingHeading my-5">
                  Choose the best Express Plan
                </h1>
                <div className="d-flex align-items-center justify-content-center my-5">
                  <div className="d-flex align-items-center gap-3 settingPrefenceSec">
                    <p className="p-0 m-0 ">Select Preference</p>
                    <Form.Check
                      inline
                      label="Consistency"
                      name="group1"
                      type="radio"
                      id="radioBtn2"
                      value="2-Step"
                      onChange={radioFunc}
                      checked={stepValue}
                    />
                    <Form.Check
                      inline
                      label="Non-Consistency"
                      name="group1"
                      type="radio"
                      id="radioBtn1"
                      value="1-Step"
                      onChange={radioFunc}
                      checked={!stepValue}
                    />
                  </div>
                </div>
                <div className="PricingTableSetting">
                  {stepValue ? (
                    <>
                      <PricingTable>
                        <thead>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">
                                Account Size
                              </p>
                            </td>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">$6,000</p>
                            </td>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">$15,000</p>
                            </td>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">$25,000</p>
                            </td>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">$50,000</p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>
                              <Link href="" className="btn getPlanBtn">
                                <div className="d-flex flex-column">
                                  <span className="getPlanHeading">
                                    Get Plan
                                  </span>
                                  <span className="getPlanFee">Fee: $49</span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              {" "}
                              <Link href="" className="btn getPlanBtn">
                                <div className="d-flex flex-column">
                                  <span className="getPlanHeading">
                                    Get Plan
                                  </span>
                                  <span className="getPlanFee">Fee: $99</span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              {" "}
                              <Link href="" className="btn getPlanBtn">
                                <div className="d-flex flex-column">
                                  <span className="getPlanHeading">
                                    Get Plan
                                  </span>
                                  <span className="getPlanFee">Fee: $199</span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              {" "}
                              <Link href="" className="btn getPlanBtn">
                                <div className="d-flex flex-column">
                                  <span className="getPlanHeading">
                                    Get Plan
                                  </span>
                                  <span className="getPlanFee">Fee: $299</span>
                                </div>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                15% Profit Share From Challenge Phase
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">$225</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">$562.50</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">$937.50</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">$1,875</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Profit Target
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">25%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">25%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">25%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">25%</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Maximum Daily Loss
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                5% ($300)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                5% ($750)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                5% ($1,250)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                5% ($2,500)
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Maximum Overall Loss
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                10% ($600)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                10% ($1,500)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                10% ($2,500)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                10% ($5,000)
                              </p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Minimum Trading Days
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">10 Days</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">10 Days</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">10 Days</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">10 Days</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Profit Split Upto
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">95%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">95%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">95%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">95%</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                News Trading
                              </p>
                            </td>
                            <td>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="none"
                                  className="h-[14px] w-[14px] opacity-40"
                                >
                                  <g
                                    stroke="#fff"
                                    strokeWidth="2"
                                    opacity="0.75"
                                  >
                                    <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                  </g>
                                </svg>
                              </span>
                            </td>
                            <td>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="none"
                                  className="h-[14px] w-[14px] opacity-40"
                                >
                                  <g
                                    stroke="#fff"
                                    strokeWidth="2"
                                    opacity="0.75"
                                  >
                                    <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                  </g>
                                </svg>
                              </span>
                            </td>
                            <td>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="none"
                                  className="h-[14px] w-[14px] opacity-40"
                                >
                                  <g
                                    stroke="#fff"
                                    strokeWidth="2"
                                    opacity="0.75"
                                  >
                                    <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                  </g>
                                </svg>
                              </span>
                            </td>
                            <td>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="none"
                                  className="h-[14px] w-[14px] opacity-40"
                                >
                                  <g
                                    stroke="#fff"
                                    strokeWidth="2"
                                    opacity="0.75"
                                  >
                                    <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                  </g>
                                </svg>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                First Reward
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">Monthly</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">Monthly</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">Monthly</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">Monthly</p>
                            </td>
                          </tr>
                        </tbody>
                      </PricingTable>
                    </>
                  ) : (
                    <>
                      <PricingTable>
                        <thead>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">
                                Account Size
                              </p>
                            </td>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">$6,000</p>
                            </td>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">$15,000</p>
                            </td>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">$25,000</p>
                            </td>
                            <td>
                              <p className="p-0 m-0 tableHeadingSet">$50,000</p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>
                              <Link href="" className="btn getPlanBtn">
                                <div className="d-flex flex-column">
                                  <span className="getPlanHeading">
                                    Get Plan
                                  </span>
                                  <span className="getPlanFee">Fee: $59</span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              {" "}
                              <Link href="" className="btn getPlanBtn">
                                <div className="d-flex flex-column">
                                  <span className="getPlanHeading">
                                    Get Plan
                                  </span>
                                  <span className="getPlanFee">Fee: $119</span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              {" "}
                              <Link href="" className="btn getPlanBtn">
                                <div className="d-flex flex-column">
                                  <span className="getPlanHeading">
                                    Get Plan
                                  </span>
                                  <span className="getPlanFee">Fee: $229</span>
                                </div>
                              </Link>
                            </td>
                            <td>
                              {" "}
                              <Link href="" className="btn getPlanBtn">
                                <div className="d-flex flex-column">
                                  <span className="getPlanHeading">
                                    Get Plan
                                  </span>
                                  <span className="getPlanFee">Fee: $379</span>
                                </div>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                15% Profit Share From Challenge Phase
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">$225</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">$562.50</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">$937.50</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">$1,875</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Profit Target
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">25%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">25%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">25%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">25%</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Maximum Daily Loss
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                5% ($300)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                5% ($750)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                5% ($1,250)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                5% ($2,500)
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Maximum Overall Loss
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                10% ($600)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                10% ($1,500)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                10% ($2,500)
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">
                                10% ($5,000)
                              </p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Minimum Trading Days
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">10 Days</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">10 Days</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">10 Days</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">10 Days</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                Profit Split Upto
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">95%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">95%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">95%</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">95%</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                News Trading
                              </p>
                            </td>
                            <td>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  className="h-[14px] w-[14px]"
                                >
                                  <path
                                    d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                    stroke="white"
                                    strokeWidth="2"
                                  ></path>
                                </svg>
                              </span>
                            </td>
                            <td>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  className="h-[14px] w-[14px]"
                                >
                                  <path
                                    d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                    stroke="white"
                                    strokeWidth="2"
                                  ></path>
                                </svg>
                              </span>
                            </td>
                            <td>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  className="h-[14px] w-[14px]"
                                >
                                  <path
                                    d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                    stroke="white"
                                    strokeWidth="2"
                                  ></path>
                                </svg>
                              </span>
                            </td>
                            <td>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  className="h-[14px] w-[14px]"
                                >
                                  <path
                                    d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                    stroke="white"
                                    strokeWidth="2"
                                  ></path>
                                </svg>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="p-0 m-0 tableParaTexxt">
                                First Reward
                              </p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">Monthly</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">Monthly</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">Monthly</p>
                            </td>
                            <td>
                              <p className="tableParaTexxt p-0 m-0">Monthly</p>
                            </td>
                          </tr>
                        </tbody>
                      </PricingTable>
                    </>
                  )}
                </div>
                <div className="d-flex align-items-center gap-5 justify-content-center setTabsBtmText">
                  <p>Add-ons for Express</p>
                  <ul
                    className="ps-0 d-flex align-items-center gap-5"
                    style={{ listStyle: "circle" }}
                  >
                    <li>Lifetime Payout 95%</li>
                    <li>150% Reward </li>
                    <li>Double Up</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.guaranteedSection}>
          <Container className={styles.container}>
            <Row>
              <Col xl={12} lg={12}>
                <div className={styles.guaranteedcontainer}>
                  <h3>Guaranteed Rewards!</h3>
                  <h4>Get paid in 24 hours or we pay $1,000 extra</h4>
                  <p>
                    At FundedNext, your reward is guaranteed. Once you’re
                    eligible, we’ll disburse it within 24 hours of your request.
                    If we miss the mark, we’ll add an extra $1,000 as a
                    commitment to your trading talent.
                  </p>
                  <button>Read More</button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.faqSection}>
          <Container>
            <Row>
              <Col md={12} lg={12}>
                <div className={styles.trade}>
                  <h2 className="mb-2 text-white">Trade Smart & Win</h2>
                  <p className="pt-3 text-center text-sm mx-auto">
                    Join FundedNext today and experience a trading community
                    unlike any other.
                  </p>
                  <div className={styles.bb2}>
                    <a className={styles.myBtn3} href="#">
                      <img src="/assets/img/models/discord-new.svg" alt="" />
                      Join Discord Community
                    </a>
                    <a class={styles.myBtn4} href="#">
                      <img src="/assets/img/models/twitter_new.svg" alt="" />
                      Join X Community
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}
