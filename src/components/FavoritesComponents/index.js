import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
} from '@material-ui/core';
import { TITLE } from '../../utils/colors';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import medicine from '../../static/images/remedio.png';
import { handleDeleteFavorites } from '../../actions/favorites';


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
});


class FavoritesComponents extends PureComponent {

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
                    quantidade: 1,
                    price: 39.90,
                },
                {
                    id: 1,
                    image: medicine,
                    item: 'dipirona',
                    marca: 'menos',
                    unidade: '1 unidades',
                    peso: '1g - peso do produto',
                    quantidade: 2,
                    price: 39.90,
                },
                {
                    id: 2,
                    image: medicine,
                    item: 'dorflex',
                    marca: 'generico',
                    unidade: '5 unidades',
                    peso: '90g - peso do produto',
                    quantidade: 3,
                    price: 39.90,
                },
                {
                    id: 3,
                    image: medicine,
                    item: 'benegrip',
                    marca: 'farmacia',
                    unidade: '10 unidades',
                    peso: '61g - peso do produto',
                    quantidade: 4,
                    price: 39.90,
                },
            ],
        };
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart(id) {
        this.setState({
            cart: this.state.cart.filter(product => product.id != id)
        });
    }

    render() {

        const {
            history,
            classes,
            dispatch,
            cart,
        } = this.props;
        const image = medicine;

        const removeFromCart = (product) => {
            // this.setState({
            //     cart: this.state.cart.filter(product => product.id !== id)
            // });
            dispatch(handleDeleteFavorites(product))
        }

        return (
            <div className={classes.root}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Meus Favoritos
                    <FavoriteIcon style={{color: 'red', paddingLeft: '10px'}}/>
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
                                        <TableCell align="right">Valor</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {typeof cart !== 'undefined' && cart.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell onClick={()=>{history.push(`/produto/${row.id}`)}} component="th" scope="row">
                                            <img src={typeof row.images !== 'undefined' ? row.images[0].image_url : ''} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell onClick={()=>{history.push(`/produto/${row.id}`)}}>
                                            <Typography style={{fontWeight: 900}}>
                                                {row.name}
                                            </Typography>
                                            <Typography style={{color: '#c4c4c4', display: 'block'}}>
                                                {row.marca}
                                            </Typography>
                                            <Typography style={{display: 'block'}}>
                                                {row.unidade}
                                            </Typography>
                                            <Typography style={{display: 'block'}}>
                                                {row.peso}
                                            </Typography>
                                        </TableCell>
                                        
                                        <TableCell align="right">R$ {(row.price).toFixed(2)}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={()=>{removeFromCart(row)}}>

                                                <DeleteIcon />
                                                Excluir
                                            </Button>
                                            <Button>
                                                <ShoppingCartIcon />
                                                Adicionar ao carrinho
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

FavoritesComponents.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
};

FavoritesComponents.defaultProps = {
    cart:[],
};

const mapStateToProps = ({ info,REDUCER_FAVORITES }, props) => ({
    info,
    cart:REDUCER_FAVORITES.favorites,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(FavoritesComponents)));
