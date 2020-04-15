import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Typography, Grid } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PaymentIcon from '@material-ui/icons/Payment';
import LoopIcon from '@material-ui/icons/Loop';
import { FaFileExcel } from 'react-icons/fa';
import {AZUL_BEBE} from '../../../utils/colors';

const styles = () => ({

    container: {      
        backgroundColor: AZUL_BEBE,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '78px',
        paddingLeft: '10px',
    },

    container_division: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',       
    },

    container_text:{

        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '10px',
    },

    icon: {
        display: 'flex',
        justifyContent: 'center',        
        color: 'black',
        fontSize: 40,
    },

    text: {
        
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',       
        fontSize: '12px',
        lineHeight: '16px',
        textIndent: '0px',
        textTransform: 'uppercase',
    },

    main_text: {
        fontWeight: 'bold',
    },

    linha:{
        width: '2px',
        height: '50px',
        marginTop: '6px',
        marginBottom: '6px',
        backgroundColor: '#e9e9e9',
    },
});

export class Servicos extends PureComponent {


    render() {

        const {
            classes,
        } = this.props;

        return (


            <Grid className={classes.container} xs={12} spacing={0}>

                <Grid className={`${classes.container_division} ${classes.space}`} item xs={4} >

                    <LocalShippingIcon className={classes.icon} />
                    <div className={classes.container_text}>
                        
                        <Typography className={`${classes.text} ${classes.main_text}`}>
                            FRETE GRÁTIS EM TODO O SITE
                        </Typography>

                        <Typography
                            className={`${classes.text}`}
                            variant='subtitle1'
                        >
                            Veja as condições para cada categoria.
                        </Typography>

                    </div>


                </Grid>

                <div className={classes.linha}/>

                <Grid className={`${classes.container_division} ${classes.space}`} item xs={4}>

                    <PaymentIcon className={classes.icon} />

                    <div className={classes.container_text}>                        
                        <Typography className={`${classes.text} ${classes.main_text}`}>
                            PARCELE EM ATÉ 10X*
                        </Typography>
                        <Typography
                            className={classes.text}
                            variant='subtitle1'
                        >
                            PARCELE EM ATÉ 10X NO NOSSO CARTÃO.
                        </Typography>
                    </div>

                </Grid>

                <div className={classes.linha}/>

                <Grid className={`${classes.container_division}`} item xs={4}>

                    <LoopIcon className={classes.icon} />

                    <div className={classes.container_text}>
                        
                        <Typography className={`${classes.text} ${classes.main_text}`}>
                            troca fácil
                        </Typography>
                        <Typography
                            className={`${classes.text} ${classes.secundary_text}`}
                            variant='subtitle1'
                        >
                            TROQUE SEUS ITENS EM ATÉ 30 DIAS.
                        </Typography>

                    </div>
                </Grid>
            </Grid>
        )
    }
}

Servicos.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    showSocialMedia: PropTypes.bool,
};

Servicos.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Servicos)));


