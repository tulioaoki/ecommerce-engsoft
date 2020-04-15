import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import PresentationPage from '../components/HomePageComponents/PresentationPage';

import Footer from '../components/HomePageComponents/Footer';

import Servicos from '../components/HomePageComponents/Servicos';

const styles = () => ({
  root: {
    justifyContent: 'center',
    justifyItens: 'center',
    maxHeight: '100%',
    width: '100%',
    minWidth: '100%',
    margin: 0,
    //backgroundColor: '#e3e8eb',
    flexDirection: 'column',
  },
});

class HomePage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (      
        <div className={classes.root}>
          <PresentationPage />
          <Servicos/>
          <Footer showSocialMedia={true}> </Footer> 
          {/*Se o props passado for true, exiba as redes sociais*/ }
        </div> 
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info,
});

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(HomePage)));
