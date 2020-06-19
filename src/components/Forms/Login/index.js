import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withSnackbar } from 'notistack';
import { AZUL_ESCURO } from '../../../utils/colors';
import { handleLoginUser, handleRegisterUser } from '../../../actions/User';

import { isLogged } from '../../../utils/extra';
import { handleGetCart } from '../../../actions/cart';
import { handleGetFavorites } from '../../../actions/favorites';


const styles = () => ({
  btnStyle: {
    backgroundColor: AZUL_ESCURO,
    color: '#fafafa',
    borderRadius: '5px',
    paddingTop: '18px',
  },
  formBox: {
    paddingTop: '50px',
  },
  input: {
    maxWidth: '500px',
  },
});

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      newLogin: '',
      newPass: '',
    };
  }

  render() {
    const { classes, dispatch, history /** history, cadastro* */ } = this.props;


    const handleChangeNewPass = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, newpass: value }));
    };

    const handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const handleLogin = async () => {
      const { login, password } = this.state;
      const { history } = this.props;
      await dispatch(handleLoginUser({ login, password })).then((r) => {
        if (typeof r !== 'undefined') {
          this.props.enqueueSnackbar('Bem vindo(a) a loja!',
            { variant: 'success', autoHideDuration: 3000 });
        } else {
          this.props.enqueueSnackbar('Credenciais incorretas!',
            { variant: 'error', autoHideDuration: 3000 });
        }
      });
      if (isLogged()) {
        await dispatch(handleGetCart());
        await dispatch(handleGetFavorites());
        history.push('/');
      }
    };

    const handleRegister = async () => {
      const { newLogin, newPassword } = this.state;
      const { history } = this.props;
      await dispatch(handleRegisterUser({ newLogin, newPassword })).then((r) => {
        if (typeof r !== 'undefined') {
          this.props.enqueueSnackbar('Seu cadastro foi efetuado!',
            { variant: 'success', autoHideDuration: 3000 });
        } else {
          this.props.enqueueSnackbar('Verifique os dados e tente novamente!',
            { variant: 'error', autoHideDuration: 3000 });
        }
      });
      if (isLogged()) {
        await dispatch(handleGetCart());
        await dispatch(handleGetFavorites());
        history.push('/');
      }
    };

    return (
      <div className="container">
        <div className={classes.formBox}>
          <Typography component="h1" variant="h5">
            Já sou cliente
          </Typography>
          <form className={classes.input} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="login"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className={classes.btnStyle}
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Logar
            </Button>
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
              name="newLogin"
              autoComplete="email"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              required
              fullWidth
              name="newPassword"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className={classes.btnStyle}
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    );
  }
}


LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

const mapStateToProps = ({}, props) => ({
})


const LoginFormComponentsWithSnack = withSnackbar(LoginForm);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(LoginFormComponentsWithSnack)));
