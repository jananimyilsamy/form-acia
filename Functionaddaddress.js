import React, {useState} from 'react';
import {Form, Button, Col, Row, Container} from 'react-bootstrap';

import {v4 as uuidv4} from 'uuid';

function Functionaddaddress () {
  const [inputFields, setInputFields] = useState ([
    {id: uuidv4 (), Address1: '', Address2: '', Country: '', Zipcode: ''},
  ]);

  const handleSubmit = e => {
    e.preventDefault ();
    console.log ('InputFields', inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map (i => {
      if (id === i.id) {
        console.log (i, id);
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields (newInputFields);
  };

  const handleAddFields = () => {
    setInputFields ([
      ...inputFields,
      {id: uuidv4 (), Address1: '', Address2: '', Country: '', Zipcode: ''},
    ]);
  };

  const handleRemoveFields = id => {
    const values = [...inputFields];
    values.splice (values.findIndex (value => value.id === id), 1);
    setInputFields (values);
  };

  return (
    <Container>
      <h1>Add Address</h1>
      <Form onSubmit={handleSubmit}>
        {inputFields.map (inputField => (
          <div key={inputField.id}>
            <label>Address1</label>
            <Form.Control
              name="Address1"
              value={inputField.Address1}
              onChange={event => handleChangeInput (inputField.id, event)}
            />
            <label>Address2</label>
            <Form.Control
              name="Address2"
              value={inputField.Address2}
              onChange={event => handleChangeInput (inputField.id, event)}
            />
            <label>Country</label>
            <Form.Control
              name="Country"
              value={inputField.Country}
              onChange={event => handleChangeInput (inputField.id, event)}
            />
            <label>Zipcode</label>
            <Form.Control
              name="Zipcode"
              value={inputField.Zipcode}
              onChange={event => handleChangeInput (inputField.id, event)}
            />

            <Button
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields (inputField.id)}
            >
              remove
            </Button>
            <Button onClick={handleAddFields}>add</Button>
          </div>
        ))}
        <Button type="submit" onClick={handleSubmit}>
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Functionaddaddress;
