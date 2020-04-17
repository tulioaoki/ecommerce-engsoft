import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { AZUL_ESCURO } from '../../../utils/colors';

import {
  Input, InputLabel,
} from '@material-ui/core';

const styles = () => ({
  root: {
    backgroundColor: AZUL_ESCURO,
    color: '#fafafa',
    borderRadius: '5px',
    paddingTop: '18px',
  },
  container_login: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    'justify-content': 'space-around',
  },
  formItem: {
    flexDirection: 'column',
    'justify-content': 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
  },
  btnLogin: {
    backgroundColor: AZUL_ESCURO,
    color: '#fafafa',
  }
});

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      pass: '',
    };
  }

  render() {
    const { classes, history, cadastro } = this.props;
    const { pass, login } = this.state;


    const handleChangeLogin = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, login: value }));
    };

    const handleChangePass = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, pass: value }));
    };

    const onClick = () => {
      history.push('/home/');
    };

    return (
      <>
        <div className='container'>
          <div style={{ paddingTop: '50px' }}>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Já sou cliente
          </Typography>
              <form className={classes.form} noValidate>
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
                <Button className={classes.root}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Entrar
            </Button>
              </form>
            </div>
          </div>

          <div style={{ paddingTop: '50px' }}>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Ainda não sou cliente
          </Typography>
              <form className={classes.form} noValidate>
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
                <Button className={classes.root}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Entrar
            </Button>
              </form>
            </div>
          </div>
        </div>
      </>

    );
  }
}


LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(LoginForm)));
