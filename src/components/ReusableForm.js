import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  const formStyle = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div style={formStyle}>
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
                    </div>

          <br />
          <br />
        <button style={{
          "padding": ".6em 3.5em",
          "backgroundColor": "darkblue",
          "color": "white",
          "fontSize": "1.25rem",
          "border": "none",
          "cursor": "pointer",
          "borderRadius": "1.25em"}
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