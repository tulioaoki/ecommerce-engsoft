/* eslint-disable react/prefer-stateless-function */
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from '../NavBar';
import TopBar from '../TopBar';

const styles = () => ({
  container: {

  },
});

class PresentationPaper extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <TopBar />
        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info,
});

PresentationPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(PresentationPaper)));
