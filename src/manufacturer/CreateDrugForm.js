import React, { Component } from "react";

class CreateDrugForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DrugName: "",
      SerialNo: "",
      ManufacturingDate: "",
      ExpiryDate: "",
      CompanyCRN: "",
      OrganizationRole: "",
    };
  }

  handleDrugName = (event) => {
    this.setState({
      DrugName: event.target.value,
    });
  };
  handleSerialNo = (event) => {
    this.setState({
      SerialNo: event.target.value,
    });
  };

  handleManufacturingDate = (event) => {
    this.setState({
      ManufacturingDate: event.target.value,
    });
  };

  handleExpiryDate = (event) => {
    this.setState({
      ExpiryDate: event.target.value,
    });
  };

  handleCompanyCRN = (event) => {
    this.setState({
      CompanyCRN: event.target.value,
    });
  };

  handleOrganizationRole = (event) => {
    this.setState({
      OrganizationRole: event.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          <label>DrugName</label>
          <input
            type="text"
            value={this.state.DrugName}
            onChange={this.handleDrugName}
          ></input>
          <label>SerialNo</label>
          <input
            type="text"
            value={this.state.SerialNo}
            onChange={this.handleSerialNo}
          ></input>
          <label>ManufacturingDate</label>
          <input
            type="text"
            value={this.state.ManufacturingDate}
            onChange={this.handleManufacturingDate}
          ></input>
          <label>ExpiryDate</label>
          <input
            type="text"
            value={this.state.ExpiryDate}
            onChange={this.handleExpiryDate}
          ></input>
          <label>CompanyCRN</label>
          <input
            type="text"
            value={this.state.CompanyCRN}
            onChange={this.handleCompanyCRN}
          ></input>
          <label>OrganizationRole</label>
          <input
            type="text"
            value={this.state.OrganizationRole}
            onChange={this.handleOrganizationRole}
          ></input>
        </div>
      </form>
    );
  }
}

export default CreateDrugForm;
