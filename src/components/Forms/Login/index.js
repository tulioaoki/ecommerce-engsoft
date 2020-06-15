import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { AZUL_ESCURO } from '../../../utils/colors';
import { handleLoginUser } from '../../../actions/User';

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
    maxWidth: '500px'
  }
});

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      newLogin: '',
      newPass: ''
    };
  }

  render() {
    const { classes, dispatch /** history, cadastro**/ } = this.props;


    const handleChangeNewPass = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, newpass: value }));
    };

    const handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };

    const handleLogin = () => {
      console.log(this.state)
      const {login, password} = this.state;
      dispatch(handleLoginUser({login,password}))
    }

    
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
            <Button className={classes.btnStyle}
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
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <Button className={classes.btnStyle}
              fullWidth
              variant="contained"
              color="primary"
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
};

export default withRouter(connect()(withStyles(styles)(LoginForm)));
