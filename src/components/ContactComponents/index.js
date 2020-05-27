import axios from 'axios';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TextField from '@material-ui/core/TextField';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { TITLE } from '../../utils/colors';
import { AZUL_ESCURO } from '../../utils/colors';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    marginBottom: '50px',
  },
    title: {
    color: TITLE,
    fontWeight: '600',
    fontSize: '20px',
    marginTop: '30px',
    marginBottom: '10px',
  }, 
});

class ContactComponents extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {     
    };
  }

  
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={6}>

            <Grid item xs={12} sm={12} style={{backgroundColor: 'pink', border: '2px solid black'}}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Contato
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} style={{backgroundColor: 'red'}}> {/*mudar o backgroundColor: '#f2f2f2'*/}
                <Typography component="h2" variant="h6" className={classes.title}>
                    Horário de Funcionamento
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} style={{backgroundColor: 'blue'}} >
                <Typography component="h2" variant="h6" className={classes.title}>
                    Intereja Conosco
                </Typography>
            </Grid>

            <Grid item xs={12} sm={12} style={{backgroundColor: 'yellow', border: '2px solid black'}}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Equipe de desenvolvimento
                </Typography>
            </Grid>

        </Grid>
      </div>
    );
  }
}

ContactComponents.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};


export default withRouter(connect()(withStyles(styles)(ContactComponents)));
