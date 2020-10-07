import React from "react";

import AdminMenu from "./AdminMenu";
import ManufacturerList from "./ManufacturerList";
import DistributorList from "./DistributorList";
import TransporterList from "./TransporterList";
import Button from "@material-ui/core/Button";
import RetailerList from "./RetailerList";
import RegisterOrganization from "../DialogueForms/Registerorganization";

class AdminDashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectmenu: "manufacturer",
      showForm: false,
    };
    this.selectMenu = this.selectMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onDialogClosed = this.onDialogClosed.bind(this);
  }

  handleClick() {
    console.log("Setting show form to true");
    this.setState({
      showForm: true,
    });
  }

  onDialogClosed() {
    console.log("On Dialog Closed");
    this.setState({
      showForm: false,
    });
  }

  selectMenu(value) {
    console.log("Select Menu updates");
    this.setState({
      selectmenu: value,
    });
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <AdminMenu selectMenu={this.selectMenu} />
        </div>
        <div style={{ width: "70%" }}>
          {(() => {
            switch (this.state.selectmenu) {
              case "manufacturer":
                return <ManufacturerList />;
              case "distributor":
                return <DistributorList />;
              case "transporter":
                return <TransporterList />;
              case "retailer":
                return <RetailerList />;
              default:
                return <ManufacturerList />;
            }
          })()}
        </div>
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClick}>
            Create Organization
          </Button>
          <RegisterOrganization
            openCreateOrganizationDialogue={this.state.showForm}
            onDialogClosed={this.onDialogClosed}
          />
        </div>
      </div>
    );
  }
}
export default AdminDashboard;
