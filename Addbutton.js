import React from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import '../App.scss';

class Addbutton extends React.Component {
  state = {
    address_details: [
      {
        address1: '',
        address2: '',
        country: '',
        city: '',

        errors: [
          {
            address1: '',
            address2: '',
            country: '',
            city: '',
          },
        ],
      },
    ],
  };

  handleChange = idx => e => {
    const {name, value} = e.target;
    const address_details = [...this.state.address_details];
    address_details[idx][name] = value;
    this.setState ({
      address_details,
    });
    console.log (address_details);
  };

  handleAddRow = e => {
    e.preventDefault ();
    const item = {
      address1: '',
      address2: '',
      country: '',
      city: '',

      errors: [
        {
          address1: '',
          address2: '',
          country: '',
          city: '',
        },
      ],
    };
    this.setState ({
      address_details: [...this.state.address_details, item],
    });
  };

  handleRemoveSpecificRow = idx => e => {
    e.preventDefault ();
    const address_details = [...this.state.address_details];
    if (address_details.length === 1) {
      const address_details = [...this.state.address_details];
      address_details[idx] = {
        address1: null,
        address2: null,
        country: null,
        city: null,

        errors: [
          {
            address1: null,
            address2: null,
            country: null,
            city: null,
          },
        ],
      };
      this.setState ({
        address_details,
      });

      document.getElementById ('address1_0').value = null;
      document.getElementById ('address2_0').value = null;
      document.getElementById ('country_0').value = null;

      document.getElementById ('city_0').value = null;

      const showButton = this.props.action;
      showButton ();
    } else {
      address_details.splice (idx, 1);
      this.setState ({address_details});
    }
  };

  render () {
    return (
      <div>
        <div className="row">
          <div className="Col">

            {this.state.address_details.map ((item, idx) => (
              <Row id="address0" key={idx}>

                <Col>
                  <Col className="text-center" style={{fontSize: '17px'}}>
                    address1
                  </Col>

                  <Form.Control
                    id="address1_0"
                    type="text"
                    name="address1"
                    className="form-field form-control"
                    value={this.state.address_details[idx].address1}
                    onChange={this.handleChange (idx)}
                  />
                </Col>
                <Col>
                  <Col className="text-center" style={{fontSize: '17px'}}>
                    address2
                  </Col>
                  <Form.Control
                    id="address2_0"
                    type="text"
                    name="address2"
                    className="form-field form-control"
                    value={this.state.address_details[idx].address2}
                    onChange={this.handleChange (idx)}
                  />
                </Col>
                <Col>
                  <Col className="text-center" style={{fontSize: '17px'}}>
                    country
                  </Col>
                  <Form.Control
                    id="country_0"
                    type="text"
                    name="country"
                    className="form-field form-control"
                    value={this.state.address_details[idx].country}
                    onChange={this.handleChange (idx)}
                  />
                </Col>

                <Col>
                  <Col className="text-center" style={{fontSize: '17px'}}>
                    city
                  </Col>
                  <Form.Control
                    id="city_0"
                    type="text"
                    name="city"
                    className="form-field form-control"
                    value={this.state.address_details[idx].city}
                    onChange={this.handleChange (idx)}
                  />
                </Col>

                <Col>
                  <Button
                    variant="danger"
                    className="button-rounded btn-sm"
                    onClick={this.handleRemoveSpecificRow (idx)}
                  >
                    Remove
                  </Button>
                </Col>
                <Col>
                  <Button className="button-rounded btn-sm">
                    Edit
                  </Button>
                </Col>

              </Row>
            ))}

            <Button
              variant="info"
              onClick={this.handleAddRow}
              className="button-rounded btn-sm"
            >
              Addaddress
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Addbutton;
