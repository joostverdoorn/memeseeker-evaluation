import React from 'react';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle, DialogActions, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import MobileStepper from 'material-ui/MobileStepper';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import HelpIcon from 'material-ui-icons/HelpOutline';


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

const Help = ({ onNext, field, open, classes }) => {
  const fieldName = fieldMap[field];
  return (
    <Dialog open={true}>
      <DialogTitle>
        Task
      </DialogTitle>

      <DialogContent>
        <Typography type="body1" paragraph>
          You will be presented with phrases that were automatically extracted from {fieldName}-related
          discussion posts on Reddit. You are asked to specify for these phrases whether they
          represent <strong>irrelevant</strong>, <strong>marginally relevant</strong>,&nbsp;
          <strong>relevant</strong> or <strong>highly relevant</strong> concepts within the field of&nbsp;
          {fieldName}. All phrases have been transformed to lower case, and classification should
          therefore be performed in a non-case-senstivie manner.
        </Typography>

        <Typography type="title" gutterBottom>
          Irrelevant
        </Typography>
        <Typography type="caption">
          For example, one or more of the following statements about the phrase is true.
        </Typography>
        <Typography paragraph>
          <ul>
            <li>The phrase is not a meaningful concept. </li>
            <li>The phrase does not denote a concept within {fieldName} or any related field. </li>
            <li>The phrase does only partially denote a meaningful concept within {fieldName} or a related field. </li>
          </ul>
        </Typography>

        <Typography type="title" gutterBottom>
          Marginally relevant
        </Typography>
        <Typography type="caption">
          For example, one or more of the following statements about the phrase is true.
        </Typography>
        <Typography paragraph>
          <ul>
            <li>The phrase denotes a concept within a related field of {fieldName}. </li>
            <li>The phrase denotes a concept that is sometimes used in relation to a concept within {fieldName}. </li>
            <li>The phrase denotes a concept that is used to derive a concept within {fieldName}. </li>
          </ul>
        </Typography>

        <Typography type="title" gutterBottom>
          Relevant
        </Typography>
        <Typography type="caption">
          For example, one or more of the following statements about the phrase is true.
        </Typography>
        <Typography paragraph>
          <ul>
            <li>The phrase denotes a concept within {fieldName}. </li>
            <li>The phrase probably present in master level of formal education into {fieldName}. </li>
            <li>The phrase denotes a topic that is discussed from time to time within {fieldName}. </li>
            <li>The phrase denotes a concept on which some other concepts within {fieldName} build. </li>
          </ul>
        </Typography>

        <Typography type="title" gutterBottom>
          Highly relevant
        </Typography>
        <Typography type="caption">
          For example, one or more of the following statements about the phrase is true.
        </Typography>
        <Typography paragraph>
          <ul>
            <li>The phrase denotes a seminal concept within {fieldName}. </li>
            <li>The phrase denotes a topic that is presented in the bachelor level of formal education into {fieldName}.  </li>
            <li>The phrase denotes a topic that is often discussed within {fieldName}. </li>
            <li>The phrase denotes a concept on which many other concepts within {fieldName} build. </li>
          </ul>
        </Typography>

        <Typography type="body1" paragraph>
          At any moment during the task, you can return to this text by pressing the Help icon (<HelpIcon />) at the bottom of the page.
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button dense color="primary" onClick={onNext}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(Help);
