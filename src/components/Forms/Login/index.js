import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { AZUL_ESCURO } from '../../../utils/colors';

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

    const onClick = () => {
      history.push('/home/');
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
              onChange={handleChangeNewPass}
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
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Entrar
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
              type="submit"
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
