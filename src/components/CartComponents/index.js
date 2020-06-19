import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleDeleteFromCart, handleEditCart } from '../../actions/cart';
import medicine from '../../static/images/remedio.png';
import { AZUL_ESCURO, TITLE } from '../../utils/colors';

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';


const styles = () => ({
    root: {
        flexGrow: 1,
        marginTop: '50px',
        marginBottom: '50px',
    },
    title: {
        color: TITLE,
        fontWeight: '600',
        fontSize: '20px',
        marginTop: '30px',
        marginBottom: '10px',
    },
    buttonCep: {
        backgroundColor: AZUL_ESCURO,
        color: '#fff',
        '&:hover': {
          backgroundColor: '#1a237e',
        },
    },
    buttonContinue: {
        backgroundColor: '#c4c4c4',
        color: '#000',
        '&:hover': {
            backgroundColor: '#616161',
            color: '#fff',
        }
    },
    title_CEP: {
        color: '#424242',
        fontSize: '15px'
    },
    
});

const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
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

const QtdTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: '#424242',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderColor: '#424242',
        borderWidth: 2,
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: '#424242',
        },
    },
    },
})(TextField);

class CartComponents extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cart: [{
                    id: 0,
                    image: medicine,
                    item: 'remedio',
                    marca: 'farma',
                    unidade: '4 unidades',
                    peso: '61g - peso do produto',
                    quantity: 1,
                    product_price: 39.90,
                },
                {
                    id: 1,
                    image: medicine,
                    item: 'dipirona',
                    marca: 'menos',
                    unidade: '1 unidades',
                    peso: '1g - peso do produto',
                    quantity: 2,
                    product_price: 39.90,
                },
                {
                    id: 2,
                    image: medicine,
                    item: 'dorflex',
                    marca: 'generico',
                    unidade: '5 unidades',
                    peso: '90g - peso do produto',
                    quantity: 3,
                    product_price: 39.90,
                },
                {
                    id: 3,
                    image: medicine,
                    item: 'benegrip',
                    marca: 'farmacia',
                    unidade: '10 unidades',
                    peso: '61g - peso do produto',
                    quantity: 4,
                    product_price: 39.90,
                },
            ],
            cepInfo: null,
            cep: ''
        };
        this.removeFromCart = this.removeFromCart.bind(this);
        this.changeCartQuantity = this.changeCartQuantity.bind(this);
        this.fetchCep = this.fetchCep.bind(this);
    }

    removeFromCart(id) {
        this.setState({
            cart: this.state.cart.filter(product => product.id !== id)
        });
    }

    async fetchCep (cep){
        this.setState({
            cepInfo: 'loading'
        });
        await axios.get(`https://viacep.com.br/ws/${cep}/json/`)


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

    changeCep (cep){
        this.setState({
            cep
        })
    }

    changeCartQuantity(product, qtd){
        let {
            dispatch
        } = this.props
        if(qtd>=1){
            product.quantity = parseInt(qtd)
            product.total_price = product.product_price*parseInt(qtd)
            dispatch(handleEditCart(product))
        }
    }

    componentDidMount(){
        
    }/**
     * 





        




     */

    render() {
        const {
            history,
            classes,
            cart,
            dispatch
        } = this.props;
        const image = medicine;
        console.log(cart);
        return (
            <div className={classes.root}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Meu Carrinho
                    <ShoppingCartRoundedIcon style={{color: '#424242', paddingLeft: '10px'}}/>
                </Typography>
                <br></br>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                        <TableContainer variant="outlined" component={Paper}>
                            <Table className={classes.table} aria-label="simple table" >
                                <TableHead style={{backgroundColor: '#f2f2f2'}}>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right">Quantidade</TableCell>
                                        <TableCell align="right">Valor unitário</TableCell>
                                        <TableCell align="right">Valor total</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {typeof cart !== 'undefined' && cart.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell onClick={()=>{history.push(`/produto/${row.id}`)}} component="th" scope="row">
                                            <img src={typeof row.product.images !== 'undefined' ? row.product.images[0].image_url : ''} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell onClick={()=>{history.push(`/produto/${row.id}`)}}>
                                            <Typography style={{fontWeight: 900}}>
                                                {row.product.name}
                                            </Typography>
                                            <Typography style={{color: '#c4c4c4', display: 'block'}}>
                                                {row.product.marca}
                                            </Typography>
                                            <Typography style={{display: 'block'}}>
                                                {row.product.unidade} unidade(s)
                                            </Typography>
                                            <Typography style={{display: 'block'}}>
                                                {row.product.peso} gramas
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <QtdTextField className={classes.number} size='small' value = {row.quantity} type="number" variant="outlined" 
                                                onChange={event=>this.changeCartQuantity(row, event.target.value)}
                                                style={{ width: '91px', height:'40px', marginTop: '3px'}}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }} 
                                            />
                                        </TableCell>
                                        <TableCell align="right">R$ {(row.product_price).toFixed(2)}</TableCell>
                                        <TableCell align="right">R$ {(row.total_price).toFixed(2)}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={()=>{dispatch(handleDeleteFromCart(row))}}>
                                                <DeleteIcon />
                                                Excluir
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))} 
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6} xl={6}>
                        <Paper variant="outlined" style={{ paddingBottom:'40px',paddingTop:'25px',paddingLeft:'70px', height: 'auto', backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                            <Typography component="p"  className={classes.title_CEP}>
                                calcular frete e prazo
                            </Typography>

                            <ValidationTextField onChange = {(event)=>{this.changeCep(event.target.value)}} style={{ height:'40px', marginTop: '10px'}} size='small' id="outlined-basic" label="CEP" variant="outlined" />
                            
                            <Button onClick={()=>{this.fetchCep(this.state.cep)}} variant="contained" style={{ height: '40px', marginTop: '10px' }} className={classes.buttonCep} >
                                Calcular
                            </Button>

                            {this.state.cepInfo?
                                this.state.cepInfo !== 'invalid' ? 
                                this.state.cepInfo === 'loading' ? (
                                    <CircularProgress style={{display: 'block'}}/>
                                ):(
                                <Typography>
                                    {this.state.cepInfo.logradouro + ' , ' +this.state.cepInfo.localidade + ' , ' +this.state.cepInfo.uf}
                                </Typography>
                                ):(
                                <Typography style={{color: 'red'}}>
                                    CEP inválido
                                </Typography>)
                                
                            :(<></>)}
                        </Paper>

                        <Button variant="contained" style={{ height: '40px', marginTop: '10px' }} className={classes.buttonContinue} onClick={()=>{history.push('/')}}>
                            Continuar comprando
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} xl={6}>
                        <Paper variant="outlined" style={{ paddingBottom:'25px',paddingTop:'25px',paddingLeft:'70px', height: 'auto', backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                            <Typography component="p"  style={{color: '#424242', fontSize: '12px'}}>
                                Economize R$ 11,00
                            </Typography>
                            <Typography component="p"  style={{ fontSize: '13px'}}>
                                <strong>Total</strong>
                            </Typography>
                            <Typography component="p"  style={{ fontSize: '20px'}}>
                                <strong style={{fontSize: '14px'}}>R$</strong> 
                                <strong style={{fontSize: '24px'}}>
                                    {cart.reduce((totalValue, product) => totalValue += (product.total_price),0).toFixed(2)}
                                </strong>
                            </Typography>
                            <Typography component="p"  className={classes.title_CEP}>
                                10x s/ juros de R$ {(cart.reduce((totalValue, product) => totalValue += (product.total_price),0).toFixed(2)/10).toFixed(2)}
                            </Typography>
                        </Paper>
                        <Button variant="contained" style={{ height: '40px', marginTop: '10px' }} className={classes.buttonCep} >
                            Finalizar compra
                        </Button>
                    </Grid>
                </Grid>
            </div>
            
        );
    }
}

CartComponents.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = ({ REDUCER_CART }, props) => ({
    cart:REDUCER_CART.cart_products,
  });
  

export default withRouter(connect(mapStateToProps)(withStyles(styles)(CartComponents)));
