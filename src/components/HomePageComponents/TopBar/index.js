import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  withStyles, Typography,
} from '@material-ui/core';


const styles = () => ({
  container: {
    padding: 10,
    top: 0,
    position: 'absolute',
    width: '98%',
    maxHeight: '10vh',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    textShadow: '2px 2px 2px #8E8E8E',
  },
});

class TopBar extends PureComponent {
  render() {
    const {
      classes,
      history,
    } = this.props;

    return (
      <div className={classes.container}>
        <Typography
          onClick={() => (history.push('/home'))}
          style={{
            alignSelf: 'left',
            marginLeft: 50,
            fontSize: 50,
            fontFamily: 'GTWalsheim',
            fontWeight: 'bolder',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Barra Superior, edite-me
        </Typography>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

TopBar.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(TopBar)));
