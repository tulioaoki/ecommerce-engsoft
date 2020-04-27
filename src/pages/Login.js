import React, { PureComponent } from 'react';
import LoginForm from '../components/Forms/Login';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';

class Login extends PureComponent {
  render() {
    return (
      <>
        <div className='mainContent'>
          <TopBar />
          <NavBar />
          <LoginForm />
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
