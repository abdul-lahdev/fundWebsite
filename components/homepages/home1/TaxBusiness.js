import Link from "next/link";

export default function TaxBusiness() {
  return (
    <>
      <div className="tax-business section-padding2 bg6" id="about">
        <div className="container containerSetting">
          <div className="row justify-content-between">
            <div className="col-xxl-2">
              <div className="h-100 d-flex flex-column justify-content-between">
                <div>
                  <h1
                    className="highlightHeading"
                    data-aos="fade-right"
                    data-aos-duration={800}
                  >
                    Key Highlights
                  </h1>
                  <p
                    className="highlightParagraph"
                    data-aos="fade-right"
                    data-aos-duration={800}
                  >
                    Power up your trading success with FundedNext & get maximum
                    profit.
                  </p>
                </div>
                <div
                  className="subPointSetting"
                  data-aos="fade-right"
                  data-aos-duration={800}
                >
                  <h2 className="subPointHeading">There is more -</h2>
                  <ul className="ps-0 subPointBullet">
                    <li>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.792 19.0945C6.87382 19.0945 3.69751 15.9182 3.69751 12C3.69751 8.08183 6.87382 4.90552 10.792 4.90552C14.7102 4.90552 17.8865 8.08183 17.8865 12V19.0945M17.8865 19.0945L20.3507 16.6303M17.8865 19.0945L15.4223 16.6303"
                            stroke="white"
                            strokeOpacity="0.75"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.3096 13.5943C13.4697 12.426 12.5836 11.4019 11.4356 11.3619L10.5646 11.3316C10.2039 11.3191 9.92147 11.0162 9.93402 10.6556C9.94657 10.295 10.2494 10.0125 10.61 10.0251L12.3783 10.0782C12.7389 10.0908 13.0418 9.80831 13.0543 9.44771C13.0669 9.0871 12.7844 8.78425 12.4238 8.7717L11.7443 8.75642L11.7519 8.53867C11.7644 8.17806 11.4819 7.87521 11.1213 7.86266C10.7607 7.85011 10.4579 8.13259 10.4453 8.49319L10.4369 8.73447C9.39021 8.81577 8.55745 9.71555 8.63081 10.8152C8.69896 11.8388 9.60973 12.6065 10.6349 12.6422L11.3901 12.6685C11.7507 12.681 12.0332 12.9847 12.0206 13.3445C12.0081 13.7042 11.7052 13.9876 11.3446 13.975L9.58898 13.922C9.22837 13.9094 8.92552 14.1919 8.91297 14.5525C8.90042 14.9131 9.1829 15.216 9.54351 15.2285L10.2104 15.2436L10.2028 15.4614C10.1902 15.822 10.4727 16.1249 10.8333 16.1374C11.1939 16.15 11.4968 15.8675 11.5093 15.5069L11.5179 15.2595C12.4095 15.151 13.1857 14.4987 13.3096 13.5943Z"
                            fill="white"
                            fillOpacity="0.75"
                          ></path>
                        </svg>
                      </span>
                      Low commissions
                    </li>
                    <li>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.4879 5.53813C18.2443 5.29426 17.8491 5.29426 17.6056 5.53813L5.56393 17.5798C5.32016 17.8234 5.32016 18.2183 5.56393 18.462C5.68576 18.5839 5.8455 18.6449 6.00514 18.6449C6.16477 18.6449 6.32451 18.5839 6.44624 18.462L18.4879 6.42034C18.7317 6.17668 18.7317 5.78179 18.4879 5.53813Z"
                            fill="white"
                          ></path>
                          <path
                            d="M8.34078 5.35962C6.7066 5.35962 5.37695 6.68937 5.37695 8.32355C5.37695 9.95773 6.7066 11.2874 8.34078 11.2874C9.97506 11.2874 11.3046 9.95762 11.3046 8.32345C11.3046 6.68927 9.97496 5.35962 8.34078 5.35962ZM8.34078 10.0394C7.39459 10.0394 6.62486 9.26953 6.62486 8.32345C6.62486 7.37736 7.3947 6.60753 8.34078 6.60753C9.28697 6.60753 10.0567 7.37736 10.0567 8.32345C10.0567 9.26953 9.28697 10.0394 8.34078 10.0394Z"
                            fill="white"
                          ></path>
                          <path
                            d="M15.7077 12.7166C14.0735 12.7166 12.7439 14.0462 12.7439 15.6804C12.7439 17.3146 14.0735 18.6442 15.7077 18.6442C17.3419 18.6442 18.6716 17.3147 18.6716 15.6804C18.6716 14.0461 17.3419 12.7166 15.7077 12.7166ZM15.7077 17.3962C14.7615 17.3962 13.9918 16.6264 13.9918 15.6803C13.9918 14.7342 14.7616 13.9644 15.7077 13.9644C16.6538 13.9644 17.4236 14.7342 17.4236 15.6803C17.4236 16.6264 16.6539 17.3962 15.7077 17.3962Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      Raw spreads
                    </li>
                    <li>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0242 4.50585L19.6843 8.72461L12.0242 12.9434L4.36401 8.72461L12.0242 4.50585Z"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M19.6843 12L12.0242 16.2188L4.36401 12"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M19.6843 15.2754L12.0242 19.4942L4.36401 15.2754"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      Best packages{" "}
                    </li>
                    <li>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6031 19.0157C15.5542 19.0157 15.4993 19.0096 15.4504 18.9913C13.9969 18.4661 12.7205 17.8798 11.609 17.2507C10.1494 17.8981 8.83635 18.2462 7.82256 18.4355C5.81331 18.802 4.50027 18.6493 4.44531 18.6432C4.19492 18.6126 4.01781 18.3806 4.04835 18.1302C4.07888 17.8798 4.31095 17.7027 4.56135 17.7332C4.57356 17.7332 5.81942 17.8798 7.70042 17.5317C8.51267 17.379 9.52035 17.1164 10.6441 16.6706C6.61335 14.0689 5.12931 10.9176 5.19038 8.61523C5.23924 6.89912 6.13088 5.56775 7.52331 5.15247C8.49435 4.85933 9.3921 4.95093 10.1982 5.42118C11.322 6.07465 12.006 7.34494 12.3785 8.27933C12.5861 7.89458 12.8671 7.44876 13.2213 7.02126C14.4794 5.49447 16.0489 4.91429 17.7711 5.3479C18.9498 5.64715 19.7193 6.40444 19.9392 7.49151C20.1468 8.52362 19.8475 9.75726 19.078 11.0703C18.278 12.4261 16.9894 13.7941 15.3588 15.0338C14.4305 15.7423 13.5083 16.3102 12.6289 16.7683C13.5877 17.2752 14.6381 17.7332 15.7619 18.1363C16 18.2218 16.1222 18.4844 16.0367 18.7226C15.9695 18.8997 15.7924 19.0157 15.6031 19.0157ZM8.60428 5.89143C8.34167 5.89143 8.07296 5.93418 7.78592 6.01969C6.76603 6.32504 6.13699 7.30219 6.10035 8.63355C6.0576 10.1542 6.79046 11.8398 8.15846 13.391C9.06842 14.4231 10.2532 15.3758 11.664 16.2186C12.6594 15.7423 13.7282 15.1193 14.803 14.2949C16.342 13.1223 17.5452 11.8459 18.2841 10.5939C18.9315 9.50076 19.2002 8.46255 19.0414 7.66862C18.8887 6.92965 18.3879 6.44719 17.5452 6.23344C16.1833 5.88533 14.974 6.34336 13.9419 7.58312C13.1297 8.56026 12.7388 9.67787 12.7388 9.69008C12.6716 9.88551 12.4823 10.0077 12.2808 10.0015C12.0731 9.98933 11.9021 9.84276 11.8594 9.64733C11.8533 9.6229 11.267 7.11287 9.7341 6.21511C9.37989 5.99526 9.00125 5.89143 8.60428 5.89143Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="0.2"
                            strokeMiterlimit="10"
                          ></path>
                        </svg>
                      </span>
                      Affordable{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-8">
              <div className="row">
                <div
                  className="col-xxl-4"
                  data-aos="fade-left"
                  data-aos-duration={600}
                >
                  <div>
                    <svg
                      width="121"
                      height="52"
                      viewBox="0 0 121 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.0241699"
                        width="120"
                        height="52"
                        rx="8"
                        fill="url(#paint0_linear_673_10955)"
                      ></rect>
                      <path
                        d="M38.9411 10.8186H33.0911C32.8601 10.8198 32.6346 10.8893 32.443 11.0183C32.2515 11.1474 32.1024 11.3303 32.0146 11.544C31.925 11.7571 31.9006 11.9919 31.9443 12.2189C31.988 12.4459 32.098 12.6548 32.2603 12.8193L34.3664 14.9136L28.411 20.869L24.5617 17.0079C24.4529 16.8983 24.3235 16.8112 24.181 16.7518C24.0384 16.6924 23.8855 16.6618 23.731 16.6618C23.5766 16.6618 23.4236 16.6924 23.2811 16.7518C23.1385 16.8112 23.0091 16.8983 22.9003 17.0079L12.3703 27.538C12.2606 27.6467 12.1736 27.7762 12.1142 27.9187C12.0548 28.0613 12.0242 28.2142 12.0242 28.3687C12.0242 28.5231 12.0548 28.6761 12.1142 28.8186C12.1736 28.9612 12.2606 29.0906 12.3703 29.1994C12.479 29.3091 12.6084 29.3961 12.751 29.4555C12.8936 29.5149 13.0465 29.5455 13.201 29.5455C13.3554 29.5455 13.5083 29.5149 13.6509 29.4555C13.7935 29.3961 13.9229 29.3091 14.0317 29.1994L23.731 19.4883L27.5803 23.3494C27.6891 23.459 27.8185 23.5461 27.9611 23.6055C28.1036 23.6649 28.2566 23.6954 28.411 23.6954C28.5655 23.6954 28.7184 23.6649 28.861 23.6055C29.0036 23.5461 29.133 23.459 29.2417 23.3494L36.0161 16.5633L38.1104 18.6693C38.2197 18.7778 38.3494 18.8636 38.4919 18.9218C38.6345 18.98 38.7871 19.0095 38.9411 19.0086C39.0946 19.0126 39.2468 18.9805 39.3857 18.915C39.5993 18.8273 39.7822 18.6782 39.9113 18.4867C40.0404 18.2951 40.1099 18.0696 40.1111 17.8386V11.9886C40.1111 11.6783 39.9878 11.3807 39.7684 11.1613C39.549 10.9419 39.2514 10.8186 38.9411 10.8186Z"
                        fill="url(#paint1_linear_673_10955)"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.9769 23.3276H38.1772C38.7571 23.3276 39.2273 23.7978 39.2273 24.3777V40.1289C39.2273 40.7088 38.7571 41.1789 38.1772 41.1789H33.9769C33.3969 41.1789 32.9268 40.7088 32.9268 40.1289V24.3777C32.9268 23.7978 33.3969 23.3276 33.9769 23.3276ZM28.7277 27.5307H24.5274C23.9475 27.5307 23.4773 28.0009 23.4773 28.5808V40.1317C23.4773 40.7116 23.9475 41.1817 24.5274 41.1817H28.7277C29.3076 41.1817 29.7778 40.7116 29.7778 40.1317V28.5808C29.7778 28.0009 29.3076 27.5307 28.7277 27.5307ZM19.2765 31.7272H15.0762C14.4963 31.7272 14.0261 32.1973 14.0261 32.7773V40.1278C14.0261 40.7078 14.4963 41.1779 15.0762 41.1779H19.2765C19.8564 41.1779 20.3266 40.7078 20.3266 40.1278V32.7773C20.3266 32.1973 19.8564 31.7272 19.2765 31.7272Z"
                        fill="url(#paint2_linear_673_10955)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_673_10955"
                          x1="0.0241717"
                          y1="-2.49399"
                          x2="120.024"
                          y2="-2.49399"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0032DA" stopOpacity="0.4"></stop>
                          <stop
                            offset="1"
                            stopColor="#0032DA"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_673_10955"
                          x1="34.8433"
                          y1="9.25184"
                          x2="12.0242"
                          y2="28.5705"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#7ACDFF"></stop>
                          <stop offset="0.704346" stopColor="#2D2DD7"></stop>
                          <stop
                            offset="1"
                            stopColor="#1007B1"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_673_10955"
                          x1="33.8746"
                          y1="23.3276"
                          x2="33.8746"
                          y2="41.1789"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#79CFFF"></stop>
                          <stop offset="1" stopColor="#1E34F3"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="keyHighLightBox mt-4">
                    <h1 className="keyHighlightHeading">
                      15% Profit Share in Challenge Phase
                    </h1>
                    <p className="keyHighlightPara">
                      The only trading prop firm that offers a 15% profit share
                      from the Challenge Phase profits.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-4"
                  data-aos="fade-left"
                  data-aos-duration={600}
                >
                  <div>
                    <svg
                      width="121"
                      height="52"
                      viewBox="0 0 121 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.0244141"
                        width="120"
                        height="52"
                        rx="8"
                        fill="url(#paint0_linear_673_10991)"
                      ></rect>
                      <path
                        d="M36.918 15.3801L34.2391 9.79026C34.1796 9.68321 34.0941 9.59434 33.9911 9.53255C33.8881 9.47076 33.7713 9.43823 33.6524 9.43823C33.5335 9.43823 33.4167 9.47076 33.3137 9.53255C33.2107 9.59434 33.1251 9.68321 33.0656 9.79026L30.3862 15.3801C30.3452 15.4657 30.2848 15.5397 30.2103 15.5958C30.1357 15.6519 30.0492 15.6883 29.9582 15.702L23.9682 16.5987C23.8472 16.6144 23.733 16.6659 23.6394 16.7471C23.5457 16.8283 23.4765 16.9359 23.44 17.0569C23.4021 17.1744 23.3975 17.3009 23.4266 17.4211C23.4558 17.5414 23.5175 17.6504 23.6045 17.7352L27.9384 22.0861C28.0053 22.1533 28.0554 22.2365 28.0843 22.3284C28.1132 22.4203 28.1199 22.5182 28.104 22.6135L27.0796 28.7573C27.0584 28.8791 27.071 29.0046 27.116 29.1192C27.1609 29.2338 27.2364 29.3327 27.3334 29.4043C27.4327 29.4812 27.5509 29.5272 27.6743 29.5369C27.7977 29.5467 27.9213 29.5198 28.0306 29.4593L33.3877 26.559C33.4689 26.5151 33.5591 26.4921 33.6507 26.4921C33.7422 26.4921 33.8324 26.5151 33.9136 26.559L39.2708 29.4593C39.3799 29.5202 39.5036 29.5473 39.6271 29.5376C39.7506 29.5278 39.8689 29.4816 39.9679 29.4043C40.0651 29.3326 40.1406 29.2336 40.1855 29.1189C40.2305 29.0042 40.2431 28.8786 40.2218 28.7567L39.1996 22.6147C39.1837 22.5194 39.1905 22.4215 39.2193 22.3296C39.2482 22.2377 39.2983 22.1545 39.3652 22.0873L43.6991 17.7364C43.7861 17.6515 43.8479 17.5425 43.877 17.4223C43.9062 17.302 43.9015 17.1756 43.8636 17.0581C43.8271 16.9371 43.758 16.8297 43.6645 16.7485C43.5709 16.6672 43.4569 16.6157 43.336 16.5999L37.346 15.702C37.2549 15.6883 37.1684 15.6519 37.0939 15.5958C37.0194 15.5397 36.959 15.4657 36.918 15.3801Z"
                        fill="url(#paint1_linear_673_10991)"
                      ></path>
                      <path
                        d="M35.6612 36.601C35.7139 36.5012 35.7928 36.419 35.8888 36.3643L37.4812 35.4587L35.8877 34.5513C35.7917 34.4965 35.7127 34.4144 35.66 34.3146L34.7887 32.6584L33.9162 34.3157C33.8636 34.4156 33.7846 34.4977 33.6886 34.5525L32.0962 35.4587L33.6897 36.366C33.7857 36.4208 33.8647 36.503 33.9174 36.6028L34.7887 38.2589L35.6612 36.601Z"
                        fill="#3E52FF"
                      ></path>
                      <path
                        d="M12.423 42.5617C12.5104 42.5599 12.5949 42.5289 12.664 42.4733C12.7331 42.4176 12.7831 42.3403 12.8066 42.2527C14.8554 35.1412 19.8034 29.784 26.0786 27.8355L26.7979 23.5147C23.0281 25.5056 19.6974 28.29 17.0175 31.6911C16.9207 31.8084 16.7835 31.8816 16.6353 31.8951C16.4872 31.9085 16.3399 31.8611 16.2249 31.7631C16.1099 31.665 16.0364 31.524 16.0201 31.3703C16.0038 31.2166 16.046 31.0623 16.1377 30.9406C18.9776 27.3351 22.5226 24.3992 26.5373 22.328L24.2318 20.0107C20.4135 22.3517 12.4145 28.8299 12.0246 42.1243C12.0229 42.1803 12.0318 42.2361 12.051 42.2885C12.0701 42.3408 12.099 42.3888 12.1361 42.4294C12.1731 42.4701 12.2176 42.5028 12.2668 42.5255C12.3161 42.5482 12.3692 42.5605 12.423 42.5617Z"
                        fill="url(#paint2_linear_673_10991)"
                      ></path>
                      <path
                        d="M19.7266 11.2328L18.8541 9.57495L17.9817 11.2322C17.929 11.3321 17.85 11.4142 17.754 11.469L16.1616 12.3752L17.7552 13.2825C17.8512 13.3373 17.9301 13.4195 17.9828 13.5193L18.8541 15.1754L19.7266 13.5181C19.7793 13.4183 19.8583 13.3361 19.9543 13.2814L21.5467 12.3752L19.9531 11.4678C19.8578 11.4133 19.7792 11.3319 19.7266 11.2328Z"
                        fill="#77CCFF"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_673_10991"
                          x1="0.0244159"
                          y1="-2.49399"
                          x2="120.024"
                          y2="-2.49399"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0032DA" stopOpacity="0.4"></stop>
                          <stop
                            offset="1"
                            stopColor="#0032DA"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_673_10991"
                          x1="33.6518"
                          y1="9.43823"
                          x2="33.6518"
                          y2="29.5395"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#78CEFF"></stop>
                          <stop offset="1" stopColor="#3C4FFF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_673_10991"
                          x1="26.7979"
                          y1="21.5191"
                          x2="13.3479"
                          y2="42.5617"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#629EFF"></stop>
                          <stop offset="1" stopColor="#2219D1"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="keyHighLightBox mt-4">
                    <h1 className="keyHighlightHeading">Monthly Competition</h1>
                    <p className="keyHighlightPara">
                      FundedNext hosts free monthly competitions where you can
                      compete for exclusive rewards.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-4"
                  data-aos="fade-left"
                  data-aos-duration={600}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="53"
                      fill="none"
                    >
                      <rect
                        width="120"
                        height="52"
                        fill="url(#a)"
                        rx="8"
                      ></rect>
                      <g filter="url(#b)">
                        <rect
                          width="15.88"
                          height="15.353"
                          x="12"
                          y="26.662"
                          fill="url(#c)"
                          fillOpacity="0.6"
                          rx="2"
                          shapeRendering="crispEdges"
                        ></rect>
                      </g>
                      <g filter="url(#d)">
                        <rect
                          width="20.218"
                          height="19.546"
                          x="16"
                          y="18.468"
                          fill="url(#e)"
                          rx="2"
                        ></rect>
                      </g>
                      <g filter="url(#f)">
                        <rect
                          width="24.748"
                          height="23.927"
                          x="21"
                          y="9.985"
                          fill="url(#g)"
                          rx="2.523"
                        ></rect>
                      </g>
                      <path
                        fill="url(#h)"
                        d="M22.883 31.026a1 1 0 0 0 1.415 1.415l-1.415-1.415Zm18.67-16.256a1 1 0 0 0-1-1h-9a1 1 0 1 0 0 2h8v8a1 1 0 0 0 2 0v-9ZM24.298 32.44 41.26 15.477l-1.415-1.415-16.963 16.964 1.415 1.415Z"
                      ></path>
                      <defs>
                        <linearGradient
                          id="a"
                          x1="0"
                          x2="120"
                          y1="-2.494"
                          y2="-2.494"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0032DA" stopOpacity="0.4"></stop>
                          <stop
                            offset="1"
                            stopColor="#0032DA"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="c"
                          x1="24.535"
                          x2="12"
                          y1="30.605"
                          y2="38.285"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0426BC"></stop>
                          <stop offset="1" stopColor="#183ADE"></stop>
                        </linearGradient>
                        <linearGradient
                          id="e"
                          x1="32.816"
                          x2="17.545"
                          y1="21.203"
                          y2="38.015"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#5567FF"></stop>
                          <stop offset="1" stopColor="#142ACF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="g"
                          x1="45.748"
                          x2="22.532"
                          y1="9.985"
                          y2="32.836"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.022" stopColor="#79CEFF"></stop>
                          <stop offset="1" stopColor="#4154F1"></stop>
                        </linearGradient>
                        <linearGradient
                          id="h"
                          x1="40.553"
                          x2="23.59"
                          y1="14.77"
                          y2="31.733"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#213BFF"></stop>
                          <stop offset="1" stopColor="#445AF1"></stop>
                        </linearGradient>
                        <filter
                          id="b"
                          width="35.88"
                          height="35.353"
                          x="2"
                          y="16.662"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1296_5165"
                          ></feBlend>
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1296_5165"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <filter
                          id="d"
                          width="40.218"
                          height="39.546"
                          x="6"
                          y="8.468"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1296_5165"
                          ></feBlend>
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1296_5165"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <filter
                          id="f"
                          width="44.748"
                          height="43.927"
                          x="11"
                          y="1.985"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset dy="2"></feOffset>
                          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1296_5165"
                          ></feBlend>
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1296_5165"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="keyHighLightBox mt-4">
                    <h1 className="keyHighlightHeading">
                      Competitive Spreads & High Leverage
                    </h1>
                    <p className="keyHighlightPara">
                      With spreads starting from 0.0 pips and a leverage of up
                      to 1:100, FundedNext gives traders an unmatched trading
                      experience.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-4 mt-4"
                  data-aos="fade-left"
                  data-aos-duration={600}
                >
                  <div>
                    <svg
                      width="121"
                      height="52"
                      viewBox="0 0 121 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.0244141"
                        width="120"
                        height="52"
                        rx="8"
                        fill="url(#paint0_linear_673_10974)"
                      ></rect>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40.0467 14.8476C38.4806 13.4848 36.6401 12.4585 34.6401 11.8468C32.8437 11.2973 30.9676 11.1 29.1074 11.2555C31.1097 12.6793 32.8482 14.3982 34.2976 16.3882L40.0467 14.8476ZM24.007 12.6225C22.3182 13.418 20.7921 14.527 19.5111 15.901C18.0849 17.4308 17.0041 19.2398 16.3293 21.2031L22.0784 19.6626C22.3386 17.2146 22.9848 14.8567 24.007 12.6225ZM26.6166 12.143C28.7376 13.4334 30.5734 15.055 32.0937 16.9779L24.2907 19.0687C24.6458 16.6433 25.4249 14.3212 26.6166 12.143ZM36.6477 39.3771C38.3365 38.5817 39.8625 37.4727 41.1435 36.0987C42.5698 34.5689 43.6505 32.7599 44.3254 30.7965L38.5762 32.337C38.3161 34.7851 37.6699 37.1429 36.6477 39.3771ZM28.5652 35.0196C30.0855 36.9425 31.9213 38.5641 34.0423 39.8545C35.234 37.6764 36.013 35.3543 36.3682 32.9288L28.5652 35.0196ZM26.0118 40.1534C24.0118 39.5417 22.1713 38.5154 20.6051 37.1525L20.6051 37.1525L26.3543 35.612C27.8036 37.602 29.5422 39.3208 31.5445 40.7447C29.6842 40.9001 27.8082 40.7028 26.0118 40.1534ZM12.1326 27.7821C11.682 26.1005 12.68 24.372 14.3616 23.9214L43.1155 16.2168C44.7971 15.7662 46.5256 16.7642 46.9761 18.4458L48.5246 24.2248C48.9752 25.9063 47.9773 27.6348 46.2957 28.0854L17.5417 35.79C15.8601 36.2406 14.1317 35.2426 13.6811 33.561L12.1326 27.7821ZM23.0634 31.6487L24.5409 31.2528L22.5505 23.8244L20.9837 24.2442L22.147 28.5857L18.2658 24.9845L16.7882 25.3802L18.8003 32.8893L20.367 32.4695L19.1822 28.0475L23.0634 31.6487ZM25.4787 24.7481L27.9643 24.0821L27.5445 22.5153L23.4921 23.6011L24.2824 26.5507L24.7022 28.1174L25.4926 31.0669L29.545 29.981L29.1251 28.4143L26.6395 29.0803L26.269 27.6976L28.5714 27.0807L28.1516 25.5139L25.8492 26.1308L25.4787 24.7481ZM35.438 28.3876L36.9211 27.9793L36.4218 20.3473L34.8033 20.4532L35.0778 24.6482L32.962 21.1387L31.522 21.5226L31.4411 25.62L29.5825 21.8411L28.127 22.5569L31.5122 29.4399L32.9961 29.0314L33.0858 24.4859L35.438 28.3876ZM41.1812 26.8924C42.4548 26.5511 43.3064 25.4502 43.2061 24.2748C43.1305 23.3887 42.4527 22.3869 40.7772 22.233C39.9811 22.1598 39.2281 22.0498 38.9887 22.0135C38.8148 21.9339 38.7763 21.7703 38.7678 21.6996C38.7557 21.5982 38.7632 21.3403 39.0946 21.1351C39.8538 20.6651 40.7877 21.0735 40.797 21.0777L40.7912 21.075L41.478 19.6055C41.4083 19.573 39.7543 18.8188 38.2407 19.756C37.4716 20.2322 37.0564 21.0509 37.1573 21.8925C37.252 22.6832 37.7784 23.3273 38.531 23.5733L38.592 23.5932L38.6555 23.6034C38.6941 23.6095 39.6131 23.755 40.629 23.8483C40.8448 23.8681 41.552 23.9674 41.59 24.4126C41.6183 24.7446 41.3161 25.1769 40.7613 25.3256C40.1805 25.4812 39.5594 25.3971 39.0997 25.1008L38.2207 26.4639C39.0712 27.0124 40.1503 27.1686 41.1812 26.8924Z"
                        fill="url(#paint1_linear_673_10974)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_673_10974"
                          x1="0.0244159"
                          y1="-2.49399"
                          x2="120.024"
                          y2="-2.49399"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0032DA" stopOpacity="0.4"></stop>
                          <stop
                            offset="1"
                            stopColor="#0032DA"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_673_10974"
                          x1="30.3286"
                          y1="11.2041"
                          x2="30.3286"
                          y2="40.796"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#78CEFF"></stop>
                          <stop offset="1" stopColor="#3E52FF"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="keyHighLightBox mt-4">
                    <h1 className="keyHighlightHeading">Daily News Trading</h1>
                    <p className="keyHighlightPara">
                      Make profits quickly by utilizing big market movements
                      when a high-impact news is announced.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-4 mt-4"
                  data-aos="fade-left"
                  data-aos-duration={600}
                >
                  <div>
                    <svg
                      width="121"
                      height="52"
                      viewBox="0 0 121 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.0241699"
                        width="120"
                        height="52"
                        rx="8"
                        fill="url(#paint0_linear_673_11001)"
                      ></rect>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M39.005 13.4149C36.0785 10.9504 32.3819 9.56421 28.4599 9.56421C19.3968 9.56421 12.0242 16.9368 12.0242 25.9999C12.0242 35.063 19.3968 42.4356 28.4599 42.4356C36.7416 42.4356 43.7535 36.252 44.7716 28.053C44.8674 27.2791 44.3189 26.5766 43.5469 26.4808C42.7749 26.3869 42.0724 26.9316 41.9766 27.7055C41.1332 34.4958 35.3215 39.6181 28.4599 39.6181C20.9502 39.6181 14.8417 33.5096 14.8417 25.9999C14.8417 18.4902 20.9502 12.3818 28.4599 12.3818C31.5648 12.3818 34.5063 13.4186 36.875 15.2932H35.1018C34.3241 15.2932 33.693 15.9244 33.693 16.702C33.693 17.4796 34.3241 18.1108 35.1018 18.1108H40.4138C41.1914 18.1108 41.8226 17.4796 41.8226 16.702V11.3881C41.8226 10.6105 41.1914 9.97933 40.4138 9.97933C39.6362 9.97933 39.005 10.6105 39.005 11.3881V13.4149ZM29.2848 24.5923C31.7605 24.5923 33.746 26.7318 33.4886 29.2601C33.2895 31.2173 31.6666 32.6806 29.7544 32.9811V33.5146C29.7544 34.2922 29.1233 34.9233 28.3457 34.9233C27.568 34.9233 26.9369 34.2922 26.9369 33.5146V33.045H25.9996C25.2219 33.045 24.5908 32.4139 24.5908 31.6362C24.5908 30.8586 25.2219 30.2274 25.9996 30.2274H29.2848C30.0625 30.2274 30.6936 29.5944 30.6936 28.8187C30.6936 28.0429 30.0625 27.4099 29.2848 27.4099H27.6563C25.4455 27.4099 23.4262 25.8245 23.2027 23.625C22.9623 21.262 24.6885 19.2615 26.9369 19.008V18.4876C26.9369 17.71 27.568 17.0789 28.3457 17.0789C29.1233 17.0789 29.7544 17.71 29.7544 18.4876V18.9572H30.7011C31.4788 18.9572 32.1099 19.5884 32.1099 20.366C32.1099 21.1437 31.4788 21.7748 30.7011 21.7748H27.4065C26.6288 21.7748 25.9977 22.4059 25.9977 23.1836C25.9977 23.9612 26.6288 24.5923 27.4065 24.5923H29.2848Z"
                        fill="url(#paint1_linear_673_11001)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_673_11001"
                          x1="0.0241717"
                          y1="-2.49399"
                          x2="120.024"
                          y2="-2.49399"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0032DA" stopOpacity="0.4"></stop>
                          <stop
                            offset="1"
                            stopColor="#0032DA"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_673_11001"
                          x1="28.4033"
                          y1="9.56421"
                          x2="28.4033"
                          y2="42.4356"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CCFF"></stop>
                          <stop offset="1" stopColor="#3E52FF"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="keyHighLightBox mt-4">
                    <h1 className="keyHighlightHeading">Reset & Top-up</h1>
                    <p className="keyHighlightPara">
                      Reset or top-up your account to restart your trading
                      journey, even if you’ve violated any rules.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-4 mt-4"
                  data-aos="fade-left"
                  data-aos-duration={600}
                >
                  <div>
                    <svg
                      width="120"
                      height="52"
                      viewBox="0 0 120 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="120"
                        height="52"
                        rx="8"
                        fill="url(#paint0_linear_1711_16752)"
                      ></rect>
                      <path
                        d="M25.9543 10.2501C25.9543 9.83585 26.29 9.50006 26.7042 9.50006L30.5577 9.50001C30.9719 9.5 31.3077 9.83579 31.3077 10.25L31.3078 14.1035C31.3078 14.5177 30.972 14.8535 30.5578 14.8535L26.7043 14.8535C26.2901 14.8536 25.9543 14.5178 25.9543 14.1036L25.9543 10.2501Z"
                        fill="url(#paint1_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M18.3338 13.8322C18.1267 13.4735 18.2496 13.0148 18.6083 12.8077L21.5241 11.1244C21.8828 10.9173 22.3415 11.0402 22.5486 11.3989L24.232 14.3146C24.4391 14.6734 24.3162 15.1321 23.9574 15.3392L21.0417 17.0225C20.683 17.2296 20.2243 17.1067 20.0172 16.748L18.3338 13.8322Z"
                        fill="url(#paint2_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M20.4038 38.0301C20.6109 37.6714 21.0696 37.5485 21.4283 37.7556L22.6582 38.4657C23.0169 38.6728 23.1398 39.1315 22.9327 39.4902L22.2226 40.7201C22.0155 41.0788 21.5568 41.2017 21.1981 40.9946L19.9682 40.2845C19.6095 40.0774 19.4866 39.6187 19.6937 39.26L20.4038 38.0301Z"
                        fill="url(#paint3_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M27.3754 40.8166C27.3754 40.4024 27.7112 40.0666 28.1254 40.0666L29.0588 40.0666C29.473 40.0666 29.8088 40.4024 29.8088 40.8166L29.8088 41.75C29.8088 42.1642 29.4731 42.5 29.0588 42.5L28.1254 42.5C27.7112 42.5 27.3754 42.1642 27.3754 41.75L27.3754 40.8166Z"
                        fill="url(#paint4_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M34.9849 39.6793C34.7778 39.3206 34.9007 38.8619 35.2594 38.6548L35.6463 38.4314C36.005 38.2243 36.4637 38.3472 36.6708 38.7059L36.8942 39.0928C37.1013 39.4515 36.9784 39.9102 36.6196 40.1173L36.2328 40.3407C35.8741 40.5478 35.4154 40.4249 35.2083 40.0662L34.9849 39.6793Z"
                        fill="url(#paint5_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M14.7918 17.0879C14.9989 16.7292 15.4576 16.6063 15.8164 16.8134L18.3107 18.2535C18.6694 18.4606 18.7923 18.9193 18.5852 19.278L17.1451 21.7723C16.938 22.1311 16.4793 22.254 16.1206 22.0469L13.6263 20.6068C13.2675 20.3997 13.1446 19.941 13.3517 19.5822L14.7918 17.0879Z"
                        fill="url(#paint6_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M12 25.5097C12 25.0955 12.3358 24.7597 12.75 24.7597L15.1434 24.7597C15.5577 24.7597 15.8934 25.0955 15.8935 25.5097L15.8935 27.9031C15.8935 28.3173 15.5577 28.6531 15.1435 28.6531L12.75 28.6532C12.3358 28.6532 12 28.3174 12 27.9032L12 25.5097Z"
                        fill="url(#paint7_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M14.0927 34.0299C13.8856 33.6712 14.0085 33.2125 14.3672 33.0054L16.0185 32.0521C16.3773 31.845 16.836 31.9679 17.0431 32.3266L17.9964 33.9779C18.2035 34.3366 18.0806 34.7953 17.7219 35.0024L16.0706 35.9558C15.7119 36.1629 15.2532 36.04 15.0461 35.6813L14.0927 34.0299Z"
                        fill="url(#paint8_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M40.6233 33.6658C40.8249 33.3166 41.2714 33.1969 41.6206 33.3985C41.9698 33.6001 42.0894 34.0466 41.8878 34.3958C41.6862 34.745 41.2397 34.8646 40.8905 34.663C40.5414 34.4614 40.4217 34.0149 40.6233 33.6658Z"
                        fill="url(#paint9_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M42.79 26.7494C42.79 26.4806 43.0079 26.2627 43.2767 26.2627C43.5455 26.2627 43.7633 26.4806 43.7634 26.7494C43.7634 27.0182 43.5455 27.2361 43.2767 27.2361C43.0079 27.2361 42.79 27.0182 42.79 26.7494Z"
                        fill="url(#paint10_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M40.9645 19.567C40.8974 19.4506 40.9372 19.3018 41.0536 19.2346C41.17 19.1674 41.3188 19.2073 41.386 19.3236C41.4532 19.44 41.4133 19.5889 41.297 19.656C41.1806 19.7232 41.0317 19.6834 40.9645 19.567Z"
                        fill="url(#paint11_linear_1711_16752)"
                        fillOpacity="0.9"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1711_16752"
                          x1="1.80152e-06"
                          y1="-2.49399"
                          x2="120"
                          y2="-2.49399"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0032DA" stopOpacity="0.4"></stop>
                          <stop
                            offset="1"
                            stopColor="#0032DA"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint8_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint9_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint10_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint11_linear_1711_16752"
                          x1="27.8817"
                          y1="9.5"
                          x2="27.8817"
                          y2="42.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#77CBFF"></stop>
                          <stop offset="1" stopColor="#3F54FF"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="keyHighLightBox mt-4">
                    <h1 className="keyHighlightHeading">No Time Limits</h1>
                    <p className="keyHighlightPara">
                      FundedNext puts traders in control, providing full trading
                      freedom with no time limits to worry about.
                    </p>
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
