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
    console.log (newMainEventList)
    this.setState({
      mainEventList: newMainEventList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedEvent = (id) => {
    const selectedEvent = this.state.mainEventList.filter(event => event.id === id)[0];
    this.setState({selectedEvent: selectedEvent});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingEventInList = (eventToEdit) => {
    const index = this.state.mainEventList.indexOf(this.state.selectedEvent);
    let editedMainEventList = this.state.mainEventList
      .filter((event) => event.id !== eventToEdit.id)
      editedMainEventList.splice(index, 0, eventToEdit);
      this.setState({
        mainEventList: editedMainEventList,
        editing: false,
        selectedEvent: null
      });
  }

  handleDeletingEvent = (id) => {
    const newMainEventList = this.state.mainEventList.filter(event => event.id !== id);
    this.setState({
      mainEventList: newMainEventList,
      selectedEvent: null
    });
  }

  handleBuyingEventTicket = (id) => {
    const selectedItem = this.state.mainEventList.filter(
      (event) => event.id === id
    )[0];
    const index = this.state.mainEventList.indexOf(selectedItem);
    selectedItem.quantity -= 1;

    let editedMainEventList = this.state.mainEventList
      .filter((event) => event.id !== id);
      editedMainEventList.splice(index, 0, selectedItem);
      this.setState({
        mainEventList: editedMainEventList,
        editing: false,
        selectedEvent: null
      });
  }

  handleRestockClick = (id) => {
    const selectedItem = this.state.mainEventList.filter(
      (event) => event.id === id
    )[0];
    const index = this.state.mainEventList.indexOf(selectedItem);
    selectedItem.quantity = 50;

    let editedMainEventList = this.state.mainEventList
      .filter((event) => event.id !== id);
      editedMainEventList.splice(index, 0, selectedItem);
      this.setState({
        mainEventList: editedMainEventList,
        editing: false,
        selectedEvent: null
      });
  }


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
        eventTicket = {this.state.selectedEvent}
        onEditEvent = {this.handleEditingEventInList} 
      />
    buttonText = "View List";
  } else if (this.state.selectedEvent != null) {
    currentlyVisibleState = 
      <EventDetail 
        event = {this.state.selectedEvent} 
        onClickingDelete = {this.handleDeletingEvent}
        onClickingEdit = {this.handleEditClick} 
        onClickingRestock = {this.handleRestockClick}
      />
    buttonText = "View List";
  } else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = 
      <NewEventForm onNewEventCreation={this.handleAddingNewEventToList}  
      />;
    buttonText = "View List";
  } else {
    currentlyVisibleState = 
      <EventList 
        eventList = {this.state.mainEventList} 
        onEventSelection = {this.handleChangingSelectedEvent} 
        onClickingBuy = {this.handleBuyingEventTicket}
        />;
    buttonText = "Add New Tickets HERE";
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