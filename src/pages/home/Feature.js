import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

function Feature() {
  const { t } = useTranslation();
  return (
    <>
      <div className="features-4">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">{t("Home.3")}</h2>
              {/* <h4 className="description">
                  Havenly is a convenient, personal and affordable way to
                  redecorate your home room by room. Collaborate with our
                  professional interior designers on our online platform.
                </h4> */}
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card
                className="card-background card-raised"
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" + require("assets/BG/rasm/cotton.webp").default + ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <img
                      alt="..."
                      src="https://img.icons8.com/ios-filled/64/ffffff/cotton.webp"
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">35,000 {t("Home.4")}</h4>
                    <p>{t("Home.5")}</p>
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Find more...
                      </a> */}
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="3">
              <Card
                className="card-background card-raised"
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/BG/rasm/ginning.webp").default +
                    ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <img
                      alt="..."
                      src="https://img.icons8.com/ios-filled/64/ffffff/clew.webp"
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">20,000 {t("Home.6")}</h4>
                    <p>{t("Home.7")}</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="3">
              <Card
                className="card-background card-raised"
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" + require("assets/BG/rasm/yarn.webp").default + ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <img
                      alt="..."
                      src="https://img.icons8.com/ios-glyphs/64/ffffff/bobbin--v2.webp"
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">35,000 {t("Home.6")}</h4>
                    <p>{t("Home.8")}</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="3">
              <Card
                className="card-background card-raised"
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" + require("assets/BG/rasm/harsh.webp").default + ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <img
                      alt="..."
                      src="https://img.icons8.com/metro/64/ffffff/polishing-cloth.webp"
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">10 800 {t("Home.6")}</h4>
                    <p>{t("Home.9")}</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature;
