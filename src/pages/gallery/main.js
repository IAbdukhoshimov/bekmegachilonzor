import React from "react";
import { Container, Row, Col } from "reactstrap";
// core components
import mediumZoom from "medium-zoom";
import ImageZoom from "./ImgZoom";

function Sections() {
  const zoom = React.useRef(mediumZoom());

  return (
    <>
      <div className="section">
        <div className="about-office">
          <Container>
            <Row>
              <Col md="6">
                <ImageZoom
                  src={require("assets/BG/Gallery/1.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="6">
                <ImageZoom
                  src={require("assets/BG/Gallery/2.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="4">
                <ImageZoom
                  src={require("assets/BG/Gallery/3.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="4">
                <ImageZoom
                  src={require("assets/BG/Gallery/4.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="4">
                <ImageZoom
                  src={require("assets/BG/Gallery/3.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="6">
                <ImageZoom
                  src={require("assets/BG/Gallery/4.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="6">
                <ImageZoom
                  src={require("assets/BG/Gallery/5.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="4">
                <ImageZoom
                  src={require("assets/BG/Gallery/6.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="4">
                <ImageZoom
                  src={require("assets/BG/Gallery/12.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="4">
                <ImageZoom
                  src={require("assets/BG/Gallery/8.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="6">
                <ImageZoom
                  src={require("assets/BG/Gallery/9.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
              <Col md="6">
                <ImageZoom
                  src={require("assets/BG/Gallery/10.jpeg").default}
                  alt="Bek Mega Chilonzor"
                  zoom={zoom.current}
                  background="#fff"
                />
              </Col>
            </Row>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/HMYhC4NF0uE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Sections;
