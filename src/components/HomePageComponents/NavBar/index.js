import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {AZUL_ESCURO} from '../../../utils/colors';
import {
  withStyles
} from '@material-ui/core';

const styles = () => ({
    root: {
        backgroundColor: AZUL_ESCURO,
        color: '#fafafa',
        borderRadius: 0,    
        paddingTop:'18px'
    }
    
});

class NavBar extends PureComponent {
    render() {
      const {
        history,
        classes      
      } = this.props;
  
      return (
        <div >
          <Paper className={classes.root}>
            <Tabs style={{height:'58px',}} variant='fullWidth'
                value={1}
                centered
                indicatorColor="primary"
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
  
export default withRouter(connect()(withStyles(styles)(NavBar)));