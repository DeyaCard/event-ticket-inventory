import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewEventForm(props){
  function handleNewEventFormSubmission(event) {
    event.preventDefault();
    const name = !event.target.name.value ? "General Admission" : event.target.name.value;
    const location = !event.target.location.value ? "North End" : event.target.location.value;
    const price = !event.target.price.value ? 20 : parseInt(event.target.price.value);
    const quantity = !event.target.quantity.value ? "50" : parseInt(event.target.quantity.value);


    props.onNewEventCreation({
      name: name, 
      location: location, 
      price: price, 
      quantity: quantity,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewEventFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
};

export default NewEventForm;