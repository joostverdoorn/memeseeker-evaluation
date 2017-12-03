import React from 'react';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle, DialogActions, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import MobileStepper from 'material-ui/MobileStepper';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';


const styles = {
  button: {
    float: 'right'
  },
  stepper: {
    backgroundColor: 'transparent'
  }
};

const fieldMap = {
  aerospace: 'Aerospace Engineering',
  compsci: 'Computer Science',
  datascience: 'Data Science',
  medicine: 'Medicine',
  psychology: 'Psychology',
  philoshopy: 'Philosophy'
};

const Task = ({ onNext, field, open, classes }) => {
  const fieldName = fieldMap[field];
  return (
    <Dialog open={true}>
      <DialogTitle>
        Thank you very much!
      </DialogTitle>

      <DialogContent>
        <Typography type="body1" paragraph>
          Your contribution is very valuable to us.
        </Typography>

        <DialogActions>
          <Button dense color="primary" onClick={onNext}>
            Next
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default withStyles(styles)(Task);
