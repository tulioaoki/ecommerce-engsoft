import React, { PureComponent } from 'react';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import ProductDetails from '../components/ProductDetails';

class ProductDetailsPage extends PureComponent {
  render() {
    return (
      <>
        <div className='mainContent'>
          <TopBar />
          <NavBar />
          {/* componente de product detail */}
          <div className='container'>
            <ProductDetails/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductDetailsPage;
