import React, { Component, PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import AdminMainPage from './pages/AdminMainPage';
import FavoritesPage from './pages/FavoritesPage';


class App extends PureComponent {
  constructor(props) {
    super(props);
    localStorage.setItem("token", 'null'); 
    this.state = {
    };
  }

  render() {
    // const path_name = this.props.location.pathname
    return (
      <div style={{ width: '100%', height: '100%', minHeight: '100%' }}>
        <>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/products" exact component={ListPage} />
          <Route path="/produto" exact component={ProductDetailsPage} />
          <Route path="/my-profile" exact component={ProfilePage} />
          <Route path="/my-favorites" exact component={FavoritesPage} />
          <Route path="/produto"  component={ProductDetailsPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/categories" exact component={CategoriesPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/my-cart" exact component={CartPage} />
          {/* Admin Pages */}
          <Route path="/admin" exact component={AdminMainPage} />
          <Route path="/my-favorites" exact component={FavoritesPage} />
        </>
      </div>

    );
  }
}


const mapStateToProps = ({ }) => ({
});

App.propTypes = {
  // enqueueSnackbar: PropTypes.func.isRequired,
};

const MyApp = withSnackbar(App);

function IntegrationNotistack() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <MyApp />
    </SnackbarProvider>
  );
}

export default withRouter(connect(mapStateToProps)(IntegrationNotistack));
