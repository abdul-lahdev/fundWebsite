"use client";
import Link from "next/link";
import { Col } from "react-bootstrap";
import UniversalSlider from "./UniversalSlider";
import { SwiperSlide } from "swiper/react";
export default function Subscribe() {
  const sliderImageUrl = [
    {
      image: "/assets/img/about/sliderCard.webp",
    },
    {
      image: "/assets/img/about/sliderCard2.webp",
    },
    {
      image: "/assets/img/about/sliderCard3.webp",
    },
    {
      image: "/assets/img/about/sliderCard4.webp",
    },
    {
      image: "/assets/img/about/sliderCard2.webp",
    },
    {
      image: "/assets/img/about/sliderCard3.webp",
    },
    {
      image: "/assets/img/about/sliderCard4.webp",
    },
  ];

  return (
    <>
      <div className="subscribe2 section-padding pt-0 traderLoveContainer">
        <div className="container containerSetting">
          <div className="row">
            <Col xxl={12}>
              <div>
                <div>
                  <div className="d-flex justify-content-center">
                    <button className="traderLoveBtn">
                      Trader Feedback & Analysis
                    </button>
                  </div>
                  <h1 className="text-center traderLoveHeading mt-4">
                    Our Traders L❤️ve Us
                  </h1>
                  <p className="text-center traderLovePara">
                    FundedNext shines with traders like you! See what real
                    traders have to say about <br /> our best-in-class prop
                    trading firm.
                  </p>
                </div>

                <div className="reviewSectionSetting mt-4">
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                </div>
              </div>
            </Col>
            <Col xxl={12} className="mt-5">
              <div>
                <div className="globalEventSection">
                  <div className="inngerGlobalEvent">
                    <div className="innerBoxSet">
                      <h1 className="globalEventHeading">Global Events</h1>
                      <p className="globalEventPara">
                        Dive into FundedNext's global events, where trading
                        enthusiasts connect, engage, and grow. We’re more than
                        the best prop firm, we’re a community of new and
                        experienced traders committed to learning, growing, and
                        finding success.
                      </p>
                      <Link href="">Learn more</Link>
                    </div>

                    <div className="sliderImageSetting">
                      <UniversalSlider>
                        {sliderImageUrl.map((ele, index) => (
                          <SwiperSlide
                            key={index}
                            className="single-testimonial movingLogoSetting"
                          >
                            <div>
                              <img src={`${ele.image}`} alt="" />
                            </div>
                          </SwiperSlide>
                        ))}
                      </UniversalSlider>
                    </div>
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
