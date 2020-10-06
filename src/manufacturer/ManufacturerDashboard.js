import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import CreateDrugForm from "./CreateDrugForm";
import ViewPurchaseOrderForm from "./ViewPurchaseOrderForm";
import CreateShipmentForm from "./CreateShipmentForm";
import ViewShipmentForm from "./ViewShipmentForm";
import ViewDrugLifeCycleForm from "./ViewShipmentForm";

class ManufacturerDashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props, null, 2));
    // Here we initialize our components state
    this.state = {
      showForm: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(showForm) {
    this.state.showForm = true;
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <p>Manufacturer Dashboard</p>
        <div>
          <CreateDrugForm />
        </div>
        <div>
          <CreateShipmentForm />
        </div>
      </div>
    );
  }
}
export default ManufacturerDashboard;
