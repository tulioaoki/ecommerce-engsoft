import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  withStyles,
} from '@material-ui/core';
import SocialMedia from '../../FooterComponents/SocialMedia';


const styles = () => ({

  root: {

    width: '100%',
    bottom: 0,
    backgroundColor: 'white',

  },

  footer: {
    backgroundColor: '#1F509C',
    paddingTop: '1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '16px 0',
    color: 'white',
  },

});

export class Footer extends PureComponent {
  render() {
    const {
      classes,
    } = this.props;

    return (

      <div className={classes.root}>
        {/* Se o props passado for true, exiba as redes sociais */ }
        {this.props.showSocialMedia

            && (
            <SocialMedia />
            )}
        <div className={classes.footer}>
          <span>
            {' '}
             Empreendimentos Ecommerce S/A; CNPJ: 06.626.253/0001-51 | Rua Senador Pompeu, 1520, Centro, Fortaleza-Ce; CEP: 60.025-001 
             <br/>
             SAC FARMA 0800 275 1313 | Farmacêutica Responsável: Maria do Livramento Cavalcante Crisóstomo; CRF/CE 1388. | Registro Sanitário nº LS00023459 | AFE: 0280418
            {' '}
          </span>
        </div>

      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  showSocialMedia: PropTypes.bool,
};

Footer.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Footer)));
