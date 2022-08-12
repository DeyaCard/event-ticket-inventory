import React from "react";
import PropTypes from "prop-types";

function Event(props) {
  const myStyles = {
    backgroundColor: '#000080',
    color: "white",
    fontFamily: 'Verdana',
    paddingTop: '5px',
    padding: '20px'
  }
  return (
    <React.Fragment>
      <div style={myStyles}>
        <div onClick = {() => props.whenEventClicked(props.id)}>
          <h3>{props.name}</h3>
          <h4>{props.location}</h4>
          <h4>${props.price}</h4>
          <h4>{props.quantity}</h4>
        </div>
      </div>
    </React.Fragment>
  );
}

Event.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Event;
