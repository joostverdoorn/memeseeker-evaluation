import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Typography from 'material-ui/Typography';
import HelpIcon from 'material-ui-icons/HelpOutline';

import Done from 'material-ui-icons/Done';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

import Help from './Help';

// const phrases = ['function', 'pumping lemma']

const styles = theme => ({
  title: {
    textAlign: 'center',
    margin: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  headline: {
    textAlign: 'center',
    margin: 16
  },
  stepper: {
    backgroundColor: 'transparent'
  }
});


class Task extends Component {
  constructor({ field }) {
    super();

    fetch(`/data/${field}`).then(response => response.json()).then(phrases => this.setState({ phrases }));

    this.state = {
      phrases: [],
      relevancies: {},
      showHelp: false
    };
  };

  handleSubmit = async () => {
    await fetch(`/data/${this.props.field}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.relevancies)
    });

    this.props.history.push('/thanks');
  };

  handleChange = (event, relevancy) => {
    const { relevancies, phrases } = this.state;
    const { step } = this.props;
    this.setState({ relevancies: { ...relevancies, [phrases[step]]: relevancy } });
  };

  render() {
    const { classes, step, onPrev, onNext, field } = this.props;
    const { relevancies, phrases, showHelp } = this.state;

    const phrase = phrases[step]
    const relevancy = relevancies[phrase];

    return (
      <div>
        {showHelp && <Help field={field} onNext={() => this.setState({ showHelp: false })} />}

        <Card className={classes.card}>
          <CardContent>
            <Typography type="caption" align="center" gutterBottom>
              How relevant is the following term to your field of study?
            </Typography>
            <Typography type="headline" align="center" gutterBottom>
              {phrase}
            </Typography>

            <FormControl component="fieldset" required className={classes.fieldset}>
              <RadioGroup
                aria-label="relevancy"
                name="relevancy"
                value={relevancy}
                onChange={this.handleChange}
              >
                <FormControlLabel value="0" control={<Radio />} className={classes.label} label="Irrelevant" />
                <FormControlLabel value="1" control={<Radio />} className={classes.label} label="Marginally relevant" />
                <FormControlLabel value="2" control={<Radio />} className={classes.label} label="Relevant" />
                <FormControlLabel value="3" control={<Radio />} className={classes.label} label="Highly relevant" />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>

        <MobileStepper
          className={classes.stepper}
          type="progress"
          steps={phrases.length}
          position="static"
          activeStep={step}
          nextButton={
            step < phrases.length - 1 ?
              <Button dense onClick={onNext} disabled={relevancy == null}>
                Next
                <KeyboardArrowRight />
              </Button> :
              <Button dense color="primary" onClick={this.handleSubmit} disabled={relevancy == null}>
                Submit
                <Done />
              </Button>
          }
          backButton={
            <Button dense onClick={onPrev} disabled={step === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
        <center>
          <Button fab color="accent" onClick={() => this.setState({ showHelp: true })}>
            <HelpIcon />
          </Button>
        </center>
      </div>
    );
  }
}

export default withStyles(styles)(Task);
