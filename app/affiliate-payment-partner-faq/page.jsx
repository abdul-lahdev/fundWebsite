"use client";
import React from "react";
// import styles from "@/styles/partnerfaq.module.scss"
import styles from "@/public/assets/css/partnerfaq.module.scss";
import { Row, Container, Col } from "react-bootstrap";
import DropDownSet from "@/components/dropDownSet/DropDownSet";
import Link from "next/link";

export default function Index() {
  const options = [
    { value: "English", label: "English" },
    { value: "German", label: "German" },
    { value: "Russian", label: "Russian" },
  ];
  return (
    <>
      <style>
        {`
body{
    background-color: #fff !important;
}

   

`}
      </style>

      <div>
        <main>
          <section className={`pt-5 ${styles.PartnerFaqsheader}`}>
            <Container>
              <Row className="d-flex justify-content-center align-items-center text-center">
                <Col md={8} lg={12} xl={12}>
                  {/* <h1 className="text-white">Explore FundedNext FAQ for all your queries</h1> */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <Link href="/">
                        <img
                          src="/assets/img/faqImages/faqLogo.png"
                          style={{ maxWidth: "16rem" }}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <Link href="/" style={{ color: "white" }}>
                        Go to Website
                      </Link>
                      <div
                        className={`d-flex align-items-center ${styles.faqDropDownSetting}`}
                      >
                        <div>
                          <svg
                            id="locale-picker-globe"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                            aria-hidden="true"
                          >
                            <path
                              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M8 15C9.39949 15 10.534 11.866 10.534 8C10.534 4.13401 9.39949 1 8 1C6.60051 1 5.466 4.13401 5.466 8C5.466 11.866 6.60051 15 8 15Z"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M1.448 5.75989H14.524"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M1.448 10.2402H14.524"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="dropDownSetting">
                          <DropDownSet dropOption={options} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.searchContainer}>
                    <input
                      type="text"
                      className={styles.searchbar}
                      placeholder="Search for articles..."
                      value=""
                    ></input>
                    <div className={styles.searchicon}>
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-inherit"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.27485 8.7001C3.27485 5.42781 5.92757 2.7751 9.19985 2.7751C12.4721 2.7751 15.1249 5.42781 15.1249 8.7001C15.1249 11.9724 12.4721 14.6251 9.19985 14.6251C5.92757 14.6251 3.27485 11.9724 3.27485 8.7001ZM9.19985 0.225098C4.51924 0.225098 0.724854 4.01948 0.724854 8.7001C0.724854 13.3807 4.51924 17.1751 9.19985 17.1751C11.0802 17.1751 12.8176 16.5627 14.2234 15.5265L19.0981 20.4013C19.5961 20.8992 20.4033 20.8992 20.9013 20.4013C21.3992 19.9033 21.3992 19.0961 20.9013 18.5981L16.0264 13.7233C17.0625 12.3176 17.6749 10.5804 17.6749 8.7001C17.6749 4.01948 13.8805 0.225098 9.19985 0.225098Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <div className={styles.PartnerFaqTwo}>
            <Container className={styles.innercontainer}>
              <Row className="py-4 mx-2 d-flex justify-content-center align-items-center">
                <Col>
                  <div className={styles.breadcrumb}>
                    <a href="/en/">All Collections</a>
                    <div className={styles.separator} aria-hidden="true">
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.648862 0.898862C0.316916 1.23081 0.316916 1.769 0.648862 2.10094L3.54782 4.9999L0.648862 7.89886C0.316916 8.23081 0.316917 8.769 0.648862 9.10094C0.980808 9.43289 1.519 9.43289 1.85094 9.10094L5.35094 5.60094C5.68289 5.269 5.68289 4.73081 5.35094 4.39886L1.85094 
            0.898862C1.519 0.566916 0.980807 0.566916 0.648862 0.898862Z"
                        ></path>
                      </svg>
                    </div>
                    <div className={styles.breadcrumbItem}>
                      Affiliate &amp; Payment Partner FAQ
                    </div>
                  </div>
                </Col>

                <Col md={12}>
                  <div className={styles.collectionCard}>
                    <img src="/assets/img/partners/faqicon.svg" alt="" />
                  </div>
                  <div>
                    <header className={`my-3 ${styles.affiliateHeadingSet}`}>
                      Affiliate &amp; Payment Partner FAQ
                    </header>
                    <span className="line-clamp-1 flex text-base">
                      20 articles
                    </span>
                  </div>
                  <div></div>
                </Col>
                <Col className="py-4 mx-2" md={12} lg={12} xl={12}>
                  <div className={styles.gridBox}>
                    <Row className={styles.articlesRow}>
                      <Col md={12}>
                        <a className={styles.header} href="">
                          General Queries
                        </a>
                        <hr className="mt-3 mx-2 mb-2 border-t border-solid" />
                        <ul className={styles.articleList}>
                          <li className="">
                            <a href="#">
                              What is the fundedNext Affiliate Program?{" "}
                              <span>›</span>
                            </a>
                          </li>
                          <li className="">
                            <a href="#">
                              Who can become a FundedNext affiliate?{" "}
                              <span>›</span>
                            </a>
                          </li>
                          <li className="">
                            <a href="#">
                              What is the fundedNext Affiliate Program?{" "}
                              <span>›</span>
                            </a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.gridBox}>
                    <Row className={styles.articlesRow}>
                      <Col md={12}>
                        <a className={styles.header} href="">
                          Affiliate Section
                        </a>
                        <hr className="mt-3 mx-2 mb-2 border-t border-solid" />
                        <ul className={styles.articleList}>
                          <li className="">
                            <a href="#">
                              Earnings and Commissions <span>›</span>
                            </a>
                            <span
                              className={`line-clamp-1 flex text-base text-body-secondary-color mt-2 ${styles.at}`}
                            >
                              7 articles
                            </span>
                          </li>
                          <li className="">
                            <a href="#">
                              Tiers and Benefits <span>›</span>
                            </a>
                            <span
                              className={`line-clamp-1 flex text-base text-body-secondary-color mt-2 ${styles.at}`}
                            >
                              4 articles
                            </span>
                          </li>
                          <li className="">
                            <a href="#">
                              Payment and Withdrawal <span>›</span>
                            </a>
                            <span
                              className={`line-clamp-1 flex text-base text-body-secondary-color mt-2 ${styles.at}`}
                            >
                              4 articles
                            </span>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.gridBox}>
                    <Row className={styles.articlesRow}>
                      <Col md={12}>
                        <a className={styles.header} href="">
                          Payment Partner Queries
                        </a>
                        <hr className="mt-3 mx-2 mb-2 border-t border-solid" />
                        <ul className={styles.articleList}>
                          <li className="">
                            <a href="#">
                              What is the Payment Partner Program on FundedNext?
                              <span>›</span>
                            </a>
                          </li>
                          <li className="">
                            <a href="#">
                              How can I contact FundedNext for Payment Partner
                              program inquiries? <span>›</span>
                            </a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    </>
  );
}
