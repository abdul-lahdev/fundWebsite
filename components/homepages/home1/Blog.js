import Link from "next/link";
import { Col } from "react-bootstrap";
import PricingTable from "./PricingTable";

export default function Blog() {
  return (
    <>
      <div
        className="blog-area blog2 section-padding2 pt-0 whyChooseUsContainer"
        data-aos="fade-up"
        data-aos-duration={800}
      >
        <div className="container containerSetting">
          <div className="row">
            <Col xxl={12}>
              <div>
                <div className="d-flex justify-content-center">
                  <button className="btn whoChooseBtn">
                    Compare MarketsCompare Markets
                  </button>
                </div>
                <h1 className="text-center p-0 m-0 whyChooseHeading">
                  Why Choose FundedNext
                </h1>
                <p className="text-center whyChoosePara mt-3 mb-3">
                  Explore the features that make FundedNext stand out from
                  <br /> so many other trading prop firms.
                </p>
              </div>
              <div className="whyChooseUsTable mt-5">
                <PricingTable>
                  <thead>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableGreyHeading">VARIABLES</p>
                      </td>
                      <td>
                        <span>
                          <img src="/assets/img/about/1.svg" />
                        </span>
                      </td>
                      <td>
                        <span>
                          <img src="/assets/img/about/2.svg" />
                        </span>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          Profit Share from Challenge Phase
                        </p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">15%</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">0%</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          Account Profit Share
                        </p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          80% | 95% with Add-on
                        </p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">80%</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">Profit Target</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">8%/5%</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">10%/5%</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          Account Reset Option
                        </p>
                      </td>
                      <td>
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="opacity-70"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                          </svg>
                        </span>
                      </td>
                      <td>
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="text-[18px] opacity-70"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          One Step Challenge
                        </p>
                      </td>
                      <td>
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="opacity-70"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                          </svg>
                        </span>
                      </td>
                      <td>
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="text-[18px] opacity-70"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          Free Competitions
                        </p>
                      </td>
                      <td>
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="opacity-70"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                          </svg>
                        </span>
                      </td>
                      <td>
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="text-[18px] opacity-70"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">Global Meetup</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">5 Countries</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">0</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">Jurisdiction</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">UAE</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">Czech Republic</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          Lowest Package with Price
                        </p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">5K/$32</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">10K/$155</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          Challenge Fee Reward
                        </p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">1st Withdrawal</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">1st Withdrawal</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          Payout Guarantee in 24 hours
                        </p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">Yes</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">No</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">News</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">Allowed</p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">Allowed</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          Platform Offering
                        </p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          MT4, MT5, Match-Trader and cTrader
                        </p>
                      </td>
                      <td>
                        <p className="p-0 m-0 tableParaTexxt">
                          MT4, MT5, cTrader, DXtrade
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </PricingTable>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}
