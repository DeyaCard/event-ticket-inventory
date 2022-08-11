import React from 'react'
import PropTypes from 'prop-types'

function EventDetail(props) {
  const { event, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2> Event Detail </h2>
      <h3>{event.name}</h3>
      <h3>{event.location}</h3>
      <h4>${event.price}</h4>
      <h4>${event.quantity}</h4>
      <button onClick={ props.onClickingEdit}>Update Event Details</button>
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