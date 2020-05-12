import axios from 'axios';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import medicine from '../../static/images/remedio.png';


const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    marginBottom: '50px',
  },

  icon: {
    color: '#757575',
  },

});

class ProductDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: {

      }
    };
  }

  async componentDidMount() {
    console.log(this.props.history.location.pathname.replace('/produto/', ''))
    let productId = this.props.history.location.pathname.replace('/produto/', '')
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
    const {
      classes,
    } = this.props;
    const { product } = this.state;
    const image = medicine;

    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} xl={6} direction="row" style={{ border: '2px solid red' }}>
            <img src={image} alt="produto" />
            <Paper style={{height: '50px', background: 'black'}}></Paper>
          </Grid>
          <Grid item xs={12} sm={6} xl={6} direction="row" style={{ border: '2px solid red' }}>
            <Typography>
              oioioi
            </Typography>
            <Paper style={{height: '50px', background: 'red'}}></Paper>
            <Paper style={{height: '50px', background: 'black'}}></Paper>
            <Paper style={{height: '50px', background: 'black'}}></Paper>
          </Grid>
        </Grid>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};


export default withRouter(connect()(withStyles(styles)(ProductDetails)));
