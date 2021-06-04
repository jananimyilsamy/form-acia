import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../App.scss';

class Addaddress extends React.Component {
  state = {
    countries: [],
  };
  addelement () {
    this.setState ({countries: [...this.state.countries, '']});
  }
  handleChange (e, index) {
    this.state.countries[index] = e.target.value;

    this.setState ({countries: this.state.countries});
  }
  handleChange1 (e, index) {
    this.state.countries[index] = e.target.value;

    this.setState ({countries: this.state.countries});
  }

  handleRemove (e, index) {
    this.state.countries.splice (index, 1);
    console.log (this.state.countries, 'remove');
    this.setState ({countries: this.state.countries});
  }
  handlesubmit (e) {
    console.log (this.state, 'submit');
  }
  render () {
    return (
      <div>

        <hr />

        {this.state.countries.map ((country, index) => {
          return (
            <div>
              <div key={index}>
                <label>address1</label>
                <input
                  onChange={e => this.handleChange (e, index)}
                  value={country}
                />
                &nbsp;&nbsp;
                &nbsp;&nbsp;

                <button onClick={e => this.handleRemove (e, index)}>
                  {' '}removeaddress
                </button>

              </div>

            </div>
          );
        })}

        <hr />
        <button onClick={e => this.addelement (e)}> add address</button>
        <hr />
        <button onClick={e => this.handlesubmit (e)}> submit</button>

      </div>
    );
  }
}
export default Addaddress;
