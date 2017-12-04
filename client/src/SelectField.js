import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Paper, MenuList, MenuItem } from 'material-ui';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  title: {
    textAlign: 'center',
    margin: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: 'none'
  }
});

const SelectField = ({ onAgree, onDisagree, open, classes }) => {
  return (

    <Card className={classes.card}>
      <CardContent>
        <Typography type="body1" className={classes.title}>
          Please select your field of study.
        </Typography>

        <MenuList>
          <Link to="/aerospace" className={classes.link}><MenuItem>Aerospace Engineering</MenuItem></Link>
          <Link to="/compsci" className={classes.link}><MenuItem>Computer Science</MenuItem></Link>
          <Link to="/datascience" className={classes.link}><MenuItem>Data Science</MenuItem></Link>
          <Link to="/medicine" className={classes.link}><MenuItem>Medicine</MenuItem></Link>
          <Link to="/psychology" className={classes.link}><MenuItem>Psychology</MenuItem></Link>
        </MenuList>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(SelectField);
