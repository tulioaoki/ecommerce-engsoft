import React, { PureComponent } from 'react';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import ItemGridDisplay from '../components/HomePageComponents/ItemGridDisplay';
import OneItemList from '../components/HomePageComponents/OneItemList';
import { isLogged, isAdmin } from '../utils/extra';
import { BASE_URL } from '../utils/requests';
import Axios from 'axios';


class AdminMainPage extends PureComponent {
  render() {
    if(!isLogged() || localStorage.getItem("isAdmin") !== 'true'){
      const { history } = this.props;
      history.push('/login')
    }
    return (
      <>
        <div className='mainContent'>
          <TopBar />
          <NavBar />
          <ItemGridDisplay displayName={'Produtos Cadastrados'}/>
          <OneItemList/>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ info, USER_REDUCER }, props) => ({
    userData: USER_REDUCER.user_data
  });
  
  AdminMainPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter(connect(mapStateToProps)(withStyles()(AdminMainPage)));