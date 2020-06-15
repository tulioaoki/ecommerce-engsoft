import { SnackbarProvider, withSnackbar } from 'notistack';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import AdminMainPage from './pages/AdminMainPage';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import ContactPage from './pages/ContactPage';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import Login from './pages/Login';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProfilePage from './pages/ProfilePage';




class App extends PureComponent {
  constructor(props) {
    super(props);
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
          <Route path="/produto"  component={ProductDetailsPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/categories" exact component={CategoriesPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/my-cart" exact component={CartPage} />
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
