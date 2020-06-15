import { Grid, Typography, withStyles } from '@material-ui/core';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AZUL_ESCURO } from '../../../utils/colors';
import ProductCard from '../ProductCard';
import axios from 'axios';


const styles = () => ({

    text: {

        color: AZUL_ESCURO,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '24px',
        lineHeight: '86px',
        textTransform: 'uppercase',
    },

});


export class Promocao extends PureComponent {

    state = {

        produtos: [],
    };

    async componentDidMount() {

        this.props.history.location.pathname.replace('/', '')
        await axios.get(`https://ecommerce-engsoft.herokuapp.com/offers?page_size=8`)
          .then((response) => {

            this.setState((prevState) => ({ ...prevState, produtos: response.data.data}));
          })
          .catch((error) => {
            console.log('error fetching product');
            console.error(error)
          })
    
      }

    render() {

        const { classes ,history} = this.props;



        return (

            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={12} >
                        <div>
                            <Typography className={classes.text}>
                                Promoção
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container spacing={5}  style={{ marginLeft: '40px', marginRight: '40px' }} >
                        { 
                            typeof this.state.produtos !== 'undefined' &&  
                            
                                this.state.produtos.map((produto, index) => {
                                    return <Grid item xs={12} sm={3} >
                                        <ProductCard
                                            key={produto.id}
                                            product={produto}
                                            variant='normal'
                                        />
                                    </Grid>
                                })
                            
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Promocao.propTypes = {

};

Promocao.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Promocao)));
