import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="about-area section-padding bg5-left">
        <div className="container containerSetting">
          <div className="row align-items-center">
            <div className="col-12">
              <div
                className="fundedBtnsetting d-flex flex-column align-items-center gap-4"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <button className="btn ">Why FundedNext</button>
                <h1 className="text-center p-0 m-0 fundHeading">
                  Trade with the Most <br /> Reliable Prop Firm
                </h1>
                <p className="text-center p-0 m-0 fundSubHeading">
                  Accurate | Fast | Stable | Trustworthy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
