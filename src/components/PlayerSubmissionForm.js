import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onPlayerSubmit = (event) => {
    event.preventDefault();
    
    const submission = `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`;
    
    this.props.addSubmissionCallBack(submission);

    this.setState ({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }

  isInputValid = (input) => {
    console.log(input)
    if (input === ''){
      return "PlayerSubmissionFormt__input--invalid"
    }
  }

  render() {
    const fields = this.props.fields.map((field) => {
      if (field.key) {
        const k = field.key
        const p = field.placeholder
        return <input
                className={this.isInputValid(this.state[k])}
                name={k}
                placeholder={p}
                type="text"
                onChange={this.onInputChange} 
                value={this.state[k]} />
      } else {
        return field;
      }
    })
    
    if(!this.props.finalPoem) {
      return (
        <div className="PlayerSubmissionForm">
          <h3>Player Submission Form for Player #{this.props.player}</h3>

          <form className="PlayerSubmissionForm__form" onSubmit={this.onPlayerSubmit} >
            <div className="PlayerSubmissionForm__poem-inputs">
              {fields}
            </div>             
            <div className="PlayerSubmissionForm__submit">
              <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
            </div>
          </form>
        </div>
      );  
    
    } else {
      return('')
    }
  }
}

PlayerSubmissionForm.propTypes = {
  addSubmissionCallBack: PropTypes.func,
  player: PropTypes.number.isRequired,
  finalPoem: PropTypes.bool.isRequired,
};

export default PlayerSubmissionForm;
