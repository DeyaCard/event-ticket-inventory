import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        {/* <label>
          Pick your ticket:
          <select value={this.state.value} onChange=
          {this.handleChange}>
            <option value="red">Red</option>
          </select>
        </label> */}
        
        <input
          type='text'
          name='name'
          placeholder='Ticket Type' />
        <input
          type='text'
          name='location'
          placeholder='Section' />
        <input
          type='number'
          min='20'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          min='1'
          name='quantity'
          placeholder='Quantity' />
          <br />
          <br />
        <button style={{
          "padding": ".5em 1em",
          "backgroundColor": "darkblue",
          "color": "white",
          "fontSize": "1.25rem",
          "border": "none",
          "cursor": "pointer",
          "borderRadius": ".25em"}
          } type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;