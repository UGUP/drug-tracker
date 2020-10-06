import React, { Component } from "react";

class ViewPurchaseOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BuyerCRN: "",
      DrugName: "",
      Quantity: "",
      Status: "",
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

  handleQuantity = (event) => {
    this.setState({
      Quantity: event.target.value,
    });
  };

  handleStatus = (event) => {
    this.setState({
      Status: event.target.value,
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
          <label>Quantity</label>
          <input
            type="text"
            value={this.state.Quantity}
            onChange={this.handleQuantity}
          ></input>
          <label>Status</label>
          <input
            type="text"
            value={this.state.Status}
            onChange={this.handleStatus}
          ></input>
        </div>
      </form>
    );
  }
}

export default ViewPurchaseOrderForm;
