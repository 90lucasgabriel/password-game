import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AlertDialog extends React.Component {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: '',
      description: '',
    };
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    return (
      <div>
        <Button variant='outlined' color='primary'>
          Open alert dialog
        </Button>
        <Dialog
          open={this.state.open}
          // onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>{this.state.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {this.state.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary' autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
