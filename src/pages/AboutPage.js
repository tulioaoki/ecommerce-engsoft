import React, { PureComponent } from 'react';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import AboutComponents from '../components/AboutComponents';

class AboutPage extends PureComponent {
  render() {
    return (
      <>
        <div className='mainContent'>
          <TopBar />
          <NavBar />
          <div className='container'>
            <AboutComponents/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
