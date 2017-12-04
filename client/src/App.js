import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import ConsentForm from './ConsentForm';
import Task from './Task';
import Help from './Help';
import Bye from './Bye';
import Thanks from './Thanks';
import SelectField from './SelectField';

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class App extends Component {
  state = {
    consent: null
  };

  render() {
    const { consent } = this.state;
    const { classes } = this.props;

    return (
      <div>
        {consent == null ?
          <ConsentForm open={true} onAgree={() => this.setState({ consent: true })} onDisagree={() => this.setState({ consent: false })} />  :

          (<div className={classes.container}>
            <Route exact path="/" render={() => {
              return consent === true ?
                <Redirect to="/field" /> :
              consent === false ?
                <Redirect to="/bye" />  : null
            }} />

            <Grid container justify={'center'}>
              <Grid item xs={12} sm={8} lg={4}>
                <Switch>
                  <Route exact path="/field">
                    <SelectField onSelect={() => {}} />
                  </Route>

                  <Route exact path="/field/:field/" render={props => {
                    const { history, match: { params: { field } } } = props;
                    const onNext = () => history.push(`/field/${field}/0`);
                    return <Help onNext={onNext} field={field} />;
                  }} />

                  <Route exact path="/thanks" render={props => {
                    return <Thanks />;
                  }} />

                  <Route exact path="/bye" render={props => {
                    return <Bye />;
                  }} />

                  <Route path="/field/:field/:step" render={props => {
                    const { history, match: { params: { step, field } } } = props;
                    const stepNumber = Number(step);
                    const onNext = () => history.push(`/field/${field}/${stepNumber + 1}`);
                    const onPrev = () => history.push(`/field/${field}/${stepNumber - 1}`);
                    return <Task {...props} step={stepNumber} field={field} onPrev={onPrev} onNext={onNext} />
                  }} />
                </Switch>
              </Grid>
            </Grid>
          </div>)

        }



      </div>
    );
  }
}

export default withStyles(styles)(App);
