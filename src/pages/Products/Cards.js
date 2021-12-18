import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import {JakarliInterlok, Flis, Fullaykra, Interlock, Jakard, Krep, Lakoste, Makhra, Pechat, 
   Ribana, Selenik, Suprem, Tkan, Velur, Viskoza, kashkorse} from 'pages/Products/Cards/Polotno/Index';

const Products= [ JakarliInterlok, Flis, Fullaykra, Interlock, Jakard, Krep, Lakoste, Makhra, Pechat, 
     Ribana, Selenik, Suprem, Tkan, Velur, Viskoza, kashkorse];
function Cards() {
  
  const { t } = useTranslation();
    return (
        <>
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">{t('Home.Home.1')}</h2>
                    <h4 className="description">{t('Home.Home.8')}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success icon-circle">
                        <i className="now-ui-icons objects_globe"></i>
                      </div>
                      <h4 className="info-title">{t('Home.Home.2')}</h4>
                      <p className="description">{t('Home.Home.3')}</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons education_atom"></i>
                      </div>
                      <h4 className="info-title">{t('Home.Home.4')}</h4>
                      <p className="description">{t('Home.Home.5')}</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons tech_watch-time"></i>
                      </div>
                      <h4 className="info-title">{t('Home.Home.6')}</h4>
                      <p className="description">{t('Home.Home.7')}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          </div>
          <Container fluid>
            <Row>
            {Products.map((Prod, ind)=>{
              return <Prod index={ind}/>
            })}
            </Row>
        </Container>
        </>
        
    )
}

export default Cards
