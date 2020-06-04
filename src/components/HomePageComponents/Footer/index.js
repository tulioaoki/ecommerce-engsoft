import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  withStyles, Grid
} from '@material-ui/core';
import SocialMedia from '../../FooterComponents/SocialMedia';

import CopyrightIcon from '@material-ui/icons/Copyright';

const styles = () => ({
  root: {
    width: '100%',
    bottom: 0,
    backgroundColor: 'white',
  },
  footer: {
    backgroundColor: '#1F509C',
    fontSize: '.85rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '10px 0 10px 0',
    color: 'white',
  },
});

export class Footer extends PureComponent {
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        
        {/* Se o props passado for true, exiba as redes sociais */}
        {this.props.showSocialMedia
          && (
            <SocialMedia />
          )}
        <div className={classes.footer}>

          <Grid container >
            <Grid item xs={12} >
              <CopyrightIcon style={{ fontSize: '15px', paddingRight: '5px', paddingTop: '2px' }} /> Copyright 2020 Farmácia - All Rights Reserved.
              </Grid>
          </Grid>

        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  showSocialMedia: PropTypes.bool,
};

Footer.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Footer)));
