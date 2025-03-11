import Layout from "@/components/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
export default function affiliatePartner() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          style={{
            backgroundImage:
              "url(/assets/img/affiliate/affiliate-hero_bg-img.png)",
            backgroundPositionX: "left",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Row>
              <Col xxl={12}>
                <div className="affiliateContainer d-flex align-items-center justify-content-center">
                  <div className="affiliateHeroSection">
                    <h4 className="affiliateSmHeading">
                      Share , Get Paid , Repeat
                    </h4>
                    <h1 className="affiliateMainHeading">
                      Earn Like An Infinite Star!
                    </h1>
                    <h5 className="affiliateParagraph">
                      Start earning up to 18% commission on every referral.
                    </h5>
                    <div className="d-flex align-items-center gap-3 justify-content-center mt-5">
                      <button className="becomeAffiliateBtn">
                        Become an Affiliate
                      </button>
                      <button className="AffiliateBtn">Affiliate Login</button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}
