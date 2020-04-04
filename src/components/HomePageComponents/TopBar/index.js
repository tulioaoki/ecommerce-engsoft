import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Logo from '../../TopBarComponents/Logo';
import SearchBox from '../../TopBarComponents/SearchBox';
import HeaderIcons from '../../TopBarComponents/HeaderIcons';
import NavBar from '../../TopBarComponents/NavBar';
import {
  withStyles, Typography,
} from '@material-ui/core';


const styles = () => ({
  container: {
    maxWidth: '960px', /*para completar a tela toda */
    width:'100%',
    margin: '0 auto',
    padding: '0.9375rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

class TopBar extends PureComponent {
  render() {
    const {
      classes,
      history,
    } = this.props;

    return (
      <div className={classes.container}>
        <Logo/>
        <SearchBox/>
        <HeaderIcons/>
        <NavBar/>
        <Typography
          onClick={() => (history.push('/home'))}
          style={{
            alignSelf: 'left',
            marginLeft: 50,
            fontSize: 50,
            fontFamily: 'GTWalsheim',
            fontWeight: 'bolder',
            color: 'white',
            cursor: 'pointer',

          }}
        >
        </Typography>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

TopBar.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(TopBar)));
