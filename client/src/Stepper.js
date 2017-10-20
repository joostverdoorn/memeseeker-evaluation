import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Done from 'material-ui-icons/Done';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

const phrases = ['function', 'pumping lemma']

const styles = theme => ({
  container: {
    width: '100vw',
    maxWidth: 400,
  },
  card: {
    margin: 16
  },
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
  fieldset: {
    width: '100%'
  },
  label: {
    margin: 0,
  },
  stepper: {
    position: 'relative',
    bottom: 0,
    boxSizing: 'border-box'
  }
});


class Stepper extends Component {
  state = {
    currentPhrase: 0,
    phrases,
    relevancies: {}
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  handleNext = () => {
    this.setState({
      currentPhrase: this.state.currentPhrase + 1,
    });
  };

  handleBack = () => {
    this.setState({
      currentPhrase: this.state.currentPhrase - 1,
    });
  };

  handleSubmit = () => {
    console.log('submit that shit!');
  };

  handleChange = (event, relevancy) => {
    const { relevancies, phrases, currentPhrase } = this.state;
    this.setState({ relevancies: { ...relevancies, [phrases[currentPhrase]]: relevancy } });
  };

  render() {
    const { classes } = this.props;
    const { relevancies, phrases, currentPhrase } = this.state;

    const phrase = phrases[currentPhrase]
    const relevancy = relevancies[phrase];

    return (
      <div className={classes.container}>
        <Typography type="body1" className={classes.title}>
          How relevant is the following term to your field of study?
        </Typography>
        <Typography type="headline" className={classes.headline} component="h2">
          {phrase}
        </Typography>

        <Card className={classes.card}>
          <FormControl component="fieldset" required className={classes.fieldset}>
            <RadioGroup
              aria-label="relevancy"
              name="relevancy"
              value={relevancy}
              onChange={this.handleChange}
            >

              <FormControlLabel value="0" control={<Radio />} className={classes.label} label="Not relevant" />
              <Divider light />
              <FormControlLabel value="1" control={<Radio />} className={classes.label} label="Marginally relevant" />
              <Divider light />
              <FormControlLabel value="2" control={<Radio />} className={classes.label} label="Relevant" />
              <Divider light />
              <FormControlLabel value="3" control={<Radio />} className={classes.label} label="Highly relevant" />
            </RadioGroup>
          </FormControl>
        </Card>

        <MobileStepper
          className={classes.stepper}
          type="progress"
          steps={phrases.length}
          position="static"
          activeStep={this.state.currentPhrase}
          nextButton={
            currentPhrase < phrases.length - 1 ?
              <Button dense onClick={this.handleNext} disabled={relevancy == null}>
                Next
                <KeyboardArrowRight />
              </Button> :
              <Button dense color="primary" onClick={this.handleSubmit} disabled={relevancy == null}>
                Submit
                <Done />
              </Button>
          }
          backButton={
            <Button dense onClick={this.handleBack} disabled={currentPhrase === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Stepper);
