import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import Navbar from "components/Navbars/ScrollTransparentNavbar.js";
import Footer from "container/footer";
import Helmet from "SEOHelmet/CustomHelmet";
import { useTranslation } from "react-i18next";

function Index() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const { t } = useTranslation();
  return (
    <>
      <Helmet title="Bek Mega Chilonzor || Contact" content="Contact Us" />
      <Navbar/>
      <div className="menu">
        <div
          className="pricing-3 section-image"
          id="pricing-3"
          style={{
            backgroundImage:
              "url(" + require("assets/BG/rasm/1.webp").default + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">{t("Contact.1")}</h2>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="4">
                <Card className="card-pricing">
                  <CardBody>
                    <h5 className="category">{t("Contact.2")}</h5>
                    <img
                      alt="..."
                      src="https://img.icons8.com/ios/64/000000/new-contact.webp"
                    />
                    <CardTitle tag="h1">
                      <small>{t("Contact.3")}</small>
                    </CardTitle>
                    <p>
                      <a href="tel:+998903030512">+(998)90 936 0777</a>
                      <br />
                      <a href="tel:+998903030512">+(998)99 831 2277</a>
                      <br />
                      {t("Contact.4")}: 8:00-17:00
                      <br />
                      {t("Contact.14")}: 12:00-14:00 <br />
                      {t("Contact.15")}: {t("Contact.13")}
                    </p>
                    <hr />
                    <Button
                      className="btn-round"
                      style={{ backgroundColor: "#D2A264" }}
                      href="tel:+998903030512"
                    >
                      {t("Contact.5")}
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="4">
                <Card
                  className="card-pricing card-raised"
                  style={{ backgroundColor: "#D2A264" }}
                >
                  <CardBody>
                    <h5 className="category" style={{ color: "#FFF" }}>
                      {t("Contact.6")}
                    </h5>
                    <img
                      alt="..."
                      src="https://img.icons8.com/ios/64/ffffff/globe--v1.webp"
                    />
                    <CardTitle tag="h1" style={{ color: "#FFF" }}>
                      <small>{t("Contact.7")}</small>
                    </CardTitle>
                    <Button className="btn-neutral btn-icon btn-round">
                      <img
                        alt="..."
                        src="https://img.icons8.com/material-rounded/24/4a90e2/facebook-circled--v1.webp"
                      />
                    </Button>
                    <Button className="btn-neutral btn-icon btn-round">
                      <img
                        alt="..."
                        src="https://img.icons8.com/material-rounded/24/4a90e2/instagram-new.webp"
                      />
                    </Button>
                    <Button className="btn-neutral btn-icon btn-round">
                      <img
                        alt="..."
                        src="https://img.icons8.com/material-rounded/24/4a90e2/whatsapp.webp"
                      />
                    </Button>
                    <Button className="btn-neutral btn-icon btn-round">
                      <img
                        alt="..."
                        src="https://img.icons8.com/pastel-glyph/24/4a90e2/email--v1.webp"
                      />
                    </Button>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-neutral btn-round"
                      style={{ color: "#D2A264" }}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      {t("Contact.8")}
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <Card className="card-pricing">
                  <CardBody>
                    <h5 className="category">{t("Contact.9")}</h5>
                    <img
                      alt="..."
                      src="https://img.icons8.com/ios-filled/64/000000/location-update.webp"
                    />
                    <CardTitle tag="h1">
                      <small>{t("Contact.10")}</small>
                    </CardTitle>
                    <p>
                    Chorbog street 2 -deadlock, house 8, Chilanzar district, Tashkent city, Uzbekistan INDEX 100161
                    
                    </p>
                    <hr />
                    <Button
                      className="btn-round"
                      style={{ backgroundColor: "#D2A264" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/place/Bek+Mega+Textile/@41.2395035,69.1858598,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae621912499a3f:0x661c955ebfa13693!8m2!3d41.2394662!4d69.1880007?hl=en"
                    >
                      {t("Contact.12")}
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* eslint-disable-next-line */}
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A9a7bb795d474f28bb0ae4fd17fba849fde30926a0af20854621dfea8c43b4724&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>

        <Footer />
      </div>
    </>
  );
}

export default Index;
