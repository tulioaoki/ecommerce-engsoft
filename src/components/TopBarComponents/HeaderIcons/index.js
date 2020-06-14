import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  icons: {
    margin: '0',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    width: '150px',
    justifyContent: 'space-between',
  },
});

class HeaderIcons extends PureComponent {
  render() {
    const {
      classes,
      history,
      cart,
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
          <Badge badgeContent={typeof cart !== 'undefined' ? cart.length : 0} color="secondary">
            <ShoppingCartRoundedIcon fontSize="default" />
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

const mapStateToProps = ({ REDUCER_CART }, props) => ({
  cart:REDUCER_CART.cart_products,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(HeaderIcons)));
