import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Modal,
  ModalFooter,
  Button,
} from "reactstrap";
import { useTranslation } from "react-i18next";

function Service() {
  const [modal, setModal] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const [modal4, setModal4] = React.useState(false);
  const [modal5, setModal5] = React.useState(false);
  const [modal6, setModal6] = React.useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="features-4">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">{t("Service.1")}</h2>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card
                onClick={() => setModal(true)}
                className="card-background card-raised"
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/BG/HomePage/ip1.webp").default +
                    ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <i class="fas fa-tshirt"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">{t("Service.2")}</h4>
                    <p>{t("Service.3")}</p>
                    <a className="ml-3" onClick={() => setModal(true)}>
                      {t("Service.14")}
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            <Modal
              className="modal-lg"
              modalClassName="bd-example-modal-lg"
              isOpen={modal}
              toggle={() => setModal(false)}
              style={{ backgroundColor: "#fff" }}
            >
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  onClick={() => setModal(false)}
                  type="button"
                  color="info"
                >
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">{t("Service.2")}</h4>
              </div>
              <div className="modal-body">
                <Col>
                  <Row>
                    <img
                      alt="..."
                      src={require("assets/BG/HomePage/ip1.webp").default}
                    />
                  </Row>
                  <Row>
                    <h5 className="price">{t("Service.Yarn.1")}</h5>
                    <h5 className="price">{t("Service.Yarn.2")}</h5>
                    <h5 className="price">{t("Service.Yarn.3")}</h5>
                  </Row>
                </Col>
              </div>
              <ModalFooter>
                <Button
                  style={{ backgroundColor: "#D2A264" }}
                  onClick={() => setModal(false)}
                >
                  {t("Service.16")}
                </Button>
              </ModalFooter>
            </Modal>
            <Col md="4">
              <Card
                onClick={() => setModal2(true)}
                className="card-background card-raised"
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" + require("assets/BG/HomePage/i1.webp").default + ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <i class="fas fa-flask"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">{t("Service.4")}</h4>
                    <p>{t("Service.5")}</p>
                    <a className="ml-3" onClick={() => setModal2(true)}>
                      {t("Service.14")}
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            <Modal
              className="modal-lg"
              modalClassName="bd-example-modal-lg"
              isOpen={modal2}
              toggle={() => setModal2(false)}
              style={{ backgroundColor: "#fff" }}
            >
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  onClick={() => setModal2(false)}
                  type="button"
                  color="info"
                >
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">{t("Service.4")}</h4>
              </div>
              <div className="modal-body">
                <Col>
                  <Row>
                    <img
                      alt="..."
                      src={require("assets/BG/HomePage/i1.webp").default}
                    />
                  </Row>
                  <Row>
                    <h5 className="price">{t("Service.Knitting.1")}</h5>
                    <h5 className="price">{t("Service.Knitting.2")}</h5>
                    <h5 className="price">{t("Service.Knitting.3")}</h5>
                  </Row>
                </Col>
              </div>
              <ModalFooter>
                <Button
                  style={{ backgroundColor: "#D2A264" }}
                  onClick={() => setModal2(false)}
                >
                  {t("Service.16")}
                </Button>
              </ModalFooter>
            </Modal>
            <Col md="4">
              <Card
                className="card-background card-raised"
                data-background-color=""
                onClick={() => setModal3(true)}
                style={{
                  backgroundImage:
                    "url(" + require("assets/BG/HomePage/s1.webp").default + ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <img
                      src="https://img.icons8.com/small/64/ffffff/feed-paper.webp"
                      alt="icon"
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">{t("Service.6")}</h4>
                    <p>{t("Service.7")}</p>
                    <a className="ml-3" onClick={() => setModal3(true)}>
                      {t("Service.14")}
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            <Modal
              className="modal-lg"
              modalClassName="bd-example-modal-lg"
              isOpen={modal3}
              toggle={() => setModal3(false)}
              style={{ backgroundColor: "#fff" }}
            >
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  onClick={() => setModal3(false)}
                  type="button"
                  color="info"
                >
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">{t("Service.6")}</h4>
              </div>
              <div className="modal-body">
                <Col>
                  <Row>
                    <img
                      alt="..."
                      src={require("assets/BG/HomePage/s1.webp").default}
                    />
                  </Row>
                  <Row>
                    <h5 className="price">{t("Service.Sewing.1")}</h5>
                    <h5 className="price">{t("Service.Sewing.2")}</h5>
                    <h5 className="price">{t("Service.Sewing.3")}</h5>
                  </Row>
                </Col>
              </div>
              <ModalFooter>
                <Button
                  style={{ backgroundColor: "#D2A264" }}
                  onClick={() => setModal3(false)}
                >
                  {t("Service.16")}
                </Button>
              </ModalFooter>
            </Modal>
            <Col md="4">
              <Card
                onClick={() => setModal4(true)}
                className="card-background card-raised"
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" + require("assets/BG/HomePage/b2.webp").default + ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <i class="fab fa-accusoft"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">{t("Service.8")}</h4>
                    <p>{t("Service.9")}</p>
                    <a className="ml-3" onClick={() => setModal4(true)}>
                      {t("Service.14")}
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            <Modal
              className="modal-lg"
              modalClassName="bd-example-modal-lg"
              isOpen={modal4}
              toggle={() => setModal4(false)}
              style={{ backgroundColor: "#fff" }}
            >
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  onClick={() => setModal4(false)}
                  type="button"
                  color="info"
                >
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">{t("Service.8")}</h4>
              </div>
              <div className="modal-body">
                <Col>
                  <Row>
                    <img
                      alt="..."
                      src={require("assets/BG/HomePage/b2.webp").default}
                    />
                  </Row>
                  <Row>
                    <h5 className="price">{t("Service.Rotary.1")}</h5>
                    <h5 className="price">{t("Service.Rotary.2")}</h5>
                    <h5 className="price">{t("Service.Rotary.3")}</h5>
                  </Row>
                </Col>
              </div>
              <ModalFooter>
                <Button
                  style={{ backgroundColor: "#D2A264" }}
                  onClick={() => setModal4(false)}
                >
                  {t("Service.16")}
                </Button>
              </ModalFooter>
            </Modal>
            <Col md="4">
              <Card
                onClick={() => setModal5(true)}
                className="card-background card-raised"
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" + require("assets/BG/HomePage/e3.webp").default + ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <i class="fas fa-brush"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">{t("Service.10")}</h4>
                    <p>{t("Service.11")} </p>
                    <a onClick={() => setModal5(true)}>{t("Service.14")}</a>
                  </div>
                </div>
              </Card>
            </Col>
            <Modal
              className="modal-lg"
              modalClassName="bd-example-modal-lg"
              isOpen={modal5}
              toggle={() => setModal5(false)}
              style={{ backgroundColor: "#fff" }}
            >
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  onClick={() => setModal5(false)}
                  type="button"
                  color="info"
                >
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">{t("Service.8")}</h4>
              </div>
              <div className="modal-body">
                <Col>
                  <Row>
                    <img
                      alt="..."
                      src={require("assets/BG/HomePage/e3.webp").default}
                    />
                  </Row>
                  <Row>
                    <h5 className="price">{t("Service.Screen.1")}</h5>
                    <h5 className="price">{t("Service.Screen.2")}</h5>
                  </Row>
                </Col>
              </div>
              <ModalFooter>
                <Button
                  style={{ backgroundColor: "#D2A264" }}
                  onClick={() => setModal5(false)}
                >
                  {t("Service.16")}
                </Button>
              </ModalFooter>
            </Modal>
            <Col md="4">
              <Card
                className="card-background card-raised"
                onClick={() => setModal6(true)}
                data-background-color=""
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/BG/HomePage/ip4.webp").default +
                    ")",
                }}
              >
                <div className="info">
                  <div className="icon icon-white">
                    <img
                      src="https://img.icons8.com/small/64/ffffff/stitch-marker.webp"
                      alt="icon"
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">{t("Service.12")}</h4>
                    <p>{t("Service.13")}</p>
                    <a className="ml-3" onClick={() => setModal6(true)}>
                      {t("Service.14")}
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
            <Modal
              className="modal-lg"
              modalClassName="bd-example-modal-lg"
              isOpen={modal6}
              toggle={() => setModal6(false)}
              style={{ backgroundColor: "#fff" }}
            >
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  onClick={() => setModal6(false)}
                  type="button"
                  color="info"
                >
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">{t("Service.12")}</h4>
              </div>
              <div className="modal-body">
                <Col>
                  <Row>
                    <img
                      alt="..."
                      src={require("assets/BG/HomePage/ip4.webp").default}
                    />
                  </Row>
                  <Row>
                    <h5 className="price">{t("Service.Dyeing.1")}</h5>
                    <h5 className="price">{t("Service.Dyeing.2")}</h5>
                    <h5 className="price">{t("Service.Dyeing.3")}</h5>
                  </Row>
                </Col>
              </div>
              <ModalFooter>
                <Button
                  style={{ backgroundColor: "#D2A264" }}
                  onClick={() => setModal6(false)}
                >
                  {t("Service.16")}
                </Button>
              </ModalFooter>
            </Modal>
          </Row>
        </Container>
      </div>
      <a href="https://icons8.com/icon/111223/cotton"></a>
    </>
  );
}

export default Service;
