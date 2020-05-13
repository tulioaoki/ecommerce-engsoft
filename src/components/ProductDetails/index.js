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
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import medicine from '../../static/images/remedio.png';

import { TITLE } from '../../utils/colors';
import { AZUL_ESCURO } from '../../utils/colors';

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
  butonCep: {
    backgroundColor: AZUL_ESCURO,
    color: 'white'
  },
  title_price: {
    color: '#424242',
    fontSize: '30px'
  }

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
            <Paper variant="outlined" style={{paddingBottom:'25px',paddingTop:'15px', height: 'auto', backgroundColor: '#f2f2f2', marginBottom: '5px' }}>
              <Typography style={{paddingLeft:'25px'}}className={classes.title_price}>
                  R$ 39,6
              </Typography>
              <TextField
                id="outlined-number"
                label="Quantidade"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{marginLeft:'20px'}}
                variant="outlined"
              />

            </Paper>
            <Paper variant="outlined" style={{ paddingBottom:'25px',paddingTop:'25px' ,height: 'auto', backgroundColor: '#f2f2f2', textAlign: 'left',paddingLeft:'70px' }}>
              <Typography component="p" variant="p" className={classes.title_CEP}>
                calcular frete e prazo
              </Typography>
              <TextField style={{ height:'40px',marginTop: '10px' }} size='small' id="outlined-basic" label="CEP" variant="outlined" />
              <Button style={{ height: '40px', marginTop: '10px' }} className={classes.butonCep} variant="contained" >
                Calcular
              </Button>
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
                    <TableCell align="right">28321328721897376</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>EAN</strong>
                    </TableCell>
                    <TableCell align="right">28dsadauihsadayu</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>Peso</strong>
                    </TableCell>
                    <TableCell align="right">32kg</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>Quantidade</strong>
                    </TableCell>
                    <TableCell align="right">4 unidades</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={{ color: '#424242' }} component="th" scope="row">
                      <strong>Marca</strong>
                    </TableCell>
                    <TableCell align="right">Danone</TableCell>
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


export default withRouter(connect()(withStyles(styles)(ProductDetails)));
