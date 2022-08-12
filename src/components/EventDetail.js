import React from 'react'
import PropTypes from 'prop-types'

function EventDetail(props) {
  const { event, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1> Event Details </h1>
      <h3>Ticket type: {event.name}</h3>
      <h3>Section: {event.location}</h3>
      <h3>Cost: ${event.price}</h3>
      <h3> Quantity: {event.quantity}</h3>
      <button onClick={ props.onClickingEdit}>Edit Event Details</button>
      <button onClick={()=> onClickingDelete(event.id) }>Delete</button>
      <hr/>
    </React.Fragment>
  )
}

EventDetail.propTypes = {
  event: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default EventDetail