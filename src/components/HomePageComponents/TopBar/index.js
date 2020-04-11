import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Logo from '../../TopBarComponents/Logo';
import SearchBox from '../../TopBarComponents/SearchBox';
import HeaderIcons from '../../TopBarComponents/HeaderIcons';

class TopBar extends PureComponent {
  render() {

    return (
      <div style={{justifyContent: 'space-around',marginTop:'10px',marginBottom:'10px'}} className='container'>
        <Logo/>
        <SearchBox/>
        <HeaderIcons/>
      </div>
    );
  }
}

export default withRouter(connect()(TopBar));
