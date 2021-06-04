import React, {Fragment} from 'react';
import '../../scss/styles/HomePage.css';
import {Container, Card, Image, Row, Col, Button} from 'react-bootstrap';
import {ArrowRight} from 'react-bootstrap-icons';
import '../../scss/styles/MotorInsurancePage.css';
import {ButtonGroup, DropdownButton, Dropdown} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import '../../scss/styles/header.css';

import headercontent from '../../components/Layout/Header/header.json';

export default function HomePage () {
  const history = useHistory ();

  const loadMotorInusrancePage = () => {
    history.push ('/motor-insurance');
  };

  return (
    <Fragment>
      <div className="header">
        <Row>

          {headercontent.map ((item1, i) => {
            return (
              <Col xs={2} md={4} lg={6} className="mx-4">
                <p className="title1">
                  {item1.Title1}<span className="title2">
                    {item1.Title2}

                  </span>
                </p>
                <p className="content">
                  {item1.content1}

                  <br />
                  {' '}
                  {item1.content2}

                </p>
                <div className="container-button">
                  <div className="container">
                    <ButtonGroup style={{alignItems: 'center'}}>
                      <DropdownButton
                        variant="light"
                        title={
                          <span className="dropdown-title1">
                            {item1.Dropdown1}
                          </span>
                        }
                        id="bg-nested-dropdown"
                      >
                        <Dropdown.Item eventKey="1">
                          Dropdown link
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Dropdown link
                        </Dropdown.Item>
                      </DropdownButton>
                      <DropdownButton
                        variant="light"
                        as={ButtonGroup}
                        title={
                          <span className="dropdown-title2">
                            {item1.Dropdown2}
                          </span>
                        }
                        id="bg-nested-dropdown"
                      >
                        <Dropdown.Item eventKey="1">
                          Dropdown link
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="2">
                          Dropdown link
                        </Dropdown.Item>
                      </DropdownButton>
                      <Button
                        onClick={loadMotorInusrancePage}
                        className="go-button"
                        variant="light"
                      >
                        <span className="go">Go{' '}&gt;</span>

                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </Col>
            );
          })}
          <Col lg={1} />

          {headercontent.map ((item1, i) => {
            return (
              <Col className="family-image">
                <img
                  src={
                    require (`../../assets/images/${item1.imagename}.png`)
                      .default
                  }
                  width="375px"
                  height="425px"
                  alt="React Bootstrap logo"
                />
              </Col>
            );
          })}

        </Row>
      </div>
      <Container fluid className="car-description-container">

        <Row fluid>
          <Col lg={6}>
            <Image
              className="car-image"
              src={require ('../../assets/images/section2.png').default}
              alt=""
            />
          </Col>

          <Col lg={6} xs={true} md={true} className="mt-5 pr-5 pt-5">

            <div className="car-firstRow-firstPart  pt-5  pb-2">
              Find the
              <span className="car-firstRow-secondPart">
                {' '} Right Motor insurance for your family
              </span>
            </div>

            <div className="car-secondRow py-2">
              Life throws many unexpected things at all of us. While we usually
              can't stop these things from occuring. we can opt to give our live
              a bit of protection. Insurance is meant to give us some measure of
              protection, at least financially, should a disaster happen There
              are numerous insurance options available, and many financial
              experts tell us that we need to have those insurance policies in
              place Yet, with so many options, it can be difficult to determine
              what insurance you really need. Purchasing the right insurance is
              always determined by your specific situation Here comes the best
              choice.
            </div>

          </Col>
        </Row>

      </Container>

      <Container fluid className="car-description-container">

        <Row fluid>

          <Col xs={6} md={4} lg={4} className="mt-5 pl-5 pr-0 pt-5">

            <div className="car-firstRow-firstPart  pt-5 pl-0 pb-2">
              Free Quote and
              {' '}
              <span className="car-firstRow-secondPart  ">
                {' '}Instant Online Cover
              </span>
            </div>

            <div className="car-secondRow py-2 ">
              Life throws many unexpected things at all of us. While we  usually
              can't stop these things from occuring. we can opt to give our live
              a bit of protection. Insurance is meant to give us some measure of
              protection, at least financially, should a disaster happen There
              are numerous insurance options available, and many financial
              experts tell us that we need to have those insurance policies in
              place Yet, with so many options, it can be difficult to determine
              what insurance you really need. Purchasing the right insurance is
              always determined by your specific situation Here comes the best
              choice.
            </div>

          </Col>
          <Col xs={6} md={4} lg={6} className=" pl-0 ">
            <Image
              className="car-image"
              src={require ('../../assets/images/section3.png').default}
              alt=""
            />
          </Col>

        </Row>

      </Container>

      {/* ----------------------------------------------Get Quote------------------------------------------------*/}
      <Fragment>
        <Container fluid className="quote-container my-5">

          <Row className="quote-inner-container mx-5 py-5">
            <Col lg={7} className="px-5">
              <div className="quote-textArea pt-5 pb-3">
                Exception Customer Service
              </div>
              <div className="quote-innerTextArea py-3">
                All of our client care team works in our office ands is an experienced web meeting user
                ready to help you. Never outsourced.
              </div>
              <div className="pt-3 pb-5">
                <Button className="quote-Button">Get Quote Now</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={7} />
            <Col className="quote-imageArea" lg={5}>
              <Image
                src={require ('../../assets/images/Group 90.png').default}
                alt=""
              />
            </Col>
          </Row>

        </Container>
        {/* <div className='quote-imageArea'>
  <Image src={require('../../assets/images/Group 90.png').default} />
</div> */}

      </Fragment>

      {/* ----------------------------------------------------------------------------------------------------------- */}
      <Container>
        <h1 className="card-heading" style={{}}>
          <b>Our Awesome Benefits</b>
        </h1>

        <Row>
          <Col className="card-col1">
            <Card className="card1">
              <Card.Img
                src={require ('../../assets/images/card1.png').default}
                alt=""
                className="card-image1"
              />
              <Card.Body>
                <Card.Title className="card-title1">
                  <h4><b>Customer Greetings</b></h4>
                </Card.Title>
                <Card.Text className="card-text1">
                  All of our client care team
                  works in our office ands is an
                  experienced web meeting
                  user ready to help you. Never
                  outsourced.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="card-col2">
            <Card className="card2">
              <Card.Img
                src={require ('../../assets/images/card2.png').default}
                alt=""
                className="card-image2"
              />
              <Card.Body>
                <Card.Title className="card-title2">
                  <h4><b>Worldwide Access</b></h4>
                </Card.Title>
                <Card.Text className="card-text2">
                  All of our client care team
                  works in our office ands is an
                  experienced web meeting
                  user ready to help you. Never
                  outsourced.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="card-col3">
            <Card className="card3">
              <Card.Img
                src={require ('../../assets/images/card3.png').default}
                alt=""
                className="card-image3"
              />
              <Card.Body>
                <Card.Title className="card-title3">
                  <h4><b>Realtime Network</b></h4>
                </Card.Title>
                <Card.Text className="card-text3">
                  All of our client care team
                  works in our office ands is an
                  experienced web meeting
                  user ready to help you. Never
                  outsourced.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br />

        <Row>
          <Col className="card-col4">
            <Card className="card4">
              <Card.Img
                src={require ('../../assets/images/card4.png').default}
                alt=""
                className="card-image4"
              />
              <Card.Body>
                <Card.Title className="card-title4">
                  <h4><b>Analytics</b></h4>
                </Card.Title>
                <Card.Text className="card-text4">
                  All of our client care team
                  works in our office ands is an
                  experienced web meeting
                  user ready to help you. Never
                  outsourced.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="card-col5">
            <Card className="card5">
              <Card.Img
                src={require ('../../assets/images/card5.png').default}
                alt=""
                className="card-image5"
              />
              <Card.Body>
                <Card.Title className="card-title5">
                  <h4><b>Administration</b></h4>
                </Card.Title>
                <Card.Text className="card-text5">
                  All of our client care team
                  works in our office ands is an
                  experienced web meeting
                  user ready to help you. Never
                  outsourced.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="card-col6">
            <Card className="card6">
              <img
                src={require ('../../assets/images/card6.png').default}
                alt=""
                className="card-image6"
              />
              <Card.Body>
                <Card.Title className="card-title6">
                  <h4><b>Top Customer Service</b></h4>
                </Card.Title>
                <Card.Text className="card-text6">
                  All of our client care team
                  works in our office ands is an
                  experienced web meeting
                  user ready to help you. Never
                  outsourced.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* -------------------------------------------Join with Us------------------------------------------------ */}

      <Container fluid className="join-container">
        <Row fluid>
          <Col lg={12} className="m-5 p-5 ">

            <div className="join-inLineHead px-5 py-3">
              Choose, Get Quote & Buy Simply
            </div>

            <div className="join-container-description px-5 py-3">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              {' '}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              {' '}
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              {' '}
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              {' '}
            </div>

            <div className="px-5 py-3" style={{textAlign: 'center'}}>

              <Button className="join-Btn px-3 py-2">
                Join with Us
                <ArrowRight className="arrow" />
              </Button>

            </div>

          </Col>
        </Row>
      </Container>

      {/* -------------------------------Organisation------------------------------------------ */}

      <Container fluid className="organisation-container my-3 mx-2">

        <Row fluid className="py-5">

          <Col className="px-5" lg={3} xs={12} md={6}>
            <Image
              className="logoIpsum"
              src={require ('../../assets/images/Mask Group 11.png').default}
              alt="logoIpsum"
            />
          </Col>

          <Col className="px-5" lg={3} xs={12} md={6}>
            <Image
              className="amara"
              src={require ('../../assets/images/Mask Group 12.png').default}
              alt="amara"
            />
          </Col>

          <Col className="px-5" lg={3} xs={12} md={6}>
            <Image
              className="aven"
              src={require ('../../assets/images/Mask Group 13.png').default}
              alt="aven"
            />
          </Col>

          <Col className="px-5" lg={3} xs={12} md={6}>
            <Image
              className="treva"
              src={require ('../../assets/images/Mask Group 14.png').default}
              alt="treva"
            />
          </Col>

        </Row>

      </Container>

    </Fragment>
  );
}
