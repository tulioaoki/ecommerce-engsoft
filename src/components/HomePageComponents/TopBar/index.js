import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderIcons from '../../TopBarComponents/HeaderIcons';
import Logo from '../../TopBarComponents/Logo';
import SearchBox from '../../TopBarComponents/SearchBox';

class TopBar extends PureComponent {
  render() {
    return (
      <div style={{ justifyContent: 'space-around', marginTop: '10px', marginBottom: '10px' }} className="container">
        <Logo />
        <SearchBox action={undefined} />
        <HeaderIcons />
      </div>
    );
  }
}

export default withRouter(connect()(TopBar));
