import React from "react";
import eventImage from "./../img/ol_reign.JPG";

function Header() {
  return (
    <React.Fragment>
      <h1 style={{backgroundColor: "darkblue", color: "white", textAlign: "center"}}>OL REIGN TICKET SALES</h1>
        <div>
          <img src={eventImage} alt="An image of Tobin Heath in Lumen Field" className="center"/>
        </div>
        <br />
    </React.Fragment>
  );
}

export default Header;

