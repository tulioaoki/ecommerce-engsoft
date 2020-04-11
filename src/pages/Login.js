import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// Material Components
import { Paper, Typography, withStyles } from '@material-ui/core';
import LoginForm from '../components/Forms/Login';
import bg from '../static/images/ecommerce.jpg';

import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';

const styles = () => ({
  loginBlock: {
    backgroundColor: '#f2f2f2',
    maxHeight: 350,
    maxWidth: 420,
    height: '100%',
    width: '100%',
    borderRadius: 0,
    margin: '45px auto auto auto',
    padding: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenTitle: {
    textColor: '#0000',
    fontWeight: 'bold',
    fontSize: 35,
    width: '100%',
  },
  screenSubTitle: {
    textColor: '#0000',
    fontSize: 15,
    width: '100%',
  },
  fullW: {
    width: '100%',
  },
});

class Login extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      
      <div >
        <TopBar/>
        <NavBar/>
        <div style={{display: 'flex', flexDirection:'row'}}>
        <div className={`${classes.loginBlock} ${classes.container}`}>
          <div style={{
            display: 'flex', flexDirection: 'column', width: '30vw', alignSelf: 'center',
          }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="subheading"
                className={classes.screenTitle}
              >
                Já sou cliente
              </Typography>
              
            </div>
            <LoginForm style={{ padding: 100 }} />
          </div>
        </div>

        <div className={`${classes.loginBlock} ${classes.container}`}>
          <div style={{
            display: 'flex', flexDirection: 'column', width: '30vw', alignSelf: 'center',
          }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="subheading"
                className={classes.screenTitle}
              >
                Ainda não sou cliente
              </Typography>
              <Typography
                variant="subheading"
                className={classes.screenSubTitle}
              >
              Para comprar em nosso site é preciso realizar um cadastro. 
              E também ficará por dentro das novidades, ofertas e promoções.  
              </Typography>
              
            </div>
            <LoginForm cadastro style={{ padding: 100 }} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Login);
