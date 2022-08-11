import React from "react";
import NewEventForm from "./NewEventForm";
import EventList from "./EventList";
import EventDetail from "./EventDetail";
import EditEventForm from "./EditEventForm";


class EventControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainEventList: [],
      selectedEvent: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedEvent != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEvent: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewEventToList = (newEvent) => {
    const newMainEventList = this.state.mainEventList.concat(newEvent);
    this.setState({
      mainEventList: newMainEventList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedEvent = (id) => {
    const selectedEvent = this.state.mainEventList.filter(event => event.id === id)[0];
    this.setState({selectedEvent: selectedEvent});
  }

  // style = {
  //   "margin": "auto",
  //   "justifyContent": "center",
  //   "alignItem": "center",
  // }

  btn = {
    "backgroundColor": "#dc143c",
    "color": "white",
    "fontSize": "20px",
    "padding": "10px 60px",
    "borderRadius": "25px",
    "margin": "10px 0px",
    "cursor": "pointer"
  }

render() {
  let currentlyVisibleState = null;
  let buttonText = null;

  if (this.state.editing) {
    currentlyVisibleState = 
      <EditEventForm
        event = {this.state.selectedEvent}
        onEditEvent = {this.handleEditingEventInList} />
    buttonText = "View List";
  } else if (this.state.selectedEvent != null) {
    currentlyVisibleState = 
      <EventDetail 
        event = {this.state.selectedEvent} 
        onClickingDelete = {this.handleDeletingEvent}
        onClickingEdit = {this.handleEditClick} />
    buttonText = "View List";
  } else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = 
      <NewEventForm onNewEventCreation={this.handleAddingNewEventToList}  />;
    buttonText = "View List";
  } else {
    currentlyVisibleState = 
      <EventList eventList={this.state.mainEventList} 
         onEventSelection={this.handleChangingSelectedEvent} />;
    buttonText = "View Tickets HERE";
  }


  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button style={this.btn} onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

}

export default EventControl;