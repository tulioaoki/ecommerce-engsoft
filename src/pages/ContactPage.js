import React, { PureComponent } from 'react';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import ContactComponents from '../components/ContactComponents';

class ContactPage extends PureComponent {
  render() {
    return (
      <>
        <div className='mainContent'>
          <TopBar />
          <NavBar />
          <div className='container'>
            <ContactComponents/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactPage;
