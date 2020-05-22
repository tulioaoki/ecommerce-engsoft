import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    withStyles, Typography
} from '@material-ui/core';

import { AZUL_ESCURO } from '../../../utils/colors';
import Slide from '../../Slide';



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

    root: {
        height: 'auto',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0 10px 0',
    },

    produtos: {

        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',

    },

    buttonLeft: {
        display: 'flex',
        alignItems: 'center',
    },

    buttonRight: {

        display: 'flex',
        alignItems: 'center',
    },

    button: {

        padding: '0px',
        backgroundColor: '#c4c4c4',
        //transition: 'opacity 0.4s',
        '&:hover': {
            //opacity: 0.3,
            backgroundColor: AZUL_ESCURO,
        },
    },

    icon: {
        color: 'white',
        fontSize: 40,
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

            <div className='container'  style={{ marginBottom: '50px', marginTop: '50px' }}>

                <div>
                    <Typography className={classes.text}>
                        Mais Vendidos
                    </Typography>
                </div>

                <div className={classes.root}>

                    <Slide productAmount={qtdProdutos} images={images}/>

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
