import React from 'react';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle, DialogActions, DialogContent } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';

const styles = {};

const Bye = ({ classes }) => {
  return (
    <Dialog open={true}>
      <DialogTitle>
        Thank you for your interest!
      </DialogTitle>

      <DialogContent>
        <Typography type="body1" paragraph>
          The goal of this research is to develop a method for extracting <em>memes</em> — replicating patterns of behavior — from online correspondence.
          In our case, we analyze textual patterns, consisting of 1 through 4 words, extracted from science-oriented communities on the online platform Reddit.
          We find these memes by looking at what patterns of text a person was exposed to (i.e. what they read) and comparing these patterns with the patterns of text a person expresses (i.e. what they write).
          We expect that these memes correspond to important concepts within your field.
        </Typography>

        <Typography type="body1" paragraph>
          If you would like to know more about this research, please let us know at <a href="mailto:jpverdoorn@gmail.com">jpverdoorn@gmail.com</a>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(Bye);
