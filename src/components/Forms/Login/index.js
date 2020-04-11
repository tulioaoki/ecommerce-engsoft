import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {AZUL_ESCURO} from '../../../utils/colors';

import {
  Button, Input, InputLabel, withStyles,
} from '@material-ui/core';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    'justify-content': 'space-around',
  },
  formItem: {
    display: 'flex',
    flex: 1,
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
        <div className={classes.container}>
        {(()=>{
            if(cadastro){
              return (<div className={classes.formItem}>
                <InputLabel>Nome</InputLabel>
                <Input
                  id="Nome"
                  multiline={false}
                  type="text"
                />
              </div>)
            }
          })()}
          <div className={classes.formItem}>
            <InputLabel>Login</InputLabel>
            <Input
              id="login"
              value={login}
              onChange={(e) => handleChangeLogin(e)}
              multiline={false}
              type="text"
            />
          </div>
          <div className={classes.formItem}>
            <InputLabel>Password</InputLabel>
            <Input
              id="password"
              value={pass}
              onChange={handleChangePass}
              multiline={false}
              type="password"
            />
          </div>
          {(()=>{
            if(cadastro){
              return <Button className={classes.btnLogin} onClick={onClick} variant="contained" color={"primary"} fullWidth={1} type="submit">Cadastrar</Button>
            }else{
              return <Button className={classes.btnLogin} onClick={onClick} variant="contained" color={"primary"} fullWidth={1} type="submit">Entrar</Button>
            }
          })()}
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
