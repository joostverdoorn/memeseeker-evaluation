import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle, DialogActions, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = {
  paragraph: {
    marginTop: 16
  }
};

const ConsentForm = ({ onAgree, open, classes }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>
        Consent Form
      </DialogTitle>

      <DialogContent>
        <Typography component="p" className={classes.paragraph}>
          The purpose of this study is to evaluate a novel method for extracting core concepts from online
          discussion platforms, in this case science‐oriented discussions on the platform Reddit. This
          evaluation is being conducted by Joost Verdoorn, MSc student at the TU Delft. You are invited to
          participate in this evaluation because you have at least a Master’s or comparable level within the
          fields of Aerospace Engineering, Computer Science, Data Science, Medicine, Philosophy or
          Psychology.
        </Typography>

        <Typography component="p" className={classes.paragraph}>
          Your participation in this research study is voluntary. You may choose not to participate.
          If you decide to participate in this research survey, you may withdraw at any time.
          If you decide not to participate in this study or if you withdraw from participating at any time, you
          will not be penalized. If you do not complete the survey, it will be treated as a withdrawal and your
          answers thus far will not be used.
        </Typography>

        <Typography component="p" className={classes.paragraph}>
          The procedure involves filling an online survey that will take approximately 30 minutes.
          Your responses will be confidential and we do not collect identifying information,
          such as your name or email address. The survey questions will be about whether the short phrases
          provided denote relevant concepts within your field of study.
          We will keep your information confidential.
        </Typography>

        <Typography component="p" className={classes.paragraph}>
          All data is stored in a password protected electronic format.
          To help protect your confidentiality, the survey is fully anonymous and we will not store any
          information that will personally identify you, including IP addresses.
          The results of this study will only be used for the creation of scholarly publications.
          If you have any questions about the research study, please contact Joost Verdoorn (<a href="mailto:jpverdoorn@gmail.com" rel="noopener noreferrer" target="_blank">jpverdoorn@gmail.com</a>).
        </Typography>

        <Typography component="p" className={classes.paragraph}>
          This research has been reviewed by TU Delft’s <a href="https://www.tudelft.nl/over-tu-delft/towards-a-new-strategy/integriteitsbeleid/wetenschappelijke-integriteit/research-ethics/" rel="noopener noreferrer" target="_blank">Human Research Ethics Committee</a>.
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button dense color="primary" onClick={onAgree}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(ConsentForm);
