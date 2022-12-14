import React from "react";
import Event from "./Event";
import PropTypes from "prop-types";

function EventList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.eventList.map((event) =>
        <Event
          whenEventClicked={props.onEventSelection}
          name={event.name}
          location={event.location}
          price={event.price}
          quantity={event.quantity}
          ticketsLeft={event.ticketsLeft}
          id={event.id}
          key={event.key}
          whenBuyClicked={props.onClickingBuy}
        />
      )}
    </React.Fragment>
  );
}

EventList.propTypes = {
  eventList: PropTypes.array,
  onEventSelection: PropTypes.func
};

export default EventList;