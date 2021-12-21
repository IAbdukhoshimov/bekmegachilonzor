import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Sections() {
  return (
    <>
      <div className="section section-sections" data-background-color="gray">
        <Container>
          <Col className="ml-auto mr-auto" md="8">
            <div className="section-description text-center">
              <h2 className="title">Sections you will love</h2>
              <h5 className="description">
                Build pages in no time using pre-made sections! From headers to
                footers, you will be able to choose the best combination for
                your project. We have created multiple sections for you to put
                together and customise into pixel perfect example pages.
              </h5>
              <Button
                className="btn-round"
                to="/sections"
                color="info"
                tag={Link}
              >
                View All Sections
              </Button>
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/header1.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/header2.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/header3.webp").default
                  }
                ></img>
                <img
                  alt="..."
                  className="rellax"
                  data-rellax-speed="4"
                  src={
                    require("assets/img/presentation-page/pricing5.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/header4.webp").default
                  }
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/features1.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/features2.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/features3.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/features4.webp")
                      .default
                  }
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/features5.webp")
                      .default
                  }
                ></img>
                <img
                  alt="..."
                  className="rellax"
                  data-rellax-speed="5"
                  src={
                    require("assets/img/presentation-page/features2.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/features6.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/features7.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/features8.webp")
                      .default
                  }
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/blogpost1.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/blogpost2.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/blogpost3.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/blogpost4.webp")
                      .default
                  }
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/blogpost5.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/team1.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/team2.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/team3.webp").default
                  }
                ></img>
                <img
                  alt="..."
                  className="rellax"
                  data-rellax-speed="5"
                  src={
                    require("assets/img/presentation-page/contact1.webp").default
                  }
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/team4.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/team5.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/projects1.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/projects2.webp")
                      .default
                  }
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/projects4.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/projects5.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/pricing1.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/pricing2.webp").default
                  }
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/pricing3.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/pricing4.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/pricing5.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/testimonials1.webp")
                      .default
                  }
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/testimonials2.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/testimonials3.webp")
                      .default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/contact1.webp").default
                  }
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/contact2.webp").default
                  }
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Sections;
