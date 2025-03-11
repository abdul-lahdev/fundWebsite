"use client";
import React from "react";
import { useState } from "react";
import { Tab, Tabs, Row, Col, Container } from "react-bootstrap";
import styles from "@/public/assets/css/models.module.scss";
import BadgeButton from "../evaluation-model/component/BadgeBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PlanTabs from "@/components/homepages/home1/PlanTabs";
import Form from "react-bootstrap/Form";
import Layout from "@/components/layout/Layout";
import ModelVideo from "@/components/homepages/home1/ModalVideo";

import PricingTable from "@/components/homepages/home1/PricingTable";
import Link from "next/link";

export default function Stellar() {
  const [key, setKey] = useState("stellar1");
  const [openIndex, setOpenIndex] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [stepValue, setStepValue] = useState(true); // Default to "2-Step"

  const radioFunc = (event) => {
    setStepValue(event.target.value === "2-Step");
  };
  return (
    <>
      <ModelVideo
        handleClose={handleClose}
        show={show}
        videoUrl="https://youtu.be/0f2RTcz9Dho"
      />
      <Layout headerStyle={1} footerStyle={1}>
        <main>
          <div>
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
                          <svg
                            width="27"
                            height="28"
                            viewBox="0 0 27 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.3924 11.2266C20.0246 10.8621 20.6547 10.4989 21.2844 10.1352C22.046 9.69579 22.807 9.25579 23.5685 8.81663C23.766 8.7026 23.973 8.74533 24.0765 8.91955C24.1833 9.09877 24.1189 9.30545 23.9156 9.42281C22.1065 10.4679 20.2971 11.5121 18.4877 12.5569C16.3099 13.8145 14.1327 15.0723 11.9548 16.3294C10.0226 17.4446 8.08973 18.5585 6.15745 19.6735C5.3346 20.1484 4.51203 20.6242 3.68946 21.1C3.36098 21.29 3.16068 21.214 3.05027 20.8484C2.62858 19.4557 2.51206 18.0391 2.72873 16.5985C3.27415 12.9686 5.69304 10.0201 9.13064 8.80303C10.4831 8.32419 11.8769 8.14886 13.3062 8.29534C15.6477 8.53559 17.6468 9.49882 19.3158 11.1545C19.3389 11.1781 19.3635 11.1997 19.3924 11.2266Z"
                              fill="url(#paint0_radial_4695_7023)"
                            />
                            <path
                              d="M5.13341 24.3348C4.16547 24.8935 3.22832 25.4345 2.29089 25.9755C1.82814 26.2424 1.36623 26.5104 0.902369 26.7759C0.772256 26.8502 0.638813 26.8486 0.515636 26.7587C0.402723 26.6763 0.35778 26.5603 0.378587 26.4224C0.398562 26.289 0.486229 26.2088 0.598309 26.1445C1.40562 25.6806 2.2121 25.2148 3.01858 24.7493C5.51571 23.3072 8.01227 21.8646 10.5094 20.4231C12.9902 18.991 15.4712 17.56 17.9522 16.1282C18.9143 15.5731 19.8762 15.0174 20.838 14.4614C21.1249 14.2958 21.3413 14.3785 21.4378 14.6923C21.8368 15.9887 21.9902 17.3153 21.8112 18.6592C21.3374 22.2172 19.4858 24.8109 16.266 26.4016C14.8947 27.0791 13.4232 27.3729 11.8963 27.3246C9.29537 27.2425 7.0668 26.2721 5.21137 24.4472C5.17808 24.4147 5.15699 24.3695 5.13341 24.3348Z"
                              fill="url(#paint1_radial_4695_7023)"
                            />
                            <circle
                              cx="12.002"
                              cy="24.8143"
                              r="1.16872"
                              transform="rotate(-25.146 12.002 24.8143)"
                              fill="white"
                            />
                            <circle
                              cx="18.1232"
                              cy="20.6084"
                              r="0.681158"
                              transform="rotate(-25.146 18.1232 20.6084)"
                              fill="white"
                            />
                            <circle
                              cx="17.8255"
                              cy="22.8484"
                              r="0.381689"
                              transform="rotate(-25.146 17.8255 22.8484)"
                              fill="white"
                            />
                            <path
                              d="M26.6263 3.53691C24.94 3.53691 23.5728 4.90411 23.5728 6.59043C23.5728 4.90411 22.2056 3.53691 20.5193 3.53691C22.2056 3.53691 23.5728 2.16971 23.5728 0.483398C23.5728 2.16971 24.94 3.53691 26.6263 3.53691Z"
                              fill="white"
                            />
                            <path
                              d="M21.2826 7.03457C20.4396 7.03457 19.7559 7.71785 19.7559 8.56133C19.7559 7.71825 19.0726 7.03457 18.2291 7.03457C19.0722 7.03457 19.7559 6.35129 19.7559 5.50781C19.7559 6.35089 20.4396 7.03457 21.2826 7.03457Z"
                              fill="white"
                            />
                            <circle
                              cx="6.39511"
                              cy="16.9593"
                              r="0.795727"
                              transform="rotate(-25.146 6.39511 16.9593)"
                              fill="white"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial_4695_7023"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(13.3748 14.7231) scale(15.4677 15.4677)"
                              >
                                <stop stopColor="#F4E0FF" />
                                <stop offset="0.1648" stopColor="#D690FA" />
                                <stop offset="0.4218" stopColor="#B961E7" />
                                <stop offset="0.857" stopColor="#9432CA" />
                              </radialGradient>
                              <radialGradient
                                id="paint1_radial_4695_7023"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(11.1298 20.8538) scale(27.2242 27.2242)"
                              >
                                <stop stopColor="#F4E0FF" />
                                <stop offset="0.205892" stopColor="#D48CFA" />
                                <stop offset="0.409173" stopColor="#AE42EA" />
                                <stop offset="0.857" stopColor="#A300FF" />
                              </radialGradient>
                            </defs>
                          </svg>
                          <strong>Stellar Challenge</strong> - Most popular
                          model
                        </a>
                      </div>

                      <h1>
                        Join the FundedNext Stellar Challenge <br /> with No
                        Time Limits
                      </h1>
                      <p>
                        With no time limits and up to a 95% profit split,
                        experience the best trading conditions with <br /> every
                        trader's favourite prop challenge!
                      </p>
                      <div className={styles.heroCtaBtn}>
                        <div className={styles.primary}>
                          <button style={{ color: "#fff" }}>
                            Start Challenge
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
                        <h2>The Stellar Route to Trading Greatness</h2>
                        <p>
                          The Stellar Challenge offers unmatched flexibility and
                          opportunity. Trade at your own pace and experience the
                          rewards of true trading freedom!
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
                            // backgroundImage: `url(/images/models/steller-thumbnail.webp)`,
                            backgroundImage: `url(/assets/img/models/steller-thumbnail.webp)`,
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
                          backgroundImage: `url(/assets/img/models/slider2.png)`,
                        }}
                      >
                        <h2>Seize the Market with the Stellar Challenge</h2>
                        <p>
                          Ready to trade on your terms? Choose the prop firm
                          challenge that meets your needs! Experience pure
                          trading freedom and keep up to 95% of your profits.
                        </p>
                        <button className={styles.button}>Sign Up</button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Container>
            </section>

            <section className={styles.IntroSection}>
              <Container>
                <Row className="d-flex">
                  <Col md={12} lg={12} xl={12}>
                    <h1 className="text-center text-white">
                      Introducing Stellar Challenge
                    </h1>
                    <p className="text-center text-white">
                      Explore why traders choose the Stellar Challenge
                    </p>
                    <div className={styles.IntroCard}>
                      <div className={styles.stellaritem}>
                        <h5>
                          Stellar offers
                          <br />
                          <span>3 types</span> of
                          <br /> challenges for our
                          <br />
                          expert Traders
                        </h5>
                      </div>
                      <div className={styles.stellaritem}>
                        <h4>Stellar 2-Step</h4>
                        <ul>
                          <li>
                            <p>Profit Target: P1: 8% | P2: 5%</p>
                          </li>
                          <li>
                            <p>Maximum Daily Loss: 5%</p>
                          </li>
                          <li>
                            <p>Maximum Overall Loss: 10%</p>
                          </li>
                          <li>
                            <p>Minimum Trading Days: 5</p>
                          </li>
                          <li>
                            <p>First Reward: 1 Month</p>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.stellaritem}>
                        <h4>Stellar 1-Step</h4>
                        <ul>
                          <li>
                            <p>Profit Target: P1: 10%</p>
                          </li>
                          <li>
                            <p>Maximum Daily Loss: 3%</p>
                          </li>
                          <li>
                            <p>Maximum Overall Loss: 6%</p>
                          </li>
                          <li>
                            <p>Minimum Trading Days: 2</p>
                          </li>
                          <li>
                            <p>First Reward: 5 Days</p>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.stellaritem}>
                        <h4>Stellar Lite</h4>
                        <ul>
                          <li>
                            <p>Profit Target: P1: 8% | P2: 4%</p>
                          </li>
                          <li>
                            <p>Maximum Daily Loss: 4%</p>
                          </li>
                          <li>
                            <p>Maximum Overall Loss: 8%</p>
                          </li>
                          <li>
                            <p>Minimum Trading Days: 5</p>
                          </li>
                          <li>
                            <p>First Reward: 21 Days</p>
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
                      <BadgeButton title="Stellar Challenge Benefits" />
                      <h1 className="text-white my-3">
                        Perfect Your Path
                        <br /> to Trading Success
                      </h1>
                      <p className="text-white">
                        Explore the Stellar Challenge & maximize your trading
                        <br /> success with FundedNext, your top prop trading
                        firm.
                      </p>
                    </div>
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    sm={12}
                    className="d-flex justify-content-end"
                  >
                    <img
                      src="/assets/img/models/stellar-challenge-benefits.webp"
                      alt=""
                    />
                  </Col>
                  <Col lg={12} xl={12}>
                    <div className={styles.stellarPerfectMain}>
                      <div className={styles.stellarPerfectItem}>
                        <img src="/assets/img/models/up.svg" alt="Trade" />
                        <h4 className={styles.stellarPerfectH4}>
                          Trade with up to $200K
                        </h4>
                        <p>
                          Achieve trading mastery with FundedNext. Trade up to
                          $200K through your Stellar Challenge account.
                        </p>
                      </div>

                      <div className={styles.itemFlex}>
                        <div
                          className={`${styles.stellarPerfectItem} ${styles.marginBottom}`}
                        >
                          <img
                            src="/assets/img/models/dollar.svg"
                            alt="Profit Share"
                          />
                          <h4 className={styles.stellarPerfectH4}>
                            Up to 95% Profit Share
                          </h4>
                          <p>
                            Trade with FundedNext and avail up to 95% of the
                            profits you make with Stellar 1-Step, 2-Step, and
                            Stellar Lite trading accounts with an extra Add-On.
                          </p>
                        </div>
                        <div className={styles.stellarPerfectItem}>
                          <img
                            src="/assets/img/models/calendar.svg"
                            alt="Weekend Holding"
                          />
                          <h4 className={styles.stellarPerfectH4}>
                            Weekend Holding
                          </h4>
                          <p>
                            Hold your trades as long as you want, even on
                            weekends, the perfect solution for swing and
                            intraday traders!
                          </p>
                        </div>
                      </div>

                      <div className={styles.stellarPerfectItem}>
                        <img
                          src="/assets/img/models/dollar.svg"
                          alt="Profit Share from Challenge"
                        />
                        <h4 className={styles.stellarPerfectH4}>
                          15% Profit Share from Challenge Phase
                        </h4>
                        <p>
                          FundedNext is the only prop firm offering a 15% profit
                          share from the Challenge Phase profits.
                        </p>
                      </div>

                      <div className={styles.stellarPerfectItem}>
                        <img
                          src="/assets/img/models/lock.svg"
                          alt="Quick Access"
                        />
                        <h4 className={styles.stellarPerfectH4}>
                          Quick Account Access
                        </h4>
                        <p>
                          Get your Stellar FundedNext Accounts after just 2 days
                          of trading in the Stellar 1-Step Challenge or 5 days
                          on Stellar 2-Step, Stellar Lite Challenges.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="stellarPricingContainer">
              <Container>
                <Row>
                  <Col xxl="12">
                    <div>
                      <h1 className="text-center choosePlanMainHeading">
                        Choose the Best Plan
                      </h1>
                    </div>
                    <div className="pricingTabSetting d-flex flex-column align-items-center justify-content-center">
                      <PlanTabs>
                        <Tab
                          eventKey="stellar"
                          title={
                            <div className="navTitleSet">
                              <span>
                                <img src="/assets/img/about/stellar-plan-new.svg" />
                              </span>
                              <span>Stellar</span>
                            </div>
                          }
                        >
                          <div className="d-flex align-items-center justify-content-center mb-3">
                            <div className="d-flex align-items-center gap-3 settingPrefenceSec">
                              <p className="p-0 m-0 ">Select Preference</p>
                              <Form.Check
                                inline
                                label="2-Step"
                                name="group1"
                                type="radio"
                                id="radioBtn2"
                                value="2-Step"
                                onChange={radioFunc}
                                checked={stepValue}
                              />
                              <Form.Check
                                inline
                                label="1-Step"
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
                                        <p className="p-0 m-0 tableHeadingSet">
                                          $6,000
                                        </p>
                                      </td>
                                      <td>
                                        <p className="p-0 m-0 tableHeadingSet">
                                          $15,000
                                        </p>
                                      </td>
                                      <td>
                                        <p className="p-0 m-0 tableHeadingSet">
                                          $25,000
                                        </p>
                                      </td>
                                      <td>
                                        <p className="p-0 m-0 tableHeadingSet">
                                          $50,000
                                        </p>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td>
                                        <Link
                                          href=""
                                          className="btn getPlanBtn"
                                        >
                                          <div className="d-flex flex-column">
                                            <span className="getPlanHeading">
                                              Get Plan
                                            </span>
                                            <span className="getPlanFee">
                                              Fee: $59
                                            </span>
                                          </div>
                                        </Link>
                                      </td>
                                      <td>
                                        {" "}
                                        <Link
                                          href=""
                                          className="btn getPlanBtn"
                                        >
                                          <div className="d-flex flex-column">
                                            <span className="getPlanHeading">
                                              Get Plan
                                            </span>
                                            <span className="getPlanFee">
                                              Fee: $59
                                            </span>
                                          </div>
                                        </Link>
                                      </td>
                                      <td>
                                        {" "}
                                        <Link
                                          href=""
                                          className="btn getPlanBtn"
                                        >
                                          <div className="d-flex flex-column">
                                            <span className="getPlanHeading">
                                              Get Plan
                                            </span>
                                            <span className="getPlanFee">
                                              Fee: $59
                                            </span>
                                          </div>
                                        </Link>
                                      </td>
                                      <td>
                                        {" "}
                                        <Link
                                          href=""
                                          className="btn getPlanBtn"
                                        >
                                          <div className="d-flex flex-column">
                                            <span className="getPlanHeading">
                                              Get Plan
                                            </span>
                                            <span className="getPlanFee">
                                              Fee: $59
                                            </span>
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
                                        <p className="tableParaTexxt p-0 m-0">
                                          $117
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          $292.50
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          $487.50
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          $975
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p className="p-0 m-0 tableParaTexxt">
                                          Profit Target
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          P1: 8%, P2: 5%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          P1: 8%, P2: 5%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          P1: 8%, P2: 5%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          P1: 8%, P2: 5%
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
                                          Minimum Trading Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          5 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          5 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          5 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          5 Days
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p className="p-0 m-0 tableParaTexxt">
                                          Profit Split Upto
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          95%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          95%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          95%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          95%
                                        </p>
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
                                        <p className="tableParaTexxt p-0 m-0">
                                          Monthly
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          Monthly
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          Monthly
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          Monthly
                                        </p>
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
                                        <p className="p-0 m-0 tableHeadingSet">
                                          $6,000
                                        </p>
                                      </td>
                                      <td>
                                        <p className="p-0 m-0 tableHeadingSet">
                                          $15,000
                                        </p>
                                      </td>
                                      <td>
                                        <p className="p-0 m-0 tableHeadingSet">
                                          $25,000
                                        </p>
                                      </td>
                                      <td>
                                        <p className="p-0 m-0 tableHeadingSet">
                                          $50,000
                                        </p>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td>
                                        <Link
                                          href=""
                                          className="btn getPlanBtn"
                                        >
                                          <div className="d-flex flex-column">
                                            <span className="getPlanHeading">
                                              Get Plan
                                            </span>
                                            <span className="getPlanFee">
                                              Fee: $65
                                            </span>
                                          </div>
                                        </Link>
                                      </td>
                                      <td>
                                        {" "}
                                        <Link
                                          href=""
                                          className="btn getPlanBtn"
                                        >
                                          <div className="d-flex flex-column">
                                            <span className="getPlanHeading">
                                              Get Plan
                                            </span>
                                            <span className="getPlanFee">
                                              Fee: $129
                                            </span>
                                          </div>
                                        </Link>
                                      </td>
                                      <td>
                                        {" "}
                                        <Link
                                          href=""
                                          className="btn getPlanBtn"
                                        >
                                          <div className="d-flex flex-column">
                                            <span className="getPlanHeading">
                                              Get Plan
                                            </span>
                                            <span className="getPlanFee">
                                              Fee: $219
                                            </span>
                                          </div>
                                        </Link>
                                      </td>
                                      <td>
                                        {" "}
                                        <Link
                                          href=""
                                          className="btn getPlanBtn"
                                        >
                                          <div className="d-flex flex-column">
                                            <span className="getPlanHeading">
                                              Get Plan
                                            </span>
                                            <span className="getPlanFee">
                                              Fee: $329
                                            </span>
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
                                        <p className="tableParaTexxt p-0 m-0">
                                          $90
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          $225
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          $375
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          $750
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p className="p-0 m-0 tableParaTexxt">
                                          Profit Target
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          10%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          10%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          10%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          10%
                                        </p>
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
                                          3% ($180)
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          3% ($450)
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          3% ($750)
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          3% ($1,500)
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
                                          6% ($360)
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          6% ($900)
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          6% ($1,500)
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          6% ($3,000)
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
                                        <p className="tableParaTexxt p-0 m-0">
                                          2 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          2 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          2 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          2 Days
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p className="p-0 m-0 tableParaTexxt">
                                          Profit Split Upto
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          95%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          95%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          95%
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          95%
                                        </p>
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
                                        <p className="tableParaTexxt p-0 m-0">
                                          5 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          5 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          5 Days
                                        </p>
                                      </td>
                                      <td>
                                        <p className="tableParaTexxt p-0 m-0">
                                          5 Days
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </PricingTable>
                              </>
                            )}
                          </div>
                        </Tab>
                        <Tab
                          eventKey="stellarLite"
                          title={
                            <div className="navTitleSet">
                              <span>
                                <img src="/assets/img/about/stellar-lite-plan.svg" />
                              </span>
                              <span>Stellar Lite</span>
                            </div>
                          }
                        >
                          <div className="PricingTableSetting">
                            <PricingTable>
                              <thead>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      Account Size
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $5,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $10,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $25,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $50,000
                                    </p>
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
                                        <span className="getPlanFee">
                                          Fee: $59
                                        </span>
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
                                        <span className="getPlanFee">
                                          Fee: $32
                                        </span>
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
                                        <span className="getPlanFee">
                                          Fee: $139
                                        </span>
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
                                        <span className="getPlanFee">
                                          Fee: $229
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Profit Target
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      P1: 8%, P2: 4%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      {" "}
                                      P1: 8%, P2: 4%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      P1: 8%, P2: 4%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      P1: 8%, P2: 4%
                                    </p>
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
                                      4% ($200)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      4% ($400)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      4% ($1,000)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      4% ($2,000)
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
                                      8% ($400)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      8% ($800)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      8% ($2,000)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      8% ($4,000)
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
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Profit Split Upto
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
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
                                    <p className="tableParaTexxt p-0 m-0">
                                      21 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      21 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      21 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      21 Days
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </PricingTable>
                          </div>
                        </Tab>
                      </PlanTabs>
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
                        eligible, we’ll disburse it within 24 hours of your
                        request. If we miss the mark, we’ll add an extra $1,000
                        as a commitment to your trading talent.
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
                  <Col xl={7} lg={7} sm={12} className={styles.padding}>
                    <div className={styles.frequentAsked}>
                      <h3 className="my-3 text-white">Frequently Asked</h3>
                      <Tabs
                        id="controlled-tab"
                        className={`${styles.tab} mb-3`}
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                      >
                        <Tab
                          eventKey="stellar1"
                          title="Stellar 1-Step"
                          className={styles.tabContent}
                        >
                          <div className="container mt-4">
                            <div className={styles.accordion}>
                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(0)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 0 ? "-" : "+"}
                                  </span>
                                  What rules do I need to follow in the Stellar
                                  1-Step Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 0 ? styles.open : ""
                                  }`}
                                >
                                  Stellar 1-Step Rules: Max. daily loss: 3%,
                                  overall loss: 6%, min. of 2 trades on 2
                                  trading days, copy trading within own
                                  accounts, unique IP, VPN/VPS recommended, EAs
                                  allowed, no unfair practices.
                                  <br />
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(1)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 1 ? "-" : "+"}
                                  </span>
                                  What will be my Profit Share from the Stellar
                                  1-Step Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 1 ? styles.open : ""
                                  }`}
                                >
                                  In the Stellar 1-Step Plan, traders get a 15%
                                  profit share from the Challenge Phase after
                                  reaching 10% growth in their FundedNext
                                  Account. The Profit Share increases to 90% in
                                  the FundedNext Account.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(2)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 2 ? "-" : "+"}
                                  </span>
                                  What happens after I pass the Challenge Phase
                                  of the Stellar 1-Step Challenge?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 2 ? styles.open : ""
                                  }`}
                                >
                                  After passing the Stellar 1-Step Challenge, a
                                  profit check is done. If all rules are met,
                                  complete KYC verification, and get the
                                  FundedNext Account within 24-48 hours.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(3)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 3 ? "-" : "+"}
                                  </span>
                                  Can I get the FundedNext Account if I reach
                                  the 10% profit target before 2 days?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 3 ? styles.open : ""
                                  }`}
                                >
                                  No, traders must trade at least 2 days in the
                                  Stellar 1-Step Challenge, even if they hit 10%
                                  profit early. After that, they qualify for a
                                  FundedNext Account.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(4)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 4 ? "-" : "+"}
                                  </span>
                                  What is the Profit Target of the Stellar
                                  1-Step Challenge?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 4 ? styles.open : ""
                                  }`}
                                >
                                  The Stellar 1-Step Challenge has a 10% profit
                                  target with no time limit, while the
                                  FundedNext Phase has no profit target.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(5)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 5 ? "-" : "+"}
                                  </span>
                                  Is there a Minimum Trading Day or Time Limit
                                  to complete the Stellar 1-Step Challenge?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 5 ? styles.open : ""
                                  }`}
                                >
                                  The Stellar 1-Step Challenge has no time
                                  limit, but traders must complete 2 trading
                                  days to pass. The FundedNext Phase has no
                                  minimum trading day requirement.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(6)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 6 ? "-" : "+"}
                                  </span>
                                  What is the Trading Cycle count in my Stellar
                                  1-Step FundedNext Account?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 6 ? styles.open : ""
                                  }`}
                                >
                                  In the Stellar 1-Step FundedNext Account, the
                                  first payout occurs after 5 trading days are
                                  complete. If enough profit is made, a
                                  withdrawal request can be submitted in that
                                  cycle.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(7)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 7 ? "-" : "+"}
                                  </span>
                                  When do I get the Reward Bonus in the Stellar
                                  1-Step Model?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 7 ? styles.open : ""
                                  }`}
                                >
                                  After getting a FundedNext Account, traders
                                  can request the Reward Bonus with their first
                                  withdrawal. It reimburses the challenge cost
                                  or, if reset, matches the reset fee instead.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab
                          eventKey="stellar2"
                          title="Stellar 2-Step"
                          className={styles.tabContent}
                        >
                          <div className="container mt-4">
                            <div className={styles.accordion}>
                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(0)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 0 ? "-" : "+"}
                                  </span>
                                  What rules do I need to follow in the Stellar
                                  2-Step Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 0 ? styles.open : ""
                                  }`}
                                >
                                  Max. daily loss 5%, overall loss 10%, min. 5
                                  trades on 5 days, copy trading within own
                                  accounts, unique IP, VPN/VPS recommended, EAs
                                  allowed, no unfair practices.
                                  <br />
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(1)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 1 ? "-" : "+"}
                                  </span>
                                  What will be my Profit Share from the Stellar
                                  2-Step Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 1 ? styles.open : ""
                                  }`}
                                >
                                  In Stellar 2-Step, traders get a 15% profit
                                  share from the Challenge Phase after reaching
                                  5% growth in their FundedNext Account. The
                                  Profit Share increases to 80% in the
                                  FundedNext Account with potential to scale up
                                  to 90%.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(2)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 2 ? "-" : "+"}
                                  </span>
                                  What happens after I pass the Challenge Phase
                                  of the Stellar 2-Step Challenge?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 2 ? styles.open : ""
                                  }`}
                                >
                                  After passing both Challenge Phases, a profit
                                  check is done. If all rules are met, complete
                                  KYC verification, and get the FundedNext
                                  Account within 24-48 hours.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(3)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 3 ? "-" : "+"}
                                  </span>
                                  What is the Profit Target of the Stellar
                                  2-Step Challenge?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 3 ? styles.open : ""
                                  }`}
                                >
                                  The Stellar 2-Step Challenge has a profit
                                  target of 8% in Phase 1 and 5% in Phase 2,
                                  with no time limit. The FundedNext Account has
                                  no profit target.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(4)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 4 ? "-" : "+"}
                                  </span>
                                  Can I get the FundedNext account if I reach
                                  account growth in 5 days?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 4 ? styles.open : ""
                                  }`}
                                >
                                  Yes, but traders must complete 5 trading days
                                  in each phase, even if they reach the profit
                                  target early. After 5 days in Phase 2, they
                                  qualify for a FundedNext Account. <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(5)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 5 ? "-" : "+"}
                                  </span>
                                  Can I Reset my Stellar 2-Step Phase 2 account?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 5 ? styles.open : ""
                                  }`}
                                >
                                  Yes, you can reset your Stellar 2-Step Phase 2
                                  Account, but it will restart from Phase 1 with
                                  a new Challenge Account.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(6)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 6 ? "-" : "+"}
                                  </span>
                                  How many days will I get to complete Phases 1
                                  & 2 of the Stellar 2-Step Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 6 ? styles.open : ""
                                  }`}
                                >
                                  There is no time limit for Phases 1 or Phase 2
                                  of the Stellar 2-Step Challenge, but traders
                                  must complete at least 5 trading days in each
                                  phase to qualify.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(7)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 7 ? "-" : "+"}
                                  </span>
                                  Is there a Minimum Trading Day and Profit
                                  Target in the FundedNext phase of Stellar
                                  2-Step Model?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 7 ? styles.open : ""
                                  }`}
                                >
                                  There is no minimum trading day requirement in
                                  the Stellar 2-Step FundedNext Account.
                                  However, Phases 1 & 2 require 5 trading days
                                  to qualify.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(8)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 8 ? "-" : "+"}
                                  </span>
                                  When do I get the Reward Bonus in the Stellar
                                  2-Step Model?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 8 ? styles.open : ""
                                  }`}
                                >
                                  In Stellar 2-Step, traders can request the
                                  Reward Bonus with their first withdrawal in
                                  the FundedNext Account. It reimburses the
                                  challenge cost or matches the reset fee if
                                  reset.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab
                          eventKey="stellarLite"
                          title="Stellar Lite"
                          className={styles.tabContent}
                        >
                          <div className="container mt-4">
                            <div className={styles.accordion}>
                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(0)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 0 ? "-" : "+"}
                                  </span>
                                  What is the Profit Target of the Stellar Lite
                                  Challenge?{" "}
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 0 ? styles.open : ""
                                  }`}
                                >
                                  8% for Phase 1, 4% for Phase 2 in the Stellar
                                  Lite Challenge Phase. No profit target for the
                                  FundedNext Account. No time limits for any
                                  phase.
                                  <br />
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(1)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 1 ? "-" : "+"}
                                  </span>
                                  What rules do I need to follow in the Stellar
                                  Lite Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 1 ? styles.open : ""
                                  }`}
                                >
                                  Stellar Lite Rules: Max. daily loss: 4%,
                                  overall loss: 8%, min. 5 trading days, copy
                                  trading within own accounts, unique IP,
                                  VPN/VPS recommended, EAs allowed, no unfair
                                  practices.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(2)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 2 ? "-" : "+"}
                                  </span>
                                  What will be my Profit Share from the Stellar
                                  Lite Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 2 ? styles.open : ""
                                  }`}
                                >
                                  The Stellar Lite Plan has no Profit Share in
                                  the Challenge Phase. After reaching the
                                  FundedNext Account, traders get 80% Profit
                                  Share, with the potential to scale up to 90%.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(3)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 3 ? "-" : "+"}
                                  </span>
                                  How many days will I get to complete Phases 1
                                  & 2 of the Stellar Lite Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 3 ? styles.open : ""
                                  }`}
                                >
                                  There is no time limit for completing Phase 1
                                  or Phase 2 of the Stellar Lite Challenge.
                                  Traders can take as much time as needed to
                                  meet the requirements.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(4)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 4 ? "-" : "+"}
                                  </span>
                                  Can I receive the FundedNext Account if I
                                  achieve the Profit Target in less than 5 days?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 4 ? styles.open : ""
                                  }`}
                                >
                                  No, traders must complete a minimum of 5
                                  trading days in each Challenge Phase, even if
                                  they reach the profit target earlier.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(5)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 5 ? "-" : "+"}
                                  </span>
                                  What happens after I pass each Challenge Phase
                                  of the Stellar Lite Challenge?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 5 ? styles.open : ""
                                  }`}
                                >
                                  After Phase 1, click "Next Phase{">>"}" or get
                                  auto-upgraded the next day. After Phase 2,
                                  pass a profit check, complete KYC, and get the
                                  FundedNext Account in 24-48 hours.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>

                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(6)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 6 ? "-" : "+"}
                                  </span>
                                  Is there a Minimum Trading Day requirement and
                                  Profit Target in the FundedNext Phase of the
                                  Stellar Lite Model?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 6 ? styles.open : ""
                                  }`}
                                >
                                  No, there is no minimum trading day
                                  requirement or profit target in the FundedNext
                                  Phase of the Stellar Lite Challenge. However,
                                  a specific trading cycle applies.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(7)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 7 ? "-" : "+"}
                                  </span>
                                  Can I Reset my Stellar Lite Phase 2 Account?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 7 ? styles.open : ""
                                  }`}
                                >
                                  Yes, you can reset your Stellar Lite Phase 2
                                  account, but it will restart from Phase 1 with
                                  a new Challenge Account.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                              <div className={styles.accordionItem}>
                                <div
                                  className={styles.accordionHeader}
                                  onClick={() => toggleAccordion(8)}
                                >
                                  <span className={styles.icon}>
                                    {openIndex === 8 ? "-" : "+"}
                                  </span>
                                  When do I get the Reward Bonus in the Stellar
                                  Lite Model?
                                </div>
                                <div
                                  className={`${styles.accordionBody} ${
                                    openIndex === 8 ? styles.open : ""
                                  }`}
                                >
                                  For the Stellar Lite FundedNext Account, you
                                  can request the Reward Bonus with your third
                                  payout. It returns the Challenge cost or, if
                                  the Account was reset, covers the reset fee
                                  instead.
                                  <br />{" "}
                                  <a
                                    href="/faqs"
                                    target="_blank"
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
                  <Col xl={5} lg={5} sm={12} className={styles.padding}>
                    <div className={styles.stilooking}>
                      <h4>Still looking for an answer?</h4>
                      <p>Reach out and we’ll get back to you ASAP.</p>
                      <div className="mt-5">
                        <a className={`${styles.btn1} bor-r-50`} href="#">
                          Contact Us
                        </a>
                        <a className={`${styles.btn2} ms-2`} href="#">
                          More FAQs
                        </a>
                      </div>
                    </div>
                  </Col>

                  <Col md={12} lg={12}>
                    <div className={styles.trade}>
                      <h2 className="mb-2 text-white">Trade Smart & Win</h2>
                      <p className="pt-3 text-center text-sm mx-auto">
                        Join FundedNext today and experience a trading community
                        unlike any other.
                      </p>
                      <div className={styles.bb2}>
                        <a className={styles.myBtn3} href="#">
                          <img src="/images/models/discord-new.svg" alt="" />
                          Join Discord Community
                        </a>
                        <a class={styles.myBtn4} href="#">
                          <img src="/images/models/twitter_new.svg" alt="" />
                          Join X Community
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
