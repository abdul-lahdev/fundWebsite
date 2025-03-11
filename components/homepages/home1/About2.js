import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";

export default function About2() {
  return (
    <>
      <div className="about-area section-padding bg5 pt-0 mt-0">
        <div className="container containerSetting">
          <div className="tradingPlatGrid">
            <div
              className="gridLeftSide"
              data-aos="fade-right"
              data-aos-duration={800}
            >
              <div className="guarantedSideBox">
                <div>
                  <h1 className="guarantedHeading">
                    Guaranteed <br /> Payouts
                  </h1>
                  <p className="guarantedPara mt-3">
                    Get paid in 24 hours or we pay $1,000 extra.
                  </p>
                </div>
                <div>
                  <img src="/assets/img/about/guaranted.webp" />
                </div>
              </div>
              <div className="guarantedSideBox ">
                <div>
                  <h1 className="guarantedHeading">Best Trading Conditions</h1>
                  <p className="guarantedPara ">
                    Transforming trading journeys globally through
                    industry-leading resources
                  </p>
                </div>
                <div>
                  <img src="/assets/img/about/condition-hand.svg" />
                </div>
              </div>
            </div>
            <div
              className="gridRightSide"
              data-aos="fade-left"
              data-aos-duration={800}
            >
              <div className="setYourChoice">
                <div className="leftImgSet">
                  <div>
                    <h3 className="choiceText">〽️ Your Choice!</h3>
                    <h1 className="choiceHeadingText">
                      Best Trading Platforms
                    </h1>
                    <p className="choiceSubHeadingText">
                      Trade on MT4, MT5, cTrader & Match-Trader platforms
                    </p>
                  </div>
                  <div>
                    <p className="choiceParaText">
                      Our MQ licenses and advanced in house technology ensure
                      enhanced experience, security and efficiency.
                    </p>
                  </div>
                </div>
                <div className="rightImgSet"></div>
              </div>
            </div>
          </div>

          <div className="row mt-4" data-aos="fade-up" data-aos-duration={800}>
            <div className="col-12">
              <div>
                <p className="communitySupport">
                  FundedNext Community & Support{" "}
                  <div style={{ letterSpacing: "12px" }}>
                    {" "}
                    -----------------------------------------------------------
                  </div>
                </p>
              </div>

              <div className="enpoweringTradingSetting">
                <div className="hoverUpAnimation">
                  <div className="etsFirstItem">
                    <div className="contentItemSet">
                      <h1 className="etsFirstHeading">
                        Empowering Traders in <br /> 170+ Countries
                      </h1>
                      <div className="d-flex align-items-center gap-5 mt-4">
                        <div className="etsFirstSubItem">
                          <h4>$105M+</h4>
                          <p className="p-0 m-0">Total Rewards</p>
                        </div>
                        <div className="etsSecondSubItem">
                          <h4>97k+</h4>
                          <p className="p-0 m-0">Traders</p>
                        </div>
                        <div className="etsThirdSubItem">
                          <h4>5hrs</h4>
                          <p className="p-0 m-0">Avg. Reward Time</p>
                        </div>
                      </div>
                    </div>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full object-cover" // Tailwind for responsiveness
                    >
                      <source
                        src="https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/Globe%20Animation.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="hoverUpAnimation">
                  <div className="etsSecondItem d-flex align-items-center justify-content-center h-100">
                    <div>
                      <img src="/assets/img/about/community.webp" />
                      <h1 className="fundedHeading">
                        FundedNext <br /> Community
                      </h1>
                      <p className="fundedPara">Serving over 1.2M+ members</p>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <Link href="">
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <path
                              d="M32.394 12.4642C30.4823 11.5871 28.4323 10.9408 26.2889 10.5706C26.2499 10.5635 26.2108 10.5814 26.1908 10.617C25.9271 11.086 25.635 11.6977 25.4305 12.1785C23.1252 11.8334 20.8316 11.8334 18.5735 12.1785C18.3689 11.687 18.0663 11.086 17.8014 10.617C17.7814 10.5825 17.7423 10.5647 17.7033 10.5706C15.5611 10.9396 13.5111 11.5859 11.5982 12.4642C11.5816 12.4714 11.5674 12.4833 11.558 12.4987C7.66957 18.308 6.60433 23.9745 7.12687 29.5707C7.12922 29.598 7.14462 29.6242 7.16589 29.6409C9.73136 31.525 12.2165 32.6687 14.6554 33.4269C14.6945 33.4388 14.7358 33.4245 14.7607 33.3924C15.3376 32.6045 15.8519 31.7737 16.2928 30.9001C16.3188 30.849 16.294 30.7882 16.2408 30.768C15.425 30.4586 14.6483 30.0813 13.9011 29.6529C13.842 29.6184 13.8372 29.5338 13.8917 29.4933C14.0489 29.3755 14.2062 29.2529 14.3563 29.1291C14.3835 29.1065 14.4213 29.1018 14.4533 29.116C19.3619 31.3572 24.6762 31.3572 29.5269 29.116C29.5588 29.1006 29.5967 29.1054 29.625 29.1279C29.7752 29.2517 29.9325 29.3755 30.0909 29.4933C30.1452 29.5338 30.1417 29.6183 30.0826 29.6528C29.3354 30.0896 28.5587 30.4585 27.7418 30.7668C27.6886 30.787 27.6649 30.8489 27.691 30.9001C28.1414 31.7725 28.6557 32.6032 29.2219 33.3911C29.2456 33.4245 29.2881 33.4388 29.3272 33.4268C31.7779 32.6687 34.2631 31.5249 36.8285 29.6408C36.851 29.6242 36.8652 29.5992 36.8676 29.5718C37.493 23.102 35.8201 17.482 32.4329 12.4999C32.4247 12.4833 32.4105 12.4714 32.394 12.4642ZM17.0259 26.1631C15.5481 26.1631 14.3304 24.8064 14.3304 23.1401C14.3304 21.4739 15.5244 20.1171 17.0259 20.1171C18.5392 20.1171 19.7451 21.4858 19.7215 23.1401C19.7215 24.8064 18.5273 26.1631 17.0259 26.1631ZM26.9923 26.1631C25.5145 26.1631 24.2967 24.8064 24.2967 23.1401C24.2967 21.4739 25.4908 20.1171 26.9923 20.1171C28.5056 20.1171 29.7115 21.4858 29.6878 23.1401C29.6878 24.8064 28.5056 26.1631 26.9923 26.1631Z"
                              fill="white"
                            />{" "}
                          </svg>
                        </Link>
                        <Link href="">
                          <svg
                            width="45"
                            height="44"
                            viewBox="0 0 45 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <path
                              d="M31.3121 9.30127H13.3551C11.3039 9.30127 9.63477 10.9704 9.63477 13.0216V30.9786C9.63477 33.0298 11.3039 34.6989 13.3551 34.6989H20.8454V25.7204H17.8692V21.256H20.8454V18.2301C20.8454 15.7683 22.848 13.7657 25.3099 13.7657H29.8239V18.2301H25.3099V21.256H29.8239L29.0798 25.7204H25.3099V34.6989H31.3121C33.3633 34.6989 35.0324 33.0298 35.0324 30.9786V13.0216C35.0324 10.9704 33.3633 9.30127 31.3121 9.30127Z"
                              fill="white"
                            />{" "}
                          </svg>
                        </Link>
                        <Link href="">
                          <svg
                            width="45"
                            height="44"
                            viewBox="0 0 45 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <path
                              d="M23.5297 21.5592L29.338 29.8672H26.9543L22.2145 23.0878V23.0874L21.5187 22.0922L15.9819 14.1724H18.3657L22.8338 20.564L23.5297 21.5592Z"
                              fill="white"
                            />{" "}
                            <path
                              d="M32.7829 9.09473H12.5501C11.0099 9.09473 9.76123 10.3434 9.76123 11.8836V32.1164C9.76123 33.6566 11.0099 34.9053 12.5501 34.9053H32.7829C34.3231 34.9053 35.5718 33.6566 35.5718 32.1164V11.8836C35.5718 10.3434 34.3231 9.09473 32.7829 9.09473ZM26.224 30.9826L21.4277 24.0022L15.4227 30.9826H13.8707L20.7386 22.9996L13.8707 13.0042H19.109L23.6508 19.6142L29.3371 13.0042H30.8891L24.3401 20.6169H24.3397L31.4623 30.9826H26.224Z"
                              fill="white"
                            />{" "}
                          </svg>
                        </Link>
                        <Link href="">
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <path
                              d="M35.9481 15.9301C35.9481 15.9301 35.6706 13.8361 34.8175 12.9146C33.7349 11.7066 32.5216 11.6994 31.9656 11.6309C27.9822 11.3223 22.0062 11.3223 22.0062 11.3223H21.9928C21.9928 11.3223 16.0177 11.3223 12.0352 11.6309C11.4783 11.6985 10.2667 11.7057 9.18326 12.9146C8.33018 13.8361 8.05175 15.9301 8.05175 15.9301C8.05175 15.9301 7.76709 18.3871 7.76709 20.844V23.1471C7.76709 25.6058 8.05175 28.0619 8.05175 28.0619C8.05175 28.0619 8.32929 30.155 9.18237 31.0748C10.2658 32.2828 11.6873 32.2463 12.3207 32.3726C14.598 32.6057 21.9999 32.6777 21.9999 32.6777C21.9999 32.6777 27.9813 32.6671 31.9656 32.362C32.5216 32.2908 33.7349 32.2837 34.8175 31.0748C35.6697 30.155 35.9481 28.0619 35.9481 28.0619C35.9481 28.0619 36.2328 25.6049 36.2328 23.1471V20.844C36.2328 18.3871 35.9481 15.9301 35.9481 15.9301ZM18.4453 27.3387V16.6605L27.3435 21.9996L18.4453 27.3387Z"
                              fill="white"
                            />{" "}
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hoverUpAnimation">
                  <div className="etsThirdItem h-100 d-flex align-items-center justify-content-center">
                    <div>
                      <img src="/assets/img/about/customer-support.webp" />
                      <h1 className="fundedHeading">
                        24/7
                        <br /> Pro Support
                      </h1>
                      <p className="fundedPara">
                        With a 50-second average response time, we’re a prop
                        trading firm that truly cares about our traders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
