import axios from 'axios';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TextField from '@material-ui/core/TextField';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import { TITLE } from '../../utils/colors';
import { AZUL_ESCURO } from '../../utils/colors';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { handleAddToCart } from '../../actions/cart';
import { handleAddFavorites, handleDeleteFavorites } from '../../actions/favorites';

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
    color: '#424242',
    marginBottom: '10px',
  },
  subtitle_product: {
    color: TITLE,
    fontWeight: '600',
    fontSize: '20px',
    marginTop: '30px',
    marginBottom: '10px',
    //border: '2px solid red',
  },
  description_product: {
    color: '#424242',
    textAlign: 'justify',
  },
  product_risk: {
    marginTop: '25px',
    border: '2px solid #424242',
    color: '#424242',
    fontSize: '13px',
    padding: '5px',
  },
  title_CEP: {
    color: '#424242',
    fontSize: '15px'
  },
  paper: {
    background: '#f2f2f2',
  },
  buttonCep: {
    backgroundColor: AZUL_ESCURO,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1a237e',
    },
  },
  title_price: {
    color: '#424242',
    fontSize: '30px',
  },
});

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: AZUL_ESCURO,
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: AZUL_ESCURO,
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: AZUL_ESCURO,
      borderWidth: 2,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: AZUL_ESCURO,
      },
    },
  },

})(TextField);

class ProductDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: {

      },
      quantity: 1,
      cepInfo: null,
      cep: ''

    };
    this.changeCartQuantity = this.changeCartQuantity.bind(this);
    this.fetchCep = this.fetchCep.bind(this);
  }

  async componentDidMount() {
    console.log(this.props.history.location.pathname.replace('/produto/', ''))
    let productId = this.props.history.location.pathname.replace('/produto/', '')
    await axios.get(`https://ecommerce-engsoft.herokuapp.com/products/${productId}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState((prevState) => ({ ...prevState, product: response.data.data }));
      })
      .catch((error) => {
        console.log('error fetching product');
        console.error(error)
      })

  }

  async fetchCep(cep) {
    this.setState({
      cepInfo: 'loading'
    });
    let cepInfo = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        this.setState({
          cepInfo: response.data
        });
      })
      .catch((error) => {
        this.setState({
          cepInfo: 'invalid'
        });
      })
  }

  changeCep(cep) {
    this.setState({
      cep
    })
  }

  changeCartQuantity(qtd) {
    let newQuantity = this.state.quantity;
    if (qtd >= 1) {
      newQuantity = qtd
    }
    this.setState({
      quantity: newQuantity
    });
  }

  render() {
    const {
      classes,
      dispatch,
      favorites
    } = this.props;
    const { product } = this.state;

    let isFavorite = favorites.reduce((i, atual) => {
      return (i || atual.id === product.id)
    }, false)

    const handleFavorite = () => {
      if (!isFavorite) {
        dispatch(handleAddFavorites(product))
      } else {
        dispatch(handleDeleteFavorites(product))
      }
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} xl={6}>


            <img src={typeof product.images !== 'undefined' ? product.images[0].image_url : ''} alt="produto" style={{width: '438px', height: '438px'}}/>
            <IconButton onClick={() => { handleFavorite() }} aria-label="Adicionar aos favoritos">
              <FavoriteIcon style={{ color: isFavorite ? 'red' : 'gray' }} />
            </IconButton>
            <Typography component="h2" variant="h5" className={classes.subtitle_product}>
              Detalhes do produto
            </Typography>

            <Typography className={classes.description_product}>
              <p>{this.state.product.description}</p>
            </Typography>

          </Grid>

          <Grid item xs={12} sm={6} xl={6}>
            <Typography component="h1" variant="h5" className={classes.title_product}>
              {product.name}
            </Typography>

            <Paper variant="outlined" style={{ paddingBottom: '25px', paddingTop: '25px', paddingLeft: '70px', height: 'auto', backgroundColor: '#f2f2f2', marginBottom: '5px' }}>

              <Typography style={{ display: 'inline', marginRight: '80px' }} className={classes.title_price}>
                {typeof this.state.product.price !== 'undefined' && this.state.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </Typography>

              <ValidationTextField size='small' value={this.state.quantity} id="outlined-number" label="Quantidade" type="number" variant="outlined" defaultValue='1'
                style={{ width: '91px', height: '40px', marginTop: '3px' }}
                onChange={event => this.changeCartQuantity(event.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Button onClick={() => { dispatch(handleAddToCart(this.state.product.id, this.state.quantity)) }} variant="contained" style={{ display: 'block', width: '200px', marginTop: '10px' }} className={classes.buttonCep}>
                Comprar
              </Button>

            </Paper>

            <Paper variant="outlined" style={{ paddingBottom: '25px', paddingTop: '25px', paddingLeft: '70px', height: 'auto', backgroundColor: '#f2f2f2', textAlign: 'left' }}>
              <Typography component="p" className={classes.title_CEP}>
                calcular frete e prazo
              </Typography>

              <ValidationTextField onChange = {(event)=>{this.changeCep(event.target.value)}} style={{ height: '40px', marginTop: '10px' }} size='small' id="outlined-basic" label="CEP" variant="outlined" />

              <Button onClick={() => { this.fetchCep(this.state.cep) }} variant="contained" style={{ height: '40px', marginTop: '10px' }} className={classes.buttonCep} >
                Calcular
              </Button>
              {this.state.cepInfo ?

                this.state.cepInfo !== 'invalid' ?
                  this.state.cepInfo === 'loading' ? (
                    <CircularProgress style={{ display: 'block' }} />
                  ) : (
                      <Typography>
                        {this.state.cepInfo.logradouro + ' , ' + this.state.cepInfo.localidade + ' , ' + this.state.cepInfo.uf}
                      </Typography>
                    ) : (
                    <Typography style={{ color: 'red' }}>
                      CEP inválido
                    </Typography>)

                : (<></>)}
            </Paper>

            <Typography component="h2" variant="h5" className={classes.subtitle_product} style={{ textAlign: 'center' }}>
              Características do produto
            </Typography>

            <TableContainer component={Paper}>
              <Table className={classes.paper} aria-label="simple table">
                <TableBody >
                  {/* {rows.map((row) => (      para depois com o backend
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))} */}
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>Código de Produto</strong>
                    </TableCell>
                    <TableCell align="right">39101</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>EAN</strong>
                    </TableCell>
                    <TableCell align="right">8234736473672218</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>Peso</strong>
                    </TableCell>
                <TableCell align="right">{product.peso}g</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>Quantidade</strong>
                    </TableCell>
                    <TableCell align="right">{product.unidade} unidades</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>Marca</strong>
                    </TableCell>
                    <TableCell align="right">{product.marca}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>Princípio ativo</strong>
                    </TableCell>
                    <TableCell align="right">NAO CONSTA</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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


const mapStateToProps = ({ REDUCER_CART, REDUCER_FAVORITES }, props) => ({
  cart: REDUCER_CART.cart_products,
  favorites: REDUCER_FAVORITES.favorites
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ProductDetails)));
