import React from "react";
// import styles from "@/styles/guide.module.scss";
import styles from "@/public/assets/css/guide.module.scss";
import Layout from "@/components/layout/Layout";

import { Row, Col, Container } from "react-bootstrap";
const chapters = [
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 1,
    title: "How it Works: What is Prop Trading?",
    content:
      "Summary: Prop trading allows traders to use simulated accounts provided by firms to minimize personal financial risk. Profits are shared with the trader based on...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 2,
    title: "Choosing the Best Prop Firm",
    content:
      "To choose the best prop firm, look for a strong reputation, favorable profit splits, low spreads, flexible trading style options, and transparent rules. Ensure they...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 3,
    title: "Choosing a Challenge Account: Beginners vs Experienced Traders",
    content:
      "In prop trading, choosing the right Forex account type is crucial for newer traders and experienced traders. Finding the right account option for your skill level...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 4,
    title: "Why Choose Prop Firms Over Brokers?",
    content:
      "Prop firms offer traders simulated accounts and profit-sharing opportunities with minimal personal financial risk, unlike brokers who require personal capital...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 5,
    title: "Understanding Prop Firm Payouts and Profit Sharing",
    content:
      "Prop firms give traders the power to trade at scale, with account sizes that are larger than many traders could otherwise afford. So, how do prop firm payouts and...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 6,
    title: "Understanding Forex Charts and Trading Strategies",
    content:
      "Mastering Forex charts and strategies is essential for traders to make informed decisions. This guide explains different chart types and strategies for...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 7,
    title: "The Psychology of Forex Trading",
    content:
      "Mastering Forex trading psychology is essential for consistent success. Learn to manage emotions, recognize biases, and build mental discipline for sound trading...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 8,
    title: "Popular Asset Classes",
    content:
      "Asset classes, like commodities, indices, and Forex pairs, represent different types of investments with unique characteristics. Each asset class...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 9,
    title: "Forex Terms: Trading Glossary and FAQs",
    content:
      "Getting into Forex trading can feel very exciting, but it can seem complex or even confusing to new traders. This market has a language of its own, and the learning curve...",
  },
  {
    image: "/assets/img/blog/blogg.webp",
    chapter: 10,
    title: "Choosing a Prop Firm: Why FundedNext?",
    content:
      "Deciding whether you want to be a prop trader is a big step. Our guide is designed to help you make that choice from a more informed perspective...",
  },
];

export default function Index() {
  return (
    <>
      <style>
        {`
body{
    background-color: #fff !important;
}

footer{
    background-color: rgba(16, 10, 40, 1) !important;
}
    .settingHeaderColor{
     background-color: #000 !important;
    }

   

`}
      </style>
      <Layout headerStyle={1} footerStyle={1}>
        <div style={{ paddingTop: "3rem" }}>
          <main>
            <section className={` px-4 py-5 ${styles.guidesection1}`}>
              <Container className={styles.container}>
                <Row className="d-flex">
                  <Col md={12} lg={12} xl={12}>
                    <div className={styles.texts}>
                      <h2 className="text-center">
                        <span className={styles.span}>Funded</span>Next
                      </h2>
                      <h1 className="text-center">
                        Your Complete Guide to Prop Trading
                      </h1>
                      <p class="my-6 text-sm sm:text-base">
                        Proprietary trading is an exciting alternative to
                        traditional trading! This type of trading helps traders
                        reduce financial risk and, when partnered with a
                        dependable prop firm, still offers the chance to earn
                        major rewards. <br />
                        <br />
                        Of course, trading always includes risk, no matter what
                        type of trading you might engage in. If you’re trying to
                        choose whether you want to trade, and how you want to do
                        it, the best thing you can do is learn how it works!
                        <br />
                        <br /> Learning about how prop trading works means you
                        can make more informed choices. From finding the right
                        Forex prop firm for you to learning about prop firm
                        trading strategies, there’s a lot to consider
                        <br />
                        <br /> That’s why we’ve built this Complete Guide to
                        Prop Trading. Each chapter covers a key topic in the
                        world of prop trading, offering useful info for aspiring
                        traders, newer prop traders, and even reminders for
                        experienced traders, too.
                        <br />
                        <br /> So, what can you expect in our Complete Guide to
                        Prop Trading?
                      </p>
                      <h2 className={`${styles.h2} text-center`}>
                        What You’ll Find in Our Complete Guide to Prop Trading
                      </h2>
                    </div>
                  </Col>
                  {chapters.map((chapter) => (
                    <Col key={chapter.chapter} md={6} lg={6} xl={6}>
                      <div className="px-2 py-4">
                        <img
                          src={chapter.image}
                          alt={`blog-${chapter.chapter}`}
                        />
                        <p className="pb-2 pt-4 fs-6 fw-medium fst-italic">
                          Chapter {chapter.chapter}
                        </p>
                        <h4>{chapter.title}</h4>
                        <p className="pb-2 fw-medium lh-sm md-pt-1">
                          {chapter.content}
                        </p>
                      </div>
                    </Col>
                  ))}
                  <Col md={12} lg={12} xl={12}>
                    <div className="">
                      <div>
                        <p>
                          FundedNext is here to give traders the opportunity to
                          carry out their trading strategies and realize success
                          through dedication, consistency, and good
                          decision-making. Interested in our challenge account
                          options? <br />{" "}
                          <a href="">
                            Find the perfect FundedNext challenge for you!
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            {/* <div className={styles.footerCta}>
   <Row>
        <Col md={3}> <img src="/images/blogs/discord_logo.webp" alt="logo" /></Col>
        <Col md={6}>
        <div>
            <h3>Join the Global Community for the Traders, by the Traders</h3>
            <p>Get all the exclusive trading resources, economic news updates & fundamentals, listen to best trading podcasts and share what you are up to outside of trading. You can hang around with other like-minded traders and truly build a connection. Come and start a conversation!</p>

        </div>
        </Col>
        <Col md={3}> <img src="/images/blogs/facebook_logo.webp" alt="" /></Col>
    </Row>
   </div> */}
            <div className={styles.bgcta}>
              <img src="/assets/img/blog/ctaScreen.png" alt="" />
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
