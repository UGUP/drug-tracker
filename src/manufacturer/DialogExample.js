import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="drug-name"
            label="Drug Name"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="serial-number"
            label="Serial Number"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="manufacturer-date"
            label="Manufacturer Date"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="expiry-date"
            label="Expiry Date"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="company-crn"
            label="Company CRN"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="organization-role"
            label="Organization Role"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
