import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    withStyles, Typography, Grid
} from '@material-ui/core';

import { AZUL_ESCURO, TITLE } from '../../../utils/colors';
import Slide from '../../Slide';



const styles = () => ({

    text: {

        color: TITLE,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '24px',
        lineHeight: '86px',
        textTransform: 'uppercase',
    },

    root: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        padding: '10px 0 10px 0',
    },

});

export class MaisVendidos extends PureComponent {

    render() {

        const {
            classes,
            qtdProdutos, // Informa quantos produtos serão exibidos por vez
            images,        // Array De Images que serão exibidos
        } = this.props;



        return (

            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>

                <Grid container  >

                    <Grid item xs={12} sm={12} >
                        <div>
                            <Typography className={classes.text} >
                                Mais Vendidos
                            </Typography>
                        </div>
                    </Grid>

                </Grid>

                <div className={classes.root}>

                    <Slide productAmount={qtdProdutos} images={images} />

                </div>
            </div>
        );
    }
}

MaisVendidos.propTypes = {
    qtdProdutos: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
};

MaisVendidos.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(MaisVendidos)));
