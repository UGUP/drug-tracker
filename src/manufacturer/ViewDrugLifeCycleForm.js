import React, { Component } from "react";

class ViewDrugLifeCycleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DrugName: "",
      SerialNo: "",
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

  render() {
    return (
      <form>
        <div>
          <label>DrugName</label>
          <input
            type="text"
            value={this.state.DrugName}
            onChange={this.DrugName}
          ></input>
          <label>SerialNo</label>
          <input
            type="text"
            value={this.state.SerialNo}
            onChange={this.handleSerialNo}
          ></input>
        </div>
      </form>
    );
  }
}

export default ViewDrugLifeCycleForm;
