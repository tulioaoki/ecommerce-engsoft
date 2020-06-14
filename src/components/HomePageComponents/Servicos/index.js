import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Typography, Grid } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PaymentIcon from '@material-ui/icons/Payment';
import LoopIcon from '@material-ui/icons/Loop';
import { AZUL_CLARO } from '../../../utils/colors';

const styles = () => ({

  containerServico: {

    backgroundColor: AZUL_CLARO,
    height: "78px",
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  containerIconText: {

    display: 'flex',
    alignItems: 'center',
  },

  container_text: {

    flexDirection: 'column',
    paddingLeft: '10px',
  },

  icon: {

    justifyContent: 'center',
    color: 'black',
    fontSize: 44,
  },

  text: {

    color: 'black',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
  text_description: {
    color: '#424242',
  },

  main_text: {
    fontWeight: 'bold',
  },

  linha: {

    width: '2px',
    height: '50px',
    marginTop: '6px',
    marginBottom: '6px',
    marginRight: '80px',
    backgroundColor: '#4a4a4a',
  },
  '@media screen and (max-width: 780px)': {
    linha: {
      backgroundColor: AZUL_CLARO,
    },
    
  },

  linha_primeira: {
    width: '2px',
    height: '50px',
    marginTop: '6px',
    marginBottom: '6px',
    marginRight: '80px',
    backgroundColor: AZUL_CLARO,
  }

});

export class Servicos extends PureComponent {
  render() {

    const {
      classes,
    } = this.props;

    return (

      <Grid container spacing={0} >

        <Grid item xs={12} sm={4} className={classes.containerServico} style={{ justifyContent: 'center' }}>
        <div className={classes.linha_primeira} />
          <LocalShippingIcon className={classes.icon} />

          <div className={classes.container_text}>

            <Typography className={`${classes.text} ${classes.main_text}`}>
              FRETE GRÁTIS EM TODO O SITE
            </Typography>

            <Typography
              className={classes.text_description}
              variant="subtitle1"
            >
              Veja as condições para cada categoria.
          </Typography>
          </div>

        </Grid>

        <Grid item xs={12} sm={4} className={classes.containerServico} >


          <div className={classes.linha} />

          <div className={classes.containerIconText} style={{ justifyContent: 'center' }}>

            <PaymentIcon className={classes.icon} />

            <div className={`${classes.container_text}`}>

              <Typography className={`${classes.text} ${classes.main_text}`}>
                PARCELE EM ATÉ 10X*
              </Typography>

              <Typography
                className={classes.text_description}
                variant="subtitle1"
              >
                Parcele em até 10x no nosso cartão.
              </Typography>

            </div>
          </div>


        </Grid>

        <Grid item xs={12} sm={4} className={classes.containerServico} >

          <div className={classes.linha} />

          <div className={classes.containerIconText} style={{ justifyContent: 'center' }}>

            <LoopIcon className={classes.icon} />

            <div className={`${classes.container_text}`}>

              <Typography className={`${classes.text} ${classes.main_text}`}>
                TROCA FÁCIL
              </Typography>

              <Typography
                className={classes.text_description}
                variant="subtitle1"
              >
                Seus itens em até 30 dias.
              </Typography>
            </div>

          </div>
        </Grid>

      </Grid>
    );
  }
}

Servicos.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  showSocialMedia: PropTypes.bool,
};

Servicos.defaultProps = {
}

export default withRouter(connect()(withStyles(styles)(Servicos)));
