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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import profile from '../../static/images/profile.png';

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

class ProfileComponents extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const {
            history,
            classes,
        } = this.props;
        const image = profile;

        return (
            <div className={classes.root}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Meu perfil
                </Typography>


                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} style={{border: '2px solid red'}}>

                        <Typography>
                            <AccountCircleIcon />
                            Meus dados
                        </Typography>


                        <Typography>
                            <FavoriteIcon />
                            Minha lista de desejos
                        </Typography>

                        <Typography>
                            <ShoppingCartIcon />
                            Meus pedidos
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{border: '2px solid black'}}>
                        <Typography>
                            <AccountCircleIcon />
                            <strong>Meus dados</strong>
                        </Typography>

                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6}>
                                <img src={image} 
                                    style={{ 
                                        width: '125px', 
                                        borderRadius: '100%',
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        height: '125px',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>
                                    <strong style={{color: TITLE}}>Nome: </strong>Maria Eduarda
                                </Typography>

                                <Typography>
                                    <strong style={{color: TITLE}}>Sobrenome: </strong>Silva
                                </Typography>

                                <Typography>
                                    <strong style={{color: TITLE}}>CPF: </strong>000.000.000-00
                                </Typography>

                                <Typography>
                                    <strong style={{color: TITLE}}>Data de nascimento: </strong>00/00/0000
                                </Typography>

                                <Typography>
                                    <strong style={{color: TITLE}}>Contato: </strong>(81) 9 9999-9999
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} style={{border: '2px solid blue', overflowX: 'auto'}}>
                        <Typography>
                            <FavoriteIcon />
                            <strong>Minha lista de desejos</strong>
                        </Typography>

                        <TableContainer variant="outlined" component={Paper}>
                            <Table className={classes.table} aria-label="simple table" >
                            <TableHead style={{backgroundColor: '#f2f2f2'}}>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>Valor</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{border: '2px solid yellow', overflowX: 'auto'}}>
                        <Typography>
                            <ShoppingCartIcon />
                            <strong>Meus pedidos</strong>
                        </Typography>
                        <TableContainer variant="outlined" component={Paper} >
                            <Table className={classes.table} aria-label="simple table">
                            <TableHead style={{backgroundColor: '#f2f2f2'}}>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>Valor</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <Typography style={{color: TITLE}}>Entregue em: 20/09/2020</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <Typography style={{color: TITLE}}>Entregue em: 20/09/2020</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <Typography style={{color: TITLE}}>Entregue em: 20/09/2020</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <Typography style={{color: TITLE}}>Entregue em: 20/09/2020</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <img src={image} alt="produto" style={{height: '100px'}}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>Produto dipirona</Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography>R$ 19.90</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <Typography style={{color: TITLE}}>Entregue em: 20/09/2020</Typography>
                                        </TableCell>
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

ProfileComponents.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(ProfileComponents)));
