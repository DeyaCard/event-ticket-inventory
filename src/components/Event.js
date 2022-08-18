import React from "react";
import PropTypes from "prop-types";

function Event(props) {
  let buyButtonVisible = null;
  let buttonText = null;

  if (props.quantity > 0) {
    buyButtonVisible = () => props.whenBuyClicked(props.id);
    buttonText = "Buy Event";

  }else {
    buttonText = "Event Sold Out";
  }
  const myStyles = {
    backgroundColor: '#000080',
    color: "white",
    fontFamily: 'Verdana',
    paddingTop: '5px',
    padding: '20px',
    margin: '10px'
  }


  return (
    <React.Fragment>
      <div style={myStyles}>
        <div onClick = {() => props.whenEventClicked(props.id)}>
          <h3>{props.name}</h3>
          <h4>{props.location}</h4>
          <h4>${props.price}</h4>
          <h4>{props.quantity}</h4>
          {/* <h4>Tickets Left: {props.quantity}</h4> */}
        </div>
          <button onClick = {buyButtonVisible}>{buttonText}</button>
      </div>
    </React.Fragment>
  );
}

Event.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  ticketsLeft: PropTypes.number,
  id: PropTypes.string,
  whenEventClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func,
};

export default Event;
