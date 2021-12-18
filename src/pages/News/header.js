import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function PricingHeader() {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/BG/Gallery/9.jpg").default + ")",
          }}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title"><i className="fab fa-instagram"></i> Instagram</h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default PricingHeader;
