import React, {useContext, Fragment, useState} from 'react';
import {Form, Row, Col} from 'react-bootstrap';

import {FormContext} from '../Forms/FormContext';

import '../../App.scss';

import Element from '../../pages/Forms/Element';

function Radio({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
  field_mandatory,
  yes_options,
  registered_keeper_fields,
  dynamic_fields,
  CNG_fitment_fields,
  PA_cover_paid_fields,
  legal_owner_fields,
  policy_yes_option,
  errors,
}) {
  const {handleChange} = useContext (FormContext);

  const [registeredKeeperChecked, setRegisteredKeeperChecked] = useState (
    false
  );
  const [legalOwnerChecked, setLegalOwnerChecked] = useState (false);
  const [policy_yes_optionChecked, setpolicy_yes_optionChecked] = useState (
    false
  );

  const [dynamic_fieldsChecked, setdynamic_fieldsChecked] = useState (false);

  const [CNG_fitment_fieldsChecked, setCNG_fitment_fieldsChecked] = useState (
    false
  );
  const [
    PA_cover_paid_fieldsChecked,
    setPA_cover_paid_fieldsChecked,
  ] = useState (false);

  const radioButtonCheck = e => {
    if (document.getElementById ('addcoveryes').checked) {
      setRegisteredKeeperChecked (true);
    } else setRegisteredKeeperChecked (false);

    if (document.getElementById ('addcovernonelectricalyes').checked) {
      setdynamic_fieldsChecked (true);
    } else setdynamic_fieldsChecked (false);

    if (document.getElementById ('add_CNG_fitment_yes').checked) {
      setCNG_fitment_fieldsChecked (true);
    } else setCNG_fitment_fieldsChecked (false);
    if (document.getElementById ('paidpassengeryes').checked) {
      setPA_cover_paid_fieldsChecked (true);
    } else setPA_cover_paid_fieldsChecked (false);

    if (document.getElementById ('policy_holder_yes_claim_bonus').checked) {
      setLegalOwnerChecked (true);
    } else setLegalOwnerChecked (false);

    if (document.getElementById ('yes_noclaim_bonus').checked) {
      setpolicy_yes_optionChecked (true);
    } else setpolicy_yes_optionChecked (false);
  };

  return (
    <Form.Group>
      <Form.Label id="radio-button-label">{field_label}</Form.Label>
      {field_mandatory === 'yes'
        ? <span className="mandatory"><b> * </b></span>
        : ' '}
      <br />
      <Row>
        {field_options.length > 0 &&
          field_options.map ((option, i1) => (
            <Fragment key={i1}>
              <Col lg={3} key={i1}>
                <Form.Group
                  id="radio-button-field"
                  className="radio-button"
                  onChange={e => radioButtonCheck (e)}
                >
                  <input
                    id={option.option_id}
                    name={field_id}
                    className="radio-button-input"
                    type="radio"
                    value={option.option_value}
                    checked={field_value === option.option_value}
                    onChange={event => handleChange (field_id, event)}
                  />
                  {' '}{' '}
                  <Form.Label>{option.option_label}</Form.Label>
                </Form.Group>
              </Col>

            </Fragment>
          ))}
      </Row>
      <span style={{color: 'red'}}>{errors ? errors : ''}</span>

      <div style={{display: dynamic_fieldsChecked ? 'block' : 'none'}}>
        <Row>
          {dynamic_fields.length > 0 &&
            dynamic_fields.map ((sub_field2, i2) => {
              return (
                <Col lg={5} key={i2}>
                  <Element key={i2} field={sub_field2} />
                </Col>
              );
            })}
        </Row>
      </div>

      <div style={{display: CNG_fitment_fieldsChecked ? 'block' : 'none'}}>
        <Row>
          {CNG_fitment_fields.length > 0 &&
            CNG_fitment_fields.map ((sub_field3, i3) => {
              return (
                <Col lg={5} key={i3}>
                  <Element key={i3} field={sub_field3} />
                </Col>
              );
            })}
        </Row>
      </div>
      <div style={{display: PA_cover_paid_fieldsChecked ? 'block' : 'none'}}>
        <Row>
          {PA_cover_paid_fields.length > 0 &&
            PA_cover_paid_fields.map ((sub_field4, i4) => {
              return (
                <Col lg={5} key={i4}>
                  <Element key={i4} field={sub_field4} />
                </Col>
              );
            })}
        </Row>
      </div>

      <div style={{display: registeredKeeperChecked ? 'block' : 'none'}}>
        <Row>
          {registered_keeper_fields.length > 0 &&
            registered_keeper_fields.map ((sub_field5, i5) => {
              return (
                <Col lg={5} key={i5}>
                  <Element key={i5} field={sub_field5} />

                </Col>
              );
            })}
        </Row>
      </div>

      <div style={{display: legalOwnerChecked ? 'block' : 'none'}}>
        <Row>
          {legal_owner_fields.length > 0 &&
            legal_owner_fields.map ((sub_field6, i6) => {
              return (
                <Col lg={6} key={i6}>
                  <Element key={i6} field={sub_field6} />

                </Col>
              );
            })}
        </Row>
      </div>
      <div style={{display: policy_yes_optionChecked ? 'block' : 'none'}}>
        <Row>
          {policy_yes_option.length > 0 &&
            policy_yes_option.map ((sub_field7, i7) => {
              return (
                <Col lg={6} key={i7}>

                  <Element key={i7} field={sub_field7} />

                </Col>
              );
            })}

        </Row>
      </div>

    </Form.Group>
  );
}

export default Radio;
