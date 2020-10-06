import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import CreateDrugForm from "./CreateDrugForm";
import ViewPurchaseOrderForm from "./ViewPurchaseOrderForm";
import CreateShipmentForm from "./CreateShipmentForm";
import ViewShipmentForm from "./ViewShipmentForm";
import ViewDrugLifeCycleForm from "./ViewShipmentForm";
import FormDialog from './DialogExample';
import Button from '@material-ui/core/Button';
import CreateDrugForm2 from './CreateDrugForm2'

class ManufacturerDashboard extends React.Component {
  
  constructor(props) {
    super();
    console.log(JSON.stringify(props, null, 2));
    // Here we initialize our components state
    this.state = {
      showForm: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.onDialogClosed = this.onDialogClosed.bind(this);
  }

  handleClick() {
    console.log("Setting show form to true");
    this.setState({
      showForm: true
   })
  }

  onDialogClosed() {
    console.log("On Dialog Closed");
    this.setState({
      showForm: false
   })
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <p>Manufacturer Dashboard</p>
        <div>
        <Button variant="outlined" color="primary" onClick={this.handleClick}>
          Open form dialog
        </Button>
        <CreateDrugForm2 
          openCreateDrugForm={this.state.showForm}
          onDialogClosed={this.onDialogClosed}/>
        </div>
      </div>
    );
  }
}
export default ManufacturerDashboard;
