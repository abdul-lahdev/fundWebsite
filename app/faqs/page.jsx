"use client";
import React from "react";
import styles from "@/app/faqs/faqs.module.scss";
import { Row, Container, Col } from "react-bootstrap";
import Link from "next/link";
import DropDownSet from "@/components/dropDownSet/DropDownSet";

export default function Faqs() {
  const categories = [
    {
      title: "About FundedNext",
      articles: 13,
      icon: "/assets/img/faqImages/5.svg",
    },
    {
      title: "Trading Rules & Guidelines",
      articles: 13,
      icon: "/assets/img/faqImages/4.svg",
    },
    {
      title: "FundedNext Challenge Insight",
      articles: 62,
      icon: "/assets/img/faqImages/5.svg",
    },
    {
      title: "FundedNext Features",
      articles: 32,
      icon: "/assets/img/faqImages/5.svg",
    },
    {
      title: "FundedNext Dashboard FAQ",
      articles: 16,
      icon: "/assets/img/faqImages/5.svg",
    },
    { title: "General FAQ", articles: 61, icon: "/assets/img/faqImages/5.svg" },
    {
      title: "Affiliate & Payment Partner FAQ",
      articles: 20,
      icon: "/assets/img/faqImages/5.svg",
    },
    {
      title: "FundedNext Infinity Points",
      articles: 5,
      icon: "/assets/img/faqImages/3.svg",
    },
    {
      title: "Video Library",
      articles: 26,
      icon: "/assets/img/faqImages/2.svg",
    },
    {
      title: "Refer & Earn",
      articles: 25,
      icon: "/assets/img/faqImages/1.svg",
    },
    {
      title: "Trading Basics",
      articles: 7,
      icon: "/assets/img/faqImages/5.svg",
    },
  ];
  const articles = [
    "How often will I get my Payout?",
    "What are the Restricted/Prohibited Trading Strategies?",
    "Is News Trading allowed at FundedNext?",
    "What will be my Profit Share from the Stellar Lite Challenge?",
    "How can I Withdraw my profits?",
  ];

  const rightArticles = [
    "What Is The Copy Trading Rule at FundedNext?",
    "How can I calculate the Daily Loss Limit?",
    "How can I complete the KYC verification process?",
    "Does FundedNext offer a Scale-Up plan?",
    "FundedNext Free Trial Rules",
  ];

  const options = [
    { value: "English", label: "English" },
    { value: "German", label: "German" },
    { value: "Russian", label: "Russian" },
  ];

  return (
    <>
      <section className={styles.Faqsheader}>
        <Container>
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col xxl={12} className="mt-4">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <img
                    src="/assets/img/faqImages/faqLogo.png"
                    style={{ maxWidth: "16rem" }}
                    alt=""
                  />
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
                        class="shrink-0"
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
                    <DropDownSet dropOption={options} />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} lg={12} xl={12}>
              <h1 className="text-white">
                Explore FundedNext FAQ for all your queries
              </h1>
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
                    class="fill-inherit"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.27485 8.7001C3.27485 5.42781 5.92757 2.7751 9.19985 2.7751C12.4721 2.7751 15.1249 5.42781 15.1249 8.7001C15.1249 11.9724 12.4721 14.6251 9.19985 14.6251C5.92757 14.6251 3.27485 11.9724 3.27485 8.7001ZM9.19985 0.225098C4.51924 0.225098 0.724854 4.01948 0.724854 8.7001C0.724854 13.3807 4.51924 17.1751 9.19985 17.1751C11.0802 17.1751 12.8176 16.5627 14.2234 15.5265L19.0981 20.4013C19.5961 20.8992 20.4033 20.8992 20.9013 20.4013C21.3992 19.9033 21.3992 19.0961 20.9013 18.5981L16.0264 13.7233C17.0625 12.3176 17.6749 10.5804 17.6749 8.7001C17.6749 4.01948 13.8805 0.225098 9.19985 0.225098Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.sectionTwo}>
        <Container className={styles.gridbox}>
          <Row>
            <Col md={12}>
              <header className={styles.header}>Most Viewed Articles</header>
            </Col>
          </Row>
          <Row className={styles.articlesRow}>
            <Col md={6}>
              <ul className={styles.articleList}>
                {articles.map((article, index) => (
                  <li key={index} className={index}>
                    <a href="#">
                      {article} <span>›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={6}>
              <ul className={styles.articleList}>
                {rightArticles.map((article, index) => (
                  <li key={index}>
                    <a href="#">
                      {article} <span>›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.sectionThree}>
        <Container>
          <Row className={styles.grid}>
            {categories.map((category, index) => (
              <Col
                md={4}
                lg={6}
                xl={6}
                key={index}
                className={`${styles.card} ${
                  category.active ? styles.active : ""
                }`}
              >
                <div className={styles.icon}>
                  <img src={category.icon} alt={category.title} />
                </div>
                <div className={styles.text}>
                  <h4>{category.title}</h4>
                  <p>{category.articles} articles</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section
        style={{ backgroundColor: "white" }}
        className={styles.sectionFour}
      >
        <Container>
          <Row className="d-flex justify-content-center align-item-center">
            <Col md={12} lg={12} xl={12} sm={12} className="text-center">
              <header className={styles.header}>
                Changing Lives Through Trading <br /> Excellence
              </header>
              <div className={styles.discoverbtn}>
                <button>Discover FundedNext!</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className={styles.footer}>
        <Container>
          <Row className="d-flex justify-content-center align-item-center">
            <Col md={12} lg={12} xl={12} sm={12} className="text-center">
              <img
                src="/assets/img/faqImages/footerlogo.png"
                alt="footerlogo"
              />
              <div className={styles.footertext}>support@fundednext.com</div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
