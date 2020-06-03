import React, { PureComponent } from 'react';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import ProfileComponents from '../components/ProfileComponents';

class ProfilePage extends PureComponent {
  render() {
    return (
      <>
        <div className='mainContent'>
          <TopBar />
          <NavBar />
          <div className='container'>
            <ProfileComponents/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProfilePage;
