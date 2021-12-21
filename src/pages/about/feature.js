import React from 'react'
import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import { useTranslation } from 'react-i18next';
function Feature() {
  const { t } = useTranslation();
    const [pills, setPills] = React.useState("1");
    React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
    return (
        <>
         <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <h4 className="title text-center">{t('Content.1')}</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-warning nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                        className={pills === "1" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                        className={pills === "2" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                        className={pills === "3" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent className="gallery" activeTab={"pills" + pills}>
                  <TabPane tabId="pills1">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" +
                              require("assets/BG/rasm/2.webp").default +
                              ")",
                          }}
                        >
                          <CardBody>
                            {/* <CardTitle tag="h2">Chair remake.</CardTitle>
                            <p className="card-description text-white">
                              Trello’s boards, lists, and cards enable you to
                              organize and prioritize your projects in a fun,
                              flexible and rewarding way. It was a great project
                              and I would be more than happy to do it again.
                            </p>
                            <Badge className="badge-neutral">Trello</Badge> */}
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-warning">
                            <i className="now-ui-icons users_single-02"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">{t('Content.2')}</h5>
                            <p className="description">{t('Content.3')} </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-warning">
                            <i className="now-ui-icons business_chart-bar-32"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">{t('Content.4')}</h5>
                            <p className="description">{t('Content.5')} </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills2">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" +
                              require("assets/BG/elements/1.webp").default +
                              ")",
                          }}
                        >
                          <CardBody>
                            {/* <CardTitle tag="h2">Social Analytics</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Analytics</Badge> */}
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons ui-2_chat-round"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">
                            {t('Content.6')}
                            </h5>
                            <p className="description">{t('Content.7')} </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">{t('Content.8')}</h5>
                            <p className="description">
                            {t('Content.9')}
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills3">
                    <Row>
                      <Col className="ml-auto mr-auto" md="12">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" +
                              require("assets/BG/elements/4.webp").default +
                              ")",
                          }}
                        >
                          <CardBody>
                            {/* <CardTitle tag="h2">Interior Redesign</CardTitle> */}
                            <p className="card-description">{t('Content.10')}</p>
                            {/* <Badge className="badge-neutral">Interior</Badge> */}
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        </>
    )
}

export default Feature
