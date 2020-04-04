import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Logo from '../../TopBarComponents/Logo';
import SearchBox from '../../TopBarComponents/SearchBox';
import {
  withStyles, Typography,
} from '@material-ui/core';


const styles = () => ({
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0.9375rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
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
        <Logo></Logo>
        <SearchBox></SearchBox>
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
