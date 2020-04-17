import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// Material Components
import { Paper, Typography, withStyles } from '@material-ui/core';

import LoginForm from '../components/Forms/Login';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import { AZUL_ESCURO } from '../utils/colors';


import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';

const styles = () => ({
  root: {
    backgroundColor: AZUL_ESCURO,
    color: '#fafafa',
    borderRadius: '5px',
    paddingTop: '18px',
  },
});

class Login extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <TopBar />
        <NavBar />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Login);
