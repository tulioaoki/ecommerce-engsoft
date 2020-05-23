import React, { PureComponent } from 'react';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import CategoriesComponents from '../components/CategoriesComponents';

class CategoriesPage extends PureComponent {
  render() {
    return (
      <>
        <div className='mainContent'>
          <TopBar />
          <NavBar />
          <div className='container'>
            <CategoriesComponents/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CategoriesPage;
