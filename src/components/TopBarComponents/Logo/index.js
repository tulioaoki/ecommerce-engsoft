import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import logoImage from '../../../static/images/logo.png';
import {
  withStyles, Typography,
} from '@material-ui/core';

const styles = () => ({
    imgLogo: {
        width: 'auto',
        height: '70px',
    },
});

class Logo extends PureComponent {
    render() {
      const {
        classes,
        history,
      } = this.props;
  
      return (
        <div style={{display:'flex'}}>
          <img src={logoImage} className={classes.imgLogo}
              onClick={() => (history.push('/home'))}
              style={{
                display:'flex',
                width: '200px',
              }}
          />

        </div>
      );
    }
  }

  Logo.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  
  Logo.defaultProps = {
  };
  
  export default withRouter(connect()(withStyles(styles)(Logo)));
