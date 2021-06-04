import React, {useContext, Fragment} from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import '../../App.scss';
import {FormContext} from '../Forms/FormContext';
// import MultiSelect from 'react-multi-select-component';
const Checkboxmultipleselect = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
  field_mandatory,
  errors,
}) => {
  const {handleChange} = useContext (FormContext);
  //   const [ischecked, setischecked] = useState (false);
  const radioButtonCheck = e => {};
  //   const radioButton = (id, event) => {
  //     // console.log ('field', id);

  //     field_options.map ((sub_field, i) => {
  //       if (id === sub_field.option_id) {
  //         console.log ('subfields', sub_field.option_id, id);
  //       }
  //     });
  //   };

  return (
    <Form.Group>
      <Form.Label id="radio-button-label">{field_label}</Form.Label>
      {field_mandatory === 'yes'
        ? <span className="mandatory"><b> * </b></span>
        : ' '}
      <br />
      <Row>
        {field_options.length > 0 &&
          field_options.map ((option, i) => (
            <Fragment key={i}>
              <Col lg={3}>
                <Form.Group
                  id="radio-button-field"
                  className="radio-button"
                  onChange={e => radioButtonCheck (e)}
                >
                  <input
                    id={option.option_id}
                    name={field_id}
                    className="radio-button-input"
                    type="checkbox"
                    value={option.option_value}
                    // checked={field_value === option.option_value}
                    onChange={event => handleChange (field_id, event)}
                    // onClick={e => radioButton (field_id, e)}
                  />
                  {' '}{' '}
                  <Form.Label>{option.option_label}</Form.Label>
                </Form.Group>

              </Col>

            </Fragment>
          ))}
      </Row>
    </Form.Group>
  );
};

export default Checkboxmultipleselect;
