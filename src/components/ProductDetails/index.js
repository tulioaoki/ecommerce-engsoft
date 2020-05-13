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

import { TITLE } from '../../utils/colors';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    marginBottom: '50px',
  },
  icon: {
    color: '#757575',
  },
  title_product: {
    fontSize: '20px',
    color: '#424242'
  },
  subtitle_product: {
    color: TITLE,
    fontWeight: '600',
    fontSize: '20px',
    marginTop: '25px',
    marginBottom: '10px',
    //border: '2px solid red',
  },
  description_product:{
    color: '#424242',
    textAlign: 'justify',
  },
  product_risk:{
    marginTop: '25px',
    border: '2px solid #424242',
    color: '#424242',
    fontSize: '13px',
    padding: '5px',
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
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} xl={6}>
            <img src={image} alt="produto" />
            <Typography component="h2" variant="h5" className={classes.subtitle_product}>
              Detalhes do produto
            </Typography>
            <Typography className={classes.description_product}>
            <p>Glifage é um medicamento antidiabético de uso oral, que associado a uma dieta apropriada, 
            é utilizado para o tratamento do diabetes tipo 2 em adultos, isoladamente ou em combinação com outros antiadiabéticos orais, 
            como por exemplo aqueles da classe das sulfonilureias. Pode ser utilizado também para o tratamento do diabetes tipo 1 em 
            complementação à insulinoterapia. Glifage também está indicado na Síndrome dos Ovários Policísticos, condição caracterizada 
            por ciclos menstruais irregulares e frequentemente excesso de pelos e obesidade.</p>
            </Typography>
            <Typography className={classes.product_risk}>
              <p>GLIFAGE XR 500MG É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. PROCURE UM MÉDICO OU UM FARMACÊUTICO. LEIA A BULA.</p>
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={6} xl={6}>
            <Typography component="h1" variant="h5" className={classes.title_product}>
              Glifage Xr 500mg Com 30 Comprimidos
            </Typography>
            <Paper variant="outlined" style={{ height: '50px', backgroundColor: '#f2f2f2', marginBottom: '5px' }}></Paper>
            <Paper variant="outlined" style={{ height: '50px', backgroundColor: '#f2f2f2' }}></Paper>
            <Typography component="h2" variant="h5" className={classes.subtitle_product} style={{textAlign: 'center'}}>
              Características do produto
            </Typography>
            <Paper variant="outlined" style={{ height: '50px', backgroundColor: '#f2f2f2' }}></Paper>
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
