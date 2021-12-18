import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import mediumZoom from "medium-zoom";
import ImageZoom from "./ImgZoom";
// core components
import { useTranslation } from "react-i18next";

function Components() {
  const zoom = React.useRef(mediumZoom());
  const { t } = useTranslation();
  return (
    <>
      <div
        className="section section-components"
        data-background-color="dark-blue"
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="text-center title">
                Bek Mega Chilonzor<br></br>
                <small className="description">{t("Home.Home.1")}</small>
              </h1>
              {/* <div className="space-50"></div> */}
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <Row>
            <Col md="3">
              <div className="card-container first-card">
                <div className="card-component">
                  <div className="front">
                    <ImageZoom
                      src={require("assets/BG/C1.jpg").default}
                      alt="Zoom 1"
                      zoom={zoom.current}
                      background="#fff"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container second-card">
                <div className="card-component">
                  <div className="front">
                    <ImageZoom
                      src={require("assets/BG/C2.jpg").default}
                      alt="Zoom 1"
                      zoom={zoom.current}
                      background="#fff"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container third-card">
                <div className="card-component">
                  <div className="front">
                    <ImageZoom
                      src={require("assets/BG/C1.jpg").default}
                      alt="Zoom 1"
                      zoom={zoom.current}
                      background="#fff"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container fourth-card">
                <div className="card-component">
                  <div className="front">
                    <ImageZoom
                      src={require("assets/BG/C2.jpg").default}
                      alt="Zoom 1"
                      zoom={zoom.current}
                      background="#fff"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default Components;
