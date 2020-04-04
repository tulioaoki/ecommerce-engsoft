import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {AZUL_ESCURO} from '../../../utils/colors';
import {
  withStyles, Typography,
} from '@material-ui/core';

const styles = () => ({
    root: {
        flexGrow: 1,
        backgroundColor: AZUL_ESCURO,
        color: '#ffff',
    },
    
});

class NavBar extends PureComponent {
    render() {
      const {
        classes,
        history,
      } = this.props;
  
      return (
        <div style={{width:'100%', margin: 0}}>
          <Paper className={classes.root}>
            <Tabs
                value='Página Inicial'
                indicatorColor='#ffff'
                textColor='#ffff'
                centered
            >
                <Tab label="Página Inicial" />
                <Tab label="Categorias" />
                <Tab label="Ofertas" />
                <Tab label="Sobre" />
                <Tab label="Contato" />
            </Tabs>
            </Paper>
        </div>
      );
    }
  }

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  
  NavBar.defaultProps = {
  };
  
  export default withRouter(connect()(withStyles(styles)(NavBar)));