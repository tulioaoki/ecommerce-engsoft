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
  withStyles
} from '@material-ui/core';

const styles = () => ({
  icons: {
      margin: '0',
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      width: '150px',
      justifyContent: 'space-between'
  }
});

class HeaderIcons extends PureComponent {
  render() {
    const {
      classes,
      history,
    } = this.props;

    return (
      <div className={classes.icons} style={{display:'flex'}}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <AccountCircleIcon fontSize='default' onClick={() => (history.push('/'))}/>
          </Badge>
        </IconButton>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <FavoriteIcon fontSize='default'/>
          </Badge>
        </IconButton>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartRoundedIcon fontSize='default'/>
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