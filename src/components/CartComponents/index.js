import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
} from '@material-ui/core';
import { TITLE } from '../../utils/colors';
import { AZUL_ESCURO } from '../../utils/colors';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    buttonCep: {
        backgroundColor: AZUL_ESCURO,
        color: '#fff',
        '&:hover': {
          backgroundColor: '#1a237e',
        },
    },
    title_CEP: {
        color: '#424242',
        fontSize: '15px'
    },
    
});

const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: AZUL_ESCURO,
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: AZUL_ESCURO,
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderColor: AZUL_ESCURO,
        borderWidth: 2,
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: AZUL_ESCURO,
        },
    },
    },
})(TextField);

class CartComponents extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const {
            history,
            classes,
        } = this.props;


        return (
            <div className={classes.root}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Meu Carrinho
                </Typography>

                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6} xl={6}>
                        <Paper variant="outlined" style={{ paddingBottom:'25px',paddingTop:'25px',paddingLeft:'70px', height: 'auto', backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                            <Typography component="p" variant="p" className={classes.title_CEP}>
                                calcular frete e prazo
                            </Typography>

                            <ValidationTextField style={{ height:'40px', marginTop: '10px'}} size='small' id="outlined-basic" label="CEP" variant="outlined" />
                            
                            <Button variant="contained" style={{ height: '40px', marginTop: '10px' }} className={classes.buttonCep} >
                                Calcular
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} xl={6}>
                    <Paper variant="outlined" style={{ paddingBottom:'25px',paddingTop:'25px',paddingLeft:'70px', height: 'auto', backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                    </Paper>
                    </Grid>
                </Grid>
            </div>
            
        );
    }
}

CartComponents.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(CartComponents)));
