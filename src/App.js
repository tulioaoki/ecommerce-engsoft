import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { connect } from 'react-redux';

import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';

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
          <Route path="/produto" exact component={ProductDetailsPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/categories" exact component={CategoriesPage} />
        </>
      </div>

    );
  }
}


const mapStateToProps = ({ PROCESS_DATA }) => ({
  process_data: PROCESS_DATA,
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
