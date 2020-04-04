import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import TopBar from '../TopBar';
import bg from '../../../static/images/ecommerce.jpg';

const styles = () => ({
  container: {
    
  },
});

class PresentationPaper extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <TopBar style={{ alignSelf: 'flex-start' }} />
        <Typography style={{
          color: 'white',
          fontSize: 40,
          fontWeight: 'bolder',
          alignSelf: 'center',
          textShadow: '2px 2px 2px #8E8E8E',
        }}
        >
        </Typography>

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
