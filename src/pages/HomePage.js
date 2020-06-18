/* eslint-disable react/prefer-stateless-function */
import { withStyles } from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Carrossel from '../components/HomePageComponents/Carrossel';
import Footer from '../components/HomePageComponents/Footer';
import MaisVendidos from '../components/HomePageComponents/MaisVendidos';
import Novidades from '../components/HomePageComponents/Novidade';
import PresentationPage from '../components/HomePageComponents/PresentationPage';
import Promocao from '../components/HomePageComponents/Promocao';
import Servicos from '../components/HomePageComponents/Servicos';

const styles = () => ({
  root: {
    justifyContent: 'center',
    justifyItens: 'center',
    maxHeight: '100%',
    width: '100%',
    minWidth: '100%',
    margin: 0,
    flexDirection: 'column',
  },
});

class HomePage extends PureComponent {

  state = {

    listaDeProdutos:[],         
  };
  
  async componentDidMount(){
       
    
    await axios.get(`https://ecommerce-engsoft.herokuapp.com/products/best_sellers`)
      .then((response) => {

        console.log(response.data.data)
        this.setState((prevState) => ({ ...prevState, listaDeProdutos: response.data.data, valor: 4}));
      })
      .catch((error) => {
        console.log('error fetching product');
        console.error(error)
      })

  }

  render() {
    
    const { classes, cart } = this.props;
    console.log("O carrinho está assim :",cart)

    return (
      <div className={classes.root}>
        <div className="mainContentHome">
          <PresentationPage />
          <Carrossel />
          <Servicos />
          <Novidades/>
          <Promocao/>
          {
            ( typeof this.state.listaDeProdutos !== 'undefined' && this.state.listaDeProdutos.length > 0 ) &&
                <MaisVendidos qtdProdutos={4} images={this.state.listaDeProdutos} />
          } 
          
        </div>
        <Footer showSocialMedia> </Footer>
      </div>
    );
  }
}

const mapStateToProps = ({ info,REDUCER_CART }, props) => ({
  info,
  cart:REDUCER_CART.cart_products,
});

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(HomePage)));
