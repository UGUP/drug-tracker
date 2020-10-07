import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class Registerorganization extends React.Component {
  constructor(props) {
    super();
    console.log(JSON.stringify(props, null, 2));
  }

  componentDidMount() {
    this.props.onDialogClosed();
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.openCreateOrganizationDialogue}
          onClose={() => this.props.onDialogClosed()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Organization</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the deatils beow to register an Organization
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="companyCRN"
              label="Company CRN"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="companyName"
              label="Company Name"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="Location"
              label="Location"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="organisationRole"
              label="OrganisationRole"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onDialogClosed} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.onDialogClosed} color="primary">
              Create Organization
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
