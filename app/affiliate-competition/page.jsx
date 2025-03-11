"use client";
import React, { useState } from "react";
import styles from "@/public/assets/css/partnersAffiliate.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "@/components/layout/Layout";

const rewards = [
  { rank: 1, account: "100K Stellar 2 Step Stellar Account", amount: "$5000" },
  { rank: 2, account: "50K Stellar 2 Step Stellar Account", amount: "$3000" },
  { rank: 3, account: "50K Stellar 2 Step Stellar Account", amount: "$2000" },
  { rank: 4, account: "50K Stellar 2 Step Stellar Account", amount: "$1500" },
  { rank: 5, account: "25K Stellar 2 Step Stellar Account", amount: "$1000" },
  {
    rank: 6,
    account: "15K Stellar 2 Step Stellar Account + 5 x 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 7,
    account: "15K Stellar 2 Step Stellar Account + 5 x 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 8,
    account: "15K Stellar 2 Step Stellar Account + 4 x 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 9,
    account: "15K Stellar 2 Step Stellar Account + 4 x 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 10,
    account: "15K Stellar 2 Step Stellar Account + 3 x 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 11,
    account: "15K Stellar 2 Step Stellar Account + 3 x 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 12,
    account: "15K Stellar 2 Step Stellar Account + 2 x 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 13,
    account: "15K Stellar 2 Step Stellar Account + 2 x 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 14,
    account: "15K Stellar 2 Step Stellar Account + 6K Stellar Account",
    amount: "N/A",
  },
  {
    rank: 15,
    account: "15K Stellar 2 Step Stellar Account + 6K Stellar Account",
    amount: "N/A",
  },
];
const top15 = [
  { rank: 1, account: "LA I***Ć", amount: 6331 },
  { rank: 2, account: "D****N FT**", amount: 5997 },
  { rank: 3, account: "I**L O****A", amount: 5521 },
  { rank: 4, account: "N***E RD", amount: 5490 },
  { rank: 5, account: "V****R V*****A", amount: 5129 },
  { rank: 6, account: "H****E V***O", amount: 4887 },
  { rank: 7, account: "H*****I T****A", amount: 4819 },
  { rank: 8, account: "J***-B***E DS", amount: 4788 },
  { rank: 9, account: "A****O R**Z", amount: 4365 },
  { rank: 10, account: "M****EL F***ER", amount: 4114 },
  { rank: 11, account: "C****A O**R", amount: 4027 },
  { rank: 12, account: "D**A D* V*RA", amount: 3992 },
  { rank: 13, account: "T*O N**U", amount: 3691 },
  { rank: 14, account: "OR B*N Y***F", amount: 2561 },
  { rank: 15, account: "B****O T***Z", amount: 2456 },
];
export default function Index() {
  const [active, setActive] = useState("rewards");
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className={styles.main}>
          <main>
            <div className={styles.partnerSection1}>
              <section>
                <Container>
                  <Row>
                    <Col md={6} lg={6} xl={6} sm={12} xs={12}>
                      <div className={styles.affiliateSection}>
                        <div className={styles.title}>
                          FundedNext Affiliate Contest
                        </div>
                        <h1 className={styles.heading}>Affluence - Season 2</h1>
                        <p className="text-white">
                          Join the biggest Affiliate contest, invite elite
                          traders to FundedNext, and win big. Earn rewards for
                          each new successful referral and — win up to $5,000 as
                          our leading referrer. Kick-off now and claim your
                          throne as the Galactic Emperor of the Propverse!
                        </p>
                        <div className={styles.buttonContainer}>
                          <button type="button" className={styles.button}>
                            Enter your submission
                          </button>
                          <a href="/partners" target="_blank" rel="noreferrer">
                            <div className={styles.outlineButton}>
                              <div className={styles.inner}>
                                Not an Affiliate Yet?
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} sm={12} xs={12}></Col>
                  </Row>
                </Container>
              </section>
            </div>
            <div className={styles.partnerSection2}>
              <Container>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={12} lg={12} xl={12}>
                    <div className={styles.text}>
                      <h2 className="text-center">
                        Rewards for Affluence Season 2
                      </h2>
                      <p className="text-center text-white">
                        On this journey of “Affluence” we are providing the
                        winners with special <br /> prizes. Take a moment to
                        look at what you got to win.
                      </p>
                    </div>
                    <div className={styles.centerWrapper}>
                      <div className={styles.toggleContainer}>
                        <button
                          className={`${styles.toggleButton} ${
                            active === "rewards" ? styles.active : ""
                          }`}
                          onClick={() => setActive("rewards")}
                        >
                          Rewards
                        </button>
                        <button
                          className={`${styles.toggleButton} ${
                            active === "top15" ? styles.active : ""
                          }`}
                          onClick={() => setActive("top15")}
                        >
                          Top 15
                        </button>
                      </div>
                      {active === "rewards" && (
                        <div className={styles.rewardsContainer}>
                          <div className="mt-5 w-100 overflow-auto">
                            <div className="overflow-hidden rounded text-center text-white w-100 w-sm-200 fs-6 fs-sm-5">
                              <div
                                className="container py-3 py-sm-4"
                                style={{
                                  backgroundColor: "#635BFF",
                                  fontWeight: "600",
                                }}
                              >
                                <div className="row">
                                  <div className="col-4 col-sm-3">
                                    Competition Rank{" "}
                                  </div>
                                  <div className="col-4 col-sm-6">
                                    Free Account
                                  </div>
                                  <div className="col-4 col-sm-3">
                                    Cash Prize
                                  </div>
                                </div>
                              </div>

                              <div>
                                {rewards.map((reward, index) => (
                                  <div
                                    key={index}
                                    className={`row border-4 py-4 ${styles.rewardbody}`}
                                  >
                                    <div className="col-4">{reward.rank}</div>
                                    <div className="col-4">
                                      {reward.account}
                                    </div>
                                    <div className="col-4">{reward.amount}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === "top15" && (
                        <div className={styles.rewardsContainer}>
                          <div className="mt-5 w-100 overflow-auto">
                            <div className="overflow-hidden rounded text-center text-white w-100 w-sm-200 fs-6 fs-sm-5">
                              <div
                                className="container py-3 py-sm-4"
                                style={{
                                  backgroundColor: "#635BFF",
                                  fontWeight: "600",
                                }}
                              >
                                <div className="row">
                                  <div className="col-4 col-sm-3">Rank </div>
                                  <div className="col-4 col-sm-6">
                                    Affiliate Name
                                  </div>
                                  <div className="col-4 col-sm-3">Points</div>
                                </div>
                              </div>

                              <div>
                                {top15.map((top15, index) => (
                                  <div
                                    key={index}
                                    className={`row border-4 py-4 ${styles.rewardbody}`}
                                  >
                                    <div className="col-4">{top15.rank}</div>
                                    <div className="col-4">{top15.account}</div>
                                    <div className="col-4">{top15.amount}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col md={12} lg={12} xl={12}>
                    <Container className={styles.containernoti}>
                      <div className={styles.notificationWrapper}>
                        <div className={styles.notificationContent}>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="24"
                              fill="none"
                            >
                              <path
                                fill="url(#a)"
                                d="M10.547 24a3.52 3.52 0 0 0 3.221-2.11H7.326a3.52 3.52 0 0 0 3.22 2.11Z"
                              ></path>
                              <path
                                fill="url(#b)"
                                d="M17.813 11.618v-1.54c0-3.273-2.176-6.047-5.157-6.953V2.11C12.656.946 11.71 0 10.546 0 9.385 0 8.439.946 8.439 2.11v1.015c-2.981.906-5.157 3.68-5.157 6.953v1.54a11.04 11.04 0 0 1-3.085 7.677.703.703 0 0 0 .507 1.19h19.688a.703.703 0 0 0 .507-1.19 11.04 11.04 0 0 1-3.085-7.677ZM11.25 2.847a7.324 7.324 0 0 0-1.406 0v-.738a.704.704 0 0 1 1.406 0v.738Z"
                              ></path>
                              <path
                                fill="url(#c)"
                                d="M19.688 10.078a.703.703 0 0 0 1.406 0c0-2.817-1.097-5.466-3.09-7.458a.703.703 0 0 0-.994.995 9.08 9.08 0 0 1 2.677 6.463Z"
                              ></path>
                              <path
                                fill="url(#d)"
                                d="M.703 10.781a.703.703 0 0 0 .703-.703c0-2.441.951-4.737 2.678-6.463a.703.703 0 1 0-.995-.995A10.478 10.478 0 0 0 0 10.078c0 .389.315.703.703.703Z"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="a"
                                  x1="7.426"
                                  x2="12.837"
                                  y1="23.526"
                                  y2="22.864"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FFAC60"></stop>
                                  <stop offset="1" stopColor="#D55DFF"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="b"
                                  x1="0.327"
                                  x2="18.279"
                                  y1="15.886"
                                  y2="15.145"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FFAC60"></stop>
                                  <stop offset="1" stopColor="#D55DFF"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="c"
                                  x1="16.871"
                                  x2="20.526"
                                  y1="8.903"
                                  y2="8.828"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FFAC60"></stop>
                                  <stop offset="1" stopColor="#D55DFF"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="d"
                                  x1="0.067"
                                  x2="3.722"
                                  y1="8.903"
                                  y2="8.828"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FFAC60"></stop>
                                  <stop offset="1" stopColor="#D55DFF"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className={styles.notificationText}>
                            Details of Season 2 will be shared soon.
                          </div>
                        </div>
                      </div>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className={styles.partnerSection3}>
              <Container>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={12} lg={12} xl={12}>
                    <div className={styles.text}>
                      <h2 className={`${styles.headingcontest} text-center`}>
                        Contest Rules{" "}
                      </h2>
                      <p className="text-center text-white mb-4">
                        Take a quick peek at the contest rules. Knowing the game
                        is your first <br /> step to securing that sweet reward!
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          All participants must be registered affiliates of
                          FundedNext.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-start rounded`}
                    >
                      <div className={`${styles.iconWrapper} mt-2`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <div>
                          Content Points are awarded based on the number of
                          contents, as follows:
                        </div>

                        <p>YouTube</p>
                        <ul>
                          <li>
                            Full-Length Video (less than 8 mins): 8 points
                          </li>
                          <li>
                            Full-Length Video (more than 8 mins): 12 points
                          </li>
                          <li>Story: 1 point</li>
                          <li>Shorts: 4 points</li>
                          <li>YouTube Community Post: 1 point</li>
                          <li>Pre-promotion Video: 3 points</li>
                          <li>Mid-promotion Video: 2 points</li>
                          <li>Post-promotion Video: 1 point</li>
                          <li>
                            YouTube Live with FundedNext Banner: 15 points
                          </li>
                        </ul>

                        <p>Instagram</p>
                        <ul>
                          <li>Reel: 6 points</li>
                          <li>Story: 1 point</li>
                          <li>Instagram Live: 5 points</li>
                        </ul>

                        <p>Twitter</p>
                        <ul>
                          <li>Thread: 7 points</li>
                          <li>Post: 4 points</li>
                          <li>Story: 1 point</li>
                          <li>Twitter Live: 3 points</li>
                        </ul>

                        <p>Telegram</p>
                        <ul>
                          <li>Post: 4 points</li>
                          <li>Story: 1 point</li>
                          <li>Telegram Live: 2 points</li>
                        </ul>

                        <p>Threads</p>
                        <ul>
                          <li>Thread: 4 points</li>
                          <li>Post: 2 points</li>
                        </ul>

                        <p>TikTok</p>
                        <ul>
                          <li>Video: 5 points</li>
                          <li>Story: 1 point</li>
                          <li>TikTok Live: 4 points</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          All participants must ensure their activities comply
                          with local laws and financial regulations.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Winners cannot request cash or any other form of
                          compensation in place of the awarded Challenge
                          accounts.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Content Points will be updated daily, while Engagement
                          points will be updated every Monday.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          The use of bots or automated tools for content
                          creation or engagement is strictly prohibited.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          All content must adhere to FundedNext's guidelines and
                          community standards.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          FundedNext's decision regarding any disputes or
                          interpretation of the rules will be final.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          All contents must have the designated affiliate link
                          of the Affiliate found in their FundedNext Affiliate
                          Dashboard. Points will not be allocated if referral
                          link is not mentioned directly or indirectly.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Points are cumulative throughout the competition
                          period.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Prizes will be awarded as per the announced prize
                          pool.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          In case of a tie, the affiliate who reached the points
                          first will be given the higher position.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          All prizes are subject to verification and compliance
                          with FundedNext's policies
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Each affiliate is permitted to operate only one
                          account. Creating or using multiple accounts by a
                          single affiliate is against the rules and will lead to
                          disqualification.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Participants must comply with all existing FundedNext
                          Affiliate Terms & Conditions during the competition.
                          Any violation may result in disqualification and
                          additional repercussions as per company policy.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          FundedNext reserves the right to disqualify any
                          affiliate found breaching competition rules.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Any tax implications of the prize are the sole
                          responsibility of the winner.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Content Points will hold 70% of the weightage, while
                          Engagement point will hold 30% of the weightage.
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          All Content must be original. Plagiarized or copied
                          content will result in disqualification.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          Engagement metrics (likes, comments, shares) should be
                          organic. Any detected attempts to artificially inflate
                          engagement will result in penalties or
                          disqualification.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${styles.contentBox} d-flex align-items-center rounded`}
                    >
                      <div className={styles.iconWrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="styles.icon"
                          height="11"
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <path
                            d="M4.96013 10.1569C4.82882 10.157 4.69877 10.1312 4.57746 10.0809C4.45615 10.0307 4.34597 9.9569 4.25325 9.86391L0.41406 6.02475C0.320356 5.93211 0.245889 5.82186 0.194941 5.70035C0.143994 5.57883 0.117571 5.44844 0.117192 5.31667C0.116813 5.18491 0.142485 5.05437 0.192733 4.93256C0.24298 4.81075 0.316812 4.70008 0.409981 4.60691C0.503151 4.51373 0.613821 4.43989 0.735626 4.38964C0.857432 4.33939 0.987971 4.31371 1.11974 4.31408C1.2515 4.31445 1.38189 4.34087 1.50341 4.39181C1.62493 4.44275 1.73518 4.51721 1.82782 4.61091L4.96013 7.74319L12.412 0.291331C12.5997 0.104492 12.8537 -0.000282342 13.1185 5.7146e-07C13.3833 0.000283485 13.6372 0.1056 13.8244 0.292839C14.0116 0.480079 14.1169 0.733946 14.1172 0.998732C14.1174 1.26352 14.0127 1.51759 13.8258 1.7052L5.66703 9.86399C5.5743 9.95697 5.46412 10.0307 5.34281 10.081C5.22149 10.1312 5.09145 10.157 4.96013 10.1569Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div className={styles.textWrapper}>
                        <p>
                          FundedNext holds the right to adjust points in case of
                          disputes or irregularities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div className={styles.partnerSection4}>
              <Container className={styles.container}>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={3}>
                    <div className={styles.img}>
                      {/* <img src="/images/partners/register.webp" alt="register" /> */}
                      <img
                        src="/assets/img/partners/register.webp"
                        alt="register"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.textStyle}>
                      Are you ready to elevate Your Affiliate Game! <br />{" "}
                      Connect, compete, conquer
                    </div>
                  </Col>
                  <Col md={3}>
                    <div>
                      <button
                        type="button"
                        className="px-4 py-3 fw-medium rounded mx-lg-auto mt-lg-3 text-sm text-sm-sm"
                        disabled
                      >
                        Register & Earn Big
                      </button>

                      <div className="mt-2 text-sm text-white">
                        *** Registration will open soon! ***
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
