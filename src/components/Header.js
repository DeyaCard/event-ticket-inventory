import React from "react";
import eventImage from "./../img/ol_reign.JPG";

function Header() {
  return (
    <React.Fragment>
      <h1 style={{backgroundColor: "darkblue", color: "white"}}>Ol Reign Ticket Sales</h1>
        <div>
          <img src={eventImage} alt="An image of Tobin Heath in Lumen Field" class="center"/>
        </div>
    </React.Fragment>
  );
}

export default Header;

