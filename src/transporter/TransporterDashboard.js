import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import Button from "@material-ui/core/Button";
import CreateShipmentDialogue from "../DialogueForms/CreateShipmentDialogue";
import ViewShipmentDialogue from "../DialogueForms/ViewShipmentDialogue";
import UpdateShipmentDialogue from "../DialogueForms/UpdateShipmentDialogue";
class TransporterDashboard extends React.Component {
  constructor(props) {
    super();
    console.log(JSON.stringify(props, null, 2));
    // Here we initialize our components state
    this.state = {
      showUpdateForm: false,
      showCreateShipmentForm: false,
      showViewShipmentForm: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.onDialogClosed = this.onDialogClosed.bind(this);
    this.handleCreateShipmentClick = this.handleCreateShipmentClick.bind(this);
    this.onCreateShipmentDialogClosed = this.onCreateShipmentDialogClosed.bind(
      this
    );
    this.handleViewShipmentClick = this.handleViewShipmentClick.bind(this);
    this.onViewShipmentDialogClosed = this.onViewShipmentDialogClosed.bind(
      this
    );
  }

  handleClick() {
    console.log("Setting show form to true");
    this.setState({
      showUpdateForm: true,
    });
  }

  onDialogClosed() {
    console.log("On Dialog Closed");
    this.setState({
      showUpdateForm: false,
    });
  }

  handleCreateShipmentClick() {
    console.log("Setting show form to true");
    this.setState({
      showCreateShipmentForm: true,
    });
  }

  onCreateShipmentDialogClosed() {
    console.log("On Dialog Closed");
    this.setState({
      showCreateShipmentForm: false,
    });
  }

  handleViewShipmentClick() {
    console.log("Setting show form to true");
    this.setState({
      showViewShipmentForm: true,
    });
  }

  onViewShipmentDialogClosed() {
    console.log("On Dialog Closed");
    this.setState({
      showViewShipmentForm: false,
    });
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <p> Transporter Dashboard</p>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleCreateShipmentClick}
          >
            Create Shipment
          </Button>
          <CreateShipmentDialogue
            openCreateShipmentDialogue={this.state.showCreateShipmentForm}
            onDialogClosed={this.onCreateShipmentDialogClosed}
          />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleViewShipmentClick}
          >
            View Shipments
          </Button>
          <ViewShipmentDialogue
            openViewShipmentDialogue={this.state.showViewShipmentForm}
            onDialogClosed={this.onViewShipmentDialogClosed}
          />
        </div>
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClick}>
            Update Shipment
          </Button>
          <UpdateShipmentDialogue
            openUpdateShipmentDialogue={this.state.showUpdateForm}
            onDialogClosed={this.onDialogClosed}
          />
        </div>
      </div>
    );
  }
}
export default TransporterDashboard;
