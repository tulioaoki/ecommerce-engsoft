import axios from 'axios';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  
});

class ProductDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: {

      }
    };
  }

  async componentDidMount(){
    console.log(this.props.history.location.pathname.replace('/produto/',''))
    let productId = this.props.history.location.pathname.replace('/produto/','')
    let produto = await axios.get(`https://ecommerce-engsoft.herokuapp.com/products/${productId}`)
      .then((response) => {
        console.log(response);
        this.setState((prevState) => ({ ...prevState, product: response.data.data }));
      })
      .catch((error) => {
        console.log('error fetching product');
        console.error(error)
      })
      
  }

  render() {

    const { product } = this.state;



    

    return (
      <div>
          {product.name}
      </div>
    );
  }
}

ProductDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};


export default withRouter(connect()(withStyles(styles)(ProductDetails)));
