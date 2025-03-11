import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Blog() {
  const searchCard = [
    {
      title: "Prop Firm vs Brokerage: What’s the Difference ...",
      text: "Summary: Prop Firm vs Brokerage for Trading Forex vs Stocks ...",
      image: "/assets/img/blog/blogSmallCard.webp",
    },
    {
      title: "Choosing a Prop Firm: Why FundedNext? ...",
      text: "Deciding whether you want to be a prop trader is ...",
      image: "/assets/img/blog/blogSmallCard.webp",
    },
    {
      title: "Forex Terms: Trading Glossary and FAQs ...",
      text: "Getting into Forex trading can feel very exciting, but it ...",
      image: "/assets/img/blog/blogSmallCard.webp",
    },
    {
      title: "Popular Asset Classes ...",
      text: "Summary: Asset classes, like commodities, indices, and Forex pairs, represent ...",
      image: "/assets/img/blog/blogSmallCard.webp",
    },
  ];

  const categories = [
    {
      text: "forex trading guide",
      link: "/",
    },
    {
      text: "important announcement",
      link: "/",
    },
    {
      text: "market analysis",
      link: "/",
    },
    {
      text: "traders' tale",
      link: "/",
    },
    {
      text: "trades update",
      link: "/",
    },
    {
      text: "your complete guide to prop trading",
      link: "/",
    },
  ];

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
        <Container className="containerSetting">
          <Row>
            <Col xxl={12}>
              <div className="blogPageContainer">
                <h1 className="blogPageHeading">
                  <span>Funded</span>Next Blog
                </h1>
                <p className="blogPageParagraph">
                  We’re releasing new updates nearly every week. Stay on top of
                  them <br /> here with all our latest company news and views.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between mt-5">
            <Col xxl={7}>
              <div className="blogLeftSide">
                <img
                  src="/assets/img/blog/blogPageHero.webp"
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div>
                <p className="mt-4 dateText">(Feb 10, 2025)</p>
                <h2 className="mt-4 blogSubHeadingTxt">
                  Choosing a Prop Firm: Why FundedNext?
                </h2>
                <p className="mt-3 blogParagraphTxt">
                  Deciding whether you want to be a prop trader is a big step.
                  Our guide is designed to help you make that choice from a more
                  informed perspective. From Chapter 1 on how prop trading works
                  to Chapter 9, our glossary of common Forex terms, it’s all
                  about giving you the info you need to […]
                </p>
              </div>
            </Col>
            <Col xxl={4}>
              <div>
                <input type="text" className="w-100 form-control" />
              </div>

              {searchCard.map((ele, index) => (
                <div className="SearchCard" key={index}>
                  <div>
                    <h1 className="searchCardHeading">{ele.title}</h1>
                    <p className="searchCardParagraph mt-2">{ele.text}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <img
                      style={{ borderRadius: "10px", height: "11.5rem" }}
                      src={`${ele.image}`}
                      alt=""
                    />
                  </div>
                </div>
              ))}

              <div className="categoriesSectionContainer">
                <h1 className="categoryMainHeading">Categories</h1>

                <div>
                  {categories.map((ele, index) => (
                    <Link
                      href={`${ele.link}`}
                      key={index}
                      className="catergoriesItemSetting d-flex align-items-center justify-content-between w-100"
                    >
                      <span
                        style={{
                          color: "#000",
                          fontSize: "18px",
                          textTransform: "capitalize",
                        }}
                      >
                        {ele.text}
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_35_112)">
                            <path
                              d="M9.79351 6.51585C9.79351 6.72397 9.71404 6.93207 9.55544 7.09075L4.5621 12.084C4.24447 12.4017 3.72947 12.4017 3.41196 12.084C3.09445 11.7665 3.09445 11.2516 3.41196 10.934L7.83034 6.51585L3.41211 2.0977C3.0946 1.78006 3.0946 1.26522 3.41211 0.947733C3.72962 0.62994 4.24462 0.62994 4.56226 0.947733L9.5556 5.94094C9.71422 6.0997 9.79351 6.3078 9.79351 6.51585Z"
                              fill="black"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_35_112">
                              <rect
                                width="11.6129"
                                height="11.6129"
                                fill="white"
                                transform="translate(0.677734 0.709961)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
