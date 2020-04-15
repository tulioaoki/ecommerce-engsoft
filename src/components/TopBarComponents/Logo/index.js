import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
} from '@material-ui/core';
import logoImage from '../../../static/images/logo.png';

const styles = () => ({
  imgLogo: {
    height: '70px', // definir tamanho da imagem
    width: '200px',
  },
  imgDiv: {
    display: 'flex',
  },
});

class Logo extends PureComponent {
  render() {
    const {
      classes,
      history,
    } = this.props;

    return (
      <div className={classes.styles}>
        <img
          src={logoImage}
          className={classes.imgLogo}
          onClick={() => (history.push('/home'))}
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
