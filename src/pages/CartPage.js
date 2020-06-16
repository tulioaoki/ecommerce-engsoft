import React, { PureComponent } from 'react';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import CartComponents from '../components/CartComponents';
import { isLogged } from '../utils/extra';

class CartPage extends PureComponent {
  render() {
    if(!isLogged()){
      const { history } = this.props;
      history.push('/login')
    }
    return (
      <>
        <div className='mainContent'>
          <TopBar />
          <NavBar />
          <div className='container'>
            <CartComponents />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CartPage;
