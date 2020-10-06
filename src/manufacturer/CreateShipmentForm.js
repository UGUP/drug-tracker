import React, { Component } from "react";

class CreateShipmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BuyerCRN: "",
      DrugName: "",
      ListOfAssets: "",
      Transporter: "",
      OrganizationType: "",
    };
  }

  handleBuyerCRN = (event) => {
    this.setState({
      BuyerCRN: event.target.value,
    });
  };
  handleDrugName = (event) => {
    this.setState({
      DrugName: event.target.value,
    });
  };

  handleListOfAssets = (event) => {
    this.setState({
      ListOfAssets: event.target.value,
    });
  };

  handleTransporter = (event) => {
    this.setState({
      Transporter: event.target.value,
    });
  };

  handleOrganizationType = (event) => {
    this.setState({
      OrganizationType: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>BuyerCRN</label>
          <input
            type="text"
            value={this.state.BuyerCRN}
            onChange={this.handleBuyerCRN}
          ></input>
          <label>DrugName</label>
          <input
            type="text"
            value={this.state.DrugName}
            onChange={this.DrugName}
          ></input>
          <label>ListOfAssets</label>
          <input
            type="text"
            value={this.state.ListOfAssets}
            onChange={this.handleListOfAssets}
          ></input>
          <label>Transporter</label>
          <input
            type="text"
            value={this.state.Transporter}
            onChange={this.handleTransporter}
          ></input>
          <label>OrganizationType</label>
          <input
            type="text"
            value={this.state.OrganizationType}
            onChange={this.handleOrganizationType}
          ></input>
        </div>
      </form>
    );
  }
}

export default CreateShipmentForm;
