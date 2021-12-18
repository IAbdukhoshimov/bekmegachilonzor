import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import Logo from "assets/BG/Logo/Llogo.png";
// import Text from 'assets/BG/Logo/BSLong.png';

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer footer-white footer-big border-top">
        <Container>
          <div className="content">
            <Row>
              <Col md="3">
                <img src={Logo} alt="..." height="120" />
                {/* <p>Excellence & Quality</p> */}
              </Col>
              <Col md="3">
                <h5>{t("Header.1")}</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {t("Header.1")}
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {t("Header.2")}
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <h5>{t("Header.2")}</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {t("Header.3")}
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {t("Header.4")}
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <h5>{t("Header.5")}</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {t("Header.5")}
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {t("Header.6")}
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {t("Header.7")}
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <hr></hr>
          <ul className="social-buttons">
            <li>
              <Button
                className="btn-icon btn-neutral"
                color="instagram"
                href="https://www.instagram.com/bek_bmch/"
                // onClick={(e) => e.preventDefault()}
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
            </li>
            <li>
              <Button
                className="btn-icon btn-neutral"
                color="facebook"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
            </li>
            <li>
              <Button
                className="btn-icon btn-neutral"
                color="whatsapp"
                href="https://t.me/BekMegaChilonzor"
                // onClick={(e) => e.preventDefault()}
                size="lg"
              >
                <i className="fab fa-whatsapp"></i>
              </Button>
            </li>
          </ul>
          <div className="copyright pull-center">
            BEK MEGA CHILONZOR - {t("Footer.2")} © {new Date().getFullYear()}{" "}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
