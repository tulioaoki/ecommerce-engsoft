import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { AZUL_ESCURO } from '../../../utils/colors';
import { GoogleLogin } from 'react-google-login';

const styles = () => ({
  btnStyle: {
    backgroundColor: AZUL_ESCURO,
    color: '#fafafa',
    borderRadius: '5px',
    paddingTop: '18px',
    marginBottom: '18px',
  },
  formBox: {
    paddingTop: '50px',
  },
  input: {
    maxWidth: '500px'
  }
});

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      pass: '',
      newLogin: '',
      newPass: ''
    };
  }

  render() {
    const { classes, history, cadastro } = this.props;
    const { pass, login,newLogin,newPass } = this.state;


    const handleChangeLogin = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, login: value }));
    };

    const handleChangePass = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, pass: value }));
    };

    const handleChangeNewLogin = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, newlogin: value }));
    };

    const handleChangeNewPass = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, newpass: value }));
    };

    const onLogin = (event) => {
      event.preventDefault();
      //history.push('/home/');
      console.log('login: ');
      console.log(this.state.login);
      console.log('senha: ');
      console.log(this.state.pass);
    };

    const onRegister = (event) => {
      event.preventDefault();
      //history.push('/home/');
      console.log('novo login: ');
      console.log(this.state.newlogin);
      console.log('nova senha: ');
      console.log(this.state.newpass);
    };

    return (
      <div className='container'>
        <div className={classes.formBox}>
          <Typography component="h1" variant="h5">
            Já sou cliente
          </Typography>
          <form className={classes.input} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChangeLogin}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangePass}
            />
            <Button className={classes.btnStyle}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onLogin}
            >
              Entrar
            </Button>
            <GoogleLogin
              clientId="699271164668-449o9139ijnefrgevph7jf44j1f5bqcm.apps.googleusercontent.com"
              buttonText="Entrar com sua conta do Google"
              cookiePolicy={'single_host_origin'}
              disabled={false}
            />
          </form>

        </div>

        <div className={classes.formBox}>
          <Typography component="h1" variant="h5">
            Ainda não sou cliente
          </Typography>
          <form className={classes.input} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChangeNewLogin}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangeNewPass}
            />
            <Button className={classes.btnStyle}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onRegister}
            >
              Cadastrar
            </Button>
            <GoogleLogin
              clientId="699271164668-449o9139ijnefrgevph7jf44j1f5bqcm.apps.googleusercontent.com"
              buttonText="Cadastrar-se com sua conta do Google"
              cookiePolicy={'single_host_origin'}
              style={{width:'300px'}}
            />
          </form>
        </div>
      </div>
    );
  }
}


LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(LoginForm)));
