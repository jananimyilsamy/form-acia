import {Link, useHistory} from 'react-router-dom';
import {
  Col,
  Row,
  Button,
  
  ButtonGroup,
  DropdownButton,
  Dropdown,
 
} from 'react-bootstrap';
const history = useHistory ();

const loadMotorInusrancePage = () => {
  history.push ('/motor-insurance');
};

import '../../../scss/styles/header.css';
import {useState, useEffect} from 'react';
import React from 'react';
import headercontent from './header.json';

function Headerbody() {
     <Row>

  {headercontent.map ((item1, i) => {
    // var index = 0;
    // var x = window.location.href;

    // console.log (x);
    // if (x === 'http://localhost:3000/motor-insurance') {
    //   index = 1;
    // }
    // if (x === 'http://localhost:3000/') {
    //   index = 0;
    // }

    // console.log (i);
    // console.log (index);

    // if (i === index) {
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
            require (`../../../assets/images/${item1.imagename}.png`).default
          }
          width="375px"
          height="425px"
          alt="React Bootstrap logo"
        />
      </Col>
    );
  })}

</Row>;

}
export default Headerbody;