import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEventForm(props){
  const { eventTicket } = props;

  function handleEditEventFormSubmission(event) {
    event.preventDefault()
    
    const name = !event.target.name.value ? event.name : event.target.name.value;
    const location = !event.target.location.value ? event.location : event.target.location.value;
    const price = !event.target.price.value ? event.price : parseInt(event.target.price.value);
    
    props.onEditEvent({
      name: name, 
      location: location, 
      price: price, 
      quantity: eventTicket.quantity,
      id: eventTicket.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditEventFormSubmission}
        buttonText="Update Event Ticket" />
    </React.Fragment>
  )
}

EditEventForm.propTypes = {
  event: PropTypes.object,
  onEditEvent: PropTypes.func
}

export default EditEventForm;