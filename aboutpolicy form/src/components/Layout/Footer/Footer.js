import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../../scss/styles/footer.css';
export default function Footer () {
  return (
    <Container fluid={'true'} className="footerContainer">

      <Row fluid={'true'} className="footer-outer-Row mb-3">

        <Col className="footer-Column" lg={3}>
          <div className="aciaLogo" />
          <div className="description">
            ACIA is a complete insurance product solution that is pre packaged
          </div>
        </Col>

        <Col className="footer-Column">
          <div className="columnTitle"><b>Learn More</b></div>
          <ul className="list-unstyled py-0">
            <li><a className="innerLink py-1" href="/#">How it works?</a></li>
            <li><a className="innerLink py-1" href="/#">Pricing</a></li>
            <li><a className="innerLink py-1" href="/#">Media Release</a></li>
            <li><a className="innerLink py-1" href="/#">Sitemap</a></li>
          </ul>

        </Col>

        <Col className="footer-Column">
          <div className="columnTitle"><b>Support</b></div>
          <ul className="list-unstyled py-0">
            <li><a className="innerLink py-1" href="/#">FAQ</a></li>
            <li><a className="innerLink py-1" href="/#">Contact Us</a></li>
          </ul>

        </Col>

        <Col className="footer-Column">
          <div className="columnTitle"><b>About Us</b></div>
          <ul className="list-unstyled py-0">
            <li><a className="innerLink py-1" href="/#">About</a></li>
            <li><a className="innerLink py-1" href="/#">Careers</a></li>
            <li>
              <a className="innerLink py-1" href="/#">Terms of Service</a>
            </li>
            <li><a className="innerLink py-1" href="/#">Privacy Policy</a></li>
          </ul>
        </Col>

        <Col className="footer-Column">
          <div className="columnTitle py-0"><b>We're in Social</b></div>
          <Row fluid={'true'} className="pt-3 px-3">
            <Col lg={4} className="p-0">
              <Image
                className="facebook"
                src={require ('../../../assets/images/Group 216.png').default}
                alt="facebook"
              />
            </Col>
            <Col lg={4} className="p-0 ">
              <Image
                className="linkedIn"
                src={require ('../../../assets/images/Group 215.png').default}
                alt="linkedIn"
              />
            </Col>
          </Row>

          <Row fluid={'true'} className="pt-3 px-3">
            <Col lg={4} className="p-0">
              <Image
                className="twitter"
                src={require ('../../../assets/images/Group 217.png').default}
                alt="twitter"
              />
            </Col>
            <Col lg={4} className="p-0">
              <Image
                className="youTube"
                src={require ('../../../assets/images/Group 218.png').default}
                alt="youtube"
              />
            </Col>
          </Row>

        </Col>
      </Row>

      <Row fluid={'true'} className="footer-outer-Row pt-3 pb-5">

        <div className="alignText"> US & CAN: 1 - 855 -758-0984 </div>
        <div className="alignText"> Worldwide: +1-424-781-3315 </div>

      </Row>

      <Row lg={12} className="pt-3">
        <hr className="horizontalLine" />
        <p className="py-4 bottomLine">All rights reserved. ACIA 2021</p>
      </Row>

    </Container>
  );
}
