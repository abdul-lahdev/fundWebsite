"use client";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import PlanTabs from "./PlanTabs";
import Tab from "react-bootstrap/Tab";
import PricingTable from "./PricingTable";
import { useState } from "react";
export default function CaseStudy() {
  const [stepValue, setStepValue] = useState(true); // Default to "2-Step"

  const radioFunc = (event) => {
    setStepValue(event.target.value === "2-Step");
  };
  return (
    <>
      <div className="case-study-1 section-padding pt-4 planSectionSetting">
        <div className="container containerSetting">
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
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">Fee: $65</span>
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
                                      Fee: $129
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
                                      Fee: $219
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
                                <p className="tableParaTexxt p-0 m-0">$90</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">$225</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">$375</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">$750</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Profit Target
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">10%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">10%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">10%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">10%</p>
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
                                <p className="tableParaTexxt p-0 m-0">2 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">2 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">2 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">2 Days</p>
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
                            <p className="p-0 m-0 tableHeadingSet">$5,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$10,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$25,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$50,000</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $59</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $32</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $139</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $229</span>
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
                            <p className="tableParaTexxt p-0 m-0">4% ($200)</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">4% ($400)</p>
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
                            <p className="tableParaTexxt p-0 m-0">8% ($400)</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">8% ($800)</p>
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
                            <p className="tableParaTexxt p-0 m-0">21 Days</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">21 Days</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">21 Days</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">21 Days</p>
                          </td>
                        </tr>
                      </tbody>
                    </PricingTable>
                  </div>
                </Tab>
                <Tab
                  eventKey="evaluation"
                  title={
                    <div className="navTitleSet">
                      <span>
                        <img src="/assets/img/about/evaluation-plan.svg" />
                      </span>
                      <span>Evaluation</span>
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
                            <p className="p-0 m-0 tableHeadingSet">$6,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$15,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$25,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$50,000</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $49</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $99</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $199</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $229</span>
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
                            <p className="tableParaTexxt p-0 m-0">$135</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">$337.50</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">$562.50</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">$1,125</p>
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
                              P1: 10%, P2: 5%
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">
                              P1: 10%, P2: 5%
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">
                              P1: 10%, P2: 5%
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">
                              P1: 10%, P2: 5%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="p-0 m-0 tableParaTexxt">Time Limit</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">
                              P1: 4 weeks
                            </p>
                            <p className="tableParaTexxt p-0 m-0">
                              P2: 8 weeks
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">
                              P1: 4 weeks
                            </p>
                            <p className="tableParaTexxt p-0 m-0">
                              P2: 8 weeks
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">
                              P1: 4 weeks
                            </p>
                            <p className="tableParaTexxt p-0 m-0">
                              P2: 8 weeks
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">
                              P1: 4 weeks
                            </p>
                            <p className="tableParaTexxt p-0 m-0">
                              P2: 8 weeks
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
                            <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">5% ($750)</p>
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
                              Maximum Overall Loss
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">10% ($600)</p>
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
                            <p className="tableParaTexxt p-0 m-0">Monthly</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">Monthly</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">Monthly</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">Monthly</p>
                          </td>
                        </tr>
                      </tbody>
                    </PricingTable>
                  </div>
                </Tab>
                <Tab
                  eventKey="express"
                  title={
                    <div className="navTitleSet">
                      <span>
                        <img src="/assets/img/about/express-plan.svg" />
                      </span>
                      <span>Express</span>
                    </div>
                  }
                >
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <Form.Check
                      inline
                      label="Consistency"
                      name="group1"
                      type="radio"
                      id="radioBtn"
                    />
                    <Form.Check
                      inline
                      label="Non-Consistency"
                      name="group1"
                      type="radio"
                      id="radioBtn"
                    />
                    {stepValue ? "Checked h" : "nahe h"}
                  </div>
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
                            <p className="p-0 m-0 tableHeadingSet">$6,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$15,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$25,000</p>
                          </td>
                          <td>
                            <p className="p-0 m-0 tableHeadingSet">$50,000</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $49</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $99</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $199</span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            {" "}
                            <Link href="" className="btn getPlanBtn">
                              <div className="d-flex flex-column">
                                <span className="getPlanHeading">Get Plan</span>
                                <span className="getPlanFee">Fee: $299</span>
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
                            <p className="tableParaTexxt p-0 m-0">$225</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">$562.50</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">$937.50</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">$1,875</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="p-0 m-0 tableParaTexxt">
                              Profit Target
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">25%</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">25%</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">25%</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">25%</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="p-0 m-0 tableParaTexxt">
                              Maximum Daily Loss
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">5% ($300)</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">5% ($750)</p>
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
                              Maximum Overall Loss
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">10% ($600)</p>
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
                              Minimum Trading Days
                            </p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">10 Days</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">10 Days</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">10 Days</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">10 Days</p>
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
                                width="12"
                                height="12"
                                fill="none"
                                className="h-[14px] w-[14px] opacity-40"
                              >
                                <g
                                  className="stroke-current"
                                  strokeWidth="2"
                                  opacity="0.75"
                                >
                                  <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                </g>
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="none"
                                className="h-[14px] w-[14px] opacity-40"
                              >
                                <g
                                  className="stroke-current"
                                  strokeWidth="2"
                                  opacity="0.75"
                                >
                                  <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                </g>
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="none"
                                className="h-[14px] w-[14px] opacity-40"
                              >
                                <g
                                  className="stroke-current"
                                  strokeWidth="2"
                                  opacity="0.75"
                                >
                                  <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                </g>
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="none"
                                className="h-[14px] w-[14px] opacity-40"
                              >
                                <g
                                  className="stroke-current"
                                  strokeWidth="2"
                                  opacity="0.75"
                                >
                                  <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                </g>
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
                            <p className="tableParaTexxt p-0 m-0">Monthly</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">Monthly</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">Monthly</p>
                          </td>
                          <td>
                            <p className="tableParaTexxt p-0 m-0">Monthly</p>
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
        </div>
      </div>
    </>
  );
}
