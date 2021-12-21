import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
// core components

function BasicComponents() {
  const { t } = useTranslation();
  return (
    <>
      <div className="section-basic-components">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="5" md="7">
              <h2 className="title">Bek Mega Chilonzor textile</h2>
              <h6 className="category">{t("Home.1")}</h6>
              <h5 className="description">{t("Home.2")} </h5>
              {/* <Button
                  className="btn-default"
                  color='info'
                >
                  <p>Read More</p>
                </Button> */}
            </Col>
            <Col lg="6" md="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/BG/rasm/2.webp").default}
                ></img>
                <img
                  alt="..."
                  className="table-img"
                  src={require("assets/BG/elements/1.webp").default}
                ></img>
                <img
                  alt="..."
                  className="share-btn-img"
                  style={{ boxShadow: "none" }}
                  src={require("assets/BG/elements/2.webp").default}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/BG/elements/3.jpg").default}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/BG/elements/4.webp").default}
                ></img>
                <img
                  alt="..."
                  className="social-img"
                  src={require("assets/BG/elements/2-0.webp").default}
                ></img>
                <img
                  alt="..."
                  style={{ boxShadow: "none" }}
                  className="linkedin-btn-img"
                  src={require("assets/BG/elements/7.webp").default}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BasicComponents;
