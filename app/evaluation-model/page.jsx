"use client";
import React from "react";
import { useState } from "react";
import { Tab, Tabs, Accordion, Row, Col, Container } from "react-bootstrap";
import styles from "@/public/assets/css/models.module.scss";
import BadgeButton from "./component/BadgeBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PricingTable from "@/components/homepages/home1/PricingTable";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ModelVideo from "@/components/homepages/home1/ModalVideo";

export default function Evaluation() {
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
        <main className="">
          <div>
            <section className={styles.heroSection}>
              <div>
                <Container className={styles.containerHero}>
                  <Row className="setPadding d-flex justify-content-center align-items-center">
                    <Col className="text-center text-white">
                      <div class={styles.chlengeFlx}>
                        <a class={styles.myBtn} href="#">
                          {"<"} Back
                        </a>
                        <a class={styles.myBtn} href="#">
                          <img
                            src="/assets/img/models/evaluation-icon.svg"
                            alt=""
                          />
                          <strong>Evaluation Challenge -</strong> Only package
                          that offers free retakes
                        </a>
                      </div>

                      <h1>
                        Achieve Trading Success with the <br /> Evaluation
                        Challenge
                      </h1>
                      <p>
                        Maximize your profit potential with flexible trading
                        conditions through our Evaluation Model. <br /> Start
                        trading today and take advantage of our market-leading
                        profit splits.
                      </p>
                      <div className={styles.heroCtaBtn}>
                        <div className={styles.primary}>
                          <button
                            style={{
                              color: "#fff",
                              borderColor: "transparent",
                            }}
                          >
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
                        <h2>Take Your Leap with the Evaluation Challenge</h2>
                        <p>
                          Prove your skills, enjoy the flexibility of unlimited
                          retakes, and start earning profits during the
                          assessment. It’s your chance to shine.
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
                            backgroundImage: `url(/assets/img/models/evaluation-thumbnail.webp)`,
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
                          backgroundImage: `url(/assets/img/models/evslider3.png)`,
                        }}
                      >
                        <h2>Trade Big with the Evaluation Challenge</h2>
                        <p>
                          Prove your skills and trade with confidence. Enjoy
                          unlimited free retakes in the Evaluation Challenge and
                          start earning profits from the Challenge Phase.
                        </p>
                        <button className={styles.button}>Sign Up</button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Container>
            </section>

            <section className={styles.benefitSection}>
              <Container>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col xl={6} lg={6} sm={12}>
                    <div className={styles.benefits}>
                      <BadgeButton title="Evaluation Challenge Benefits" />
                      <h1 className="text-white my-3">
                        Perfect Your Path
                        <br /> to Trading Success
                      </h1>
                      <p className={styles.greyTextColor}>
                        Explore the Evaluation Challenge & maximize your trading
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
                      <div className={styles.itemFlex}>
                        <div
                          className={`${styles.stellarPerfectItem} ${styles.marginBottom}`}
                        >
                          <img
                            src="/assets/img/models/up.svg"
                            alt="Profit Share"
                          />
                          <h4 className={styles.stellarPerfectH4}>
                            Trade with up to $200K
                          </h4>
                          <p>
                            Achieve rading mastery with FundedNext. Trade up to
                            $200K with your Evaluation Model trading account.{" "}
                          </p>
                        </div>
                        <div className={styles.stellarPerfectItem}>
                          <img
                            src="/assets/img/models/dollar.svg"
                            alt="Weekend Holding"
                          />
                          <h4 className={styles.stellarPerfectH4}>
                            15% Profit Share from Challenge Phase
                          </h4>
                          <p>
                            The only trading prop firm account 15% profit share
                            from the Challenge Phase profits.{" "}
                          </p>
                        </div>
                      </div>

                      <div className={styles.itemFlex}>
                        <div
                          className={`${styles.stellarPerfectItem} ${styles.marginBottom}`}
                        >
                          <img
                            src="/assets/img/models/calendar.svg"
                            alt="Profit Share"
                          />
                          <h4 className={styles.stellarPerfectH4}>
                            14 Day Extension
                          </h4>
                          <p>
                            If you're in profit but haven’t reached your Phase 1
                            target, no need to worry! You can request an
                            additional 14 days to complete Phase 1, as long as
                            you’re following the rules.
                          </p>
                        </div>
                        <div className={styles.stellarPerfectItem}>
                          <img
                            src="/assets/img/models/lock.svg"
                            alt="Weekend Holding"
                          />
                          <h4 className={styles.stellarPerfectH4}>
                            Quick Account Access{" "}
                          </h4>
                          <p>
                            Get your FundedNext Accounts with just 5 days on the
                            Evaluation Challenge Account.
                          </p>
                        </div>
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
                            Trade with FundedNext and avail upto 95% of the
                            profits you make with your Evaluation trading
                            accounts with an extra add-on.
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
                          src="/assets/img/models/calendar.svg"
                          alt="Quick Access"
                        />
                        <h4 className={styles.stellarPerfectH4}>
                          Unlimited Free Retakes{" "}
                        </h4>
                        <p>
                          Profitable but haven’t hit the profit target as the
                          trading cycle ends? Don’t worry, we’ve got your back!
                          Meet the eligibility criteria, and enjoy unlimited
                          free retakes for Phase 1.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="py-5 stellarPricingContainer">
              <Container>
                <Row>
                  <Col xxl={12}>
                    <div className="stellarPricingTable">
                      <h1 className="choosePlanHeading">
                        Choose the best Evaluation Plan
                      </h1>
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
                                    <span className="getPlanFee">Fee: $59</span>
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
                                <p className="tableParaTexxt p-0 m-0">$117</p>
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
                                <p className="tableParaTexxt p-0 m-0">$975</p>
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
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
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
                  <Col md={12} lg={12}>
                    <div className={styles.trade}>
                      <h2 className="mb-2 text-white">Trade Smart & Win</h2>
                      <p className="pt-3 text-center text-sm mx-auto">
                        Join FundedNext today and experience a trading community
                        unlike any other.
                      </p>
                      <div className={styles.bb2}>
                        <a className={styles.myBtn3} href="#">
                          <img
                            src="/assets/img/models/discord-new.svg"
                            alt=""
                          />
                          Join Discord Community
                        </a>
                        <a class={styles.myBtn4} href="#">
                          <img
                            src="/assets/img/models/twitter_new.svg"
                            alt=""
                          />
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
