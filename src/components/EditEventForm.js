import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEventForm(props){
  // const { event } = props;

  function handleEditEventFormSubmission(event) {
    event.preventDefault();
    props.onEditEvent({
      name: event.target.name.value, 
      location: event.target.location.value, 
      price: event.target.price.value, 
      quantity: event.target.quantity.value,
      id: event.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditEventFormSubmission}
        buttonText="Update Event Ticket" />
    </React.Fragment>
  );
}

EditEventForm.propTypes = {
  event: PropTypes.object,
  onEditEvent: PropTypes.func
};

export default EditEventForm;