import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='gift'
          placeholder='Free Gift' />
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