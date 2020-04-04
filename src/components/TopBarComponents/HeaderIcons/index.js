import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import {
  withStyles, Typography,
} from '@material-ui/core';

const styles = () => ({
    icons: {
        maxWidth: '960px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        padding: '1.25em',
    },
    iconsImg:{
        margin: '0 0.3125rem 0.3125rem 0.0625rem',
        width: 'auto',
        height: '30px',
    },
    
});

class HeaderIcons extends PureComponent {
    render() {
      const {
        classes,
        history,
      } = this.props;
  
      return (
        <div className={classes.icons} style={{display:'flex'}}>
          <AccountCircleIcon className={classes.iconsImg} onClick={() => (history.push('/'))}/>
          <FavoriteIcon className={classes.iconsImg}/>
          <ShoppingCartRoundedIcon className={classes.iconsImg}/>
        </div>
      );
    }
  }

  HeaderIcons.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  
  HeaderIcons.defaultProps = {
  };
  
  export default withRouter(connect()(withStyles(styles)(HeaderIcons)));