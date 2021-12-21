import React from 'react'
import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col,
    Modal,
    ModalFooter,
    CardHeader,
    Collapse,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CardFooter,
    CardTitle
  } from "reactstrap";
  import { useTranslation } from 'react-i18next';
function Qolip({cardImage, items, name, desc}) {
    const [modalMini, setModalMini] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
      setAnimating(true);
    };
    const onExited = () => {
      setAnimating(false);
    };
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
    // collapse states and functions
    const [collapses, setCollapses] = React.useState([1]);
    const changeCollapse = (collapse) => {
      if (collapses.includes(collapse)) {
        setCollapses(collapses.filter((prop) => prop !== collapse));
      } else {
        setCollapses([...collapses, collapse]);
      }
    };
    // select states and functions
    React.useEffect(() => {
      document.body.classList.add("product-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("product-page");
        document.body.classList.remove("sidebar-collapse");
      };
    }, []);
    const { t } = useTranslation();
    return (
        <>
              <Col lg="3" md="4" sm='6'>
                <Card className="card-profile"   onClick={() => setModalMini(true)}>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img rounded"
                      src={cardImage}
                    ></img>
                  </div>
                  <CardBody>
                    <a href="#pablo">
                      <CardTitle tag="h4">{name}</CardTitle>
                    </a>
                    {/* <h6 className="card-category text-info">Web Designer</h6> */}
                    <CardFooter>
                    <Button
                        // color="info"
                        style={{backgroundColor:'#D2A264'}}
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        {t('Service.14')}
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Modal
                className="modal-xl"
                modalClassName="bd-example-modal-xl"
                isOpen={modalMini}
                toggle={() => setModalMini(false)}
              >
                <div className="modal-header justify-content-center">
                  <div className="modal-profile">
                  </div>
                  <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalMini(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
                </div>
                <div className="modal-body">
                <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img
                          src={item.src}
                          alt={item.altText}
                          className="d-block img-raised"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      // color="info"
                      style={{backgroundColor:'#D2A264'}}
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      // color="info"
                      style={{backgroundColor:'#D2A264'}}
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
                <p className="blockquote" style={{color:'#D2A264'}}>
                  "{t('Home.Home.3')}" <br></br>
                  <br></br>
                  <small>Bek Mega Chilonzor</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">{name}</h2>
                <h5 className="category">Bek Mega Chilonzor</h5>
                {/* <h2 className="main-price">$3,390</h2> */}
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        {t('Service.15')}{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>{desc}</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                <Row className="justify-content-end">
                  <Button className="mr-3" style={{backgroundColor:'#D2A264'}} href='tel:+998903030512'>
                  <img src="https://img.icons8.com/ios/20/ffffff/phone.webp" alt='...'/> {t('Contact.5')}
                  </Button>
                </Row>
              </Col>
            </Row>
            </Container>
            </div>
                </div>
                <ModalFooter>
                  {/* <Button className="btn-neutral" color="link" type="button">
                    Back
                  </Button> */}
                  <Button
                    // className="btn-default"
                    style={{backgroundColor:'#D2A264'}}
                    color="default"
                    onClick={() => setModalMini(false)}
                  >
                   {t('Service.16')}
                  </Button>
                </ModalFooter>
              </Modal>   
        </>
    )
}

export default Qolip
