import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import {
  withStyles,
} from '@material-ui/core';
import { handleGetCart } from '../../../actions/cart';
import { handleGetFavorites } from '../../../actions/favorites';
import { isLogged } from '../../../utils/extra';


const styles = () => ({
  icons: {
    margin: '0',
    display: 'flex',
    //justifyContent: 'flex-end',
    flexWrap: 'wrap',
    width: '200px',
    justifyContent: 'space-between',
  },
});

class HeaderIcons extends PureComponent {

  componentDidMount(){
    const { dispatch } = this.props
    if(isLogged()){
      //dispatch(handleGetCart())
      //dispatch(handleGetFavorites())
    }
  }

  render() {
    const handleLogout = () =>{
      localStorage.setItem("token", 'undefined')
      history.push('/login')
    }

    const {
      classes,
      history,
    } = this.props;

    return (
      <div className={classes.icons} style={{ display: 'flex' }}>
        <IconButton color="inherit">
          <Badge color="secondary">
            <AccountCircleIcon fontSize="default" onClick={() => (history.push('/login'))} />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge color="secondary">
            <FavoriteIcon fontSize="default" />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={() => (history.push('/my-cart'))}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartRoundedIcon fontSize="default" />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={handleLogout}>
          <Badge badgeContent={'Sair'} color="secondary">
            <ExitToAppIcon fontSize="default" />
          </Badge>
        </IconButton>
      </div>
    );
  }
}

HeaderIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(HeaderIcons)));
