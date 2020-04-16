import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    withStyles, Typography
} from '@material-ui/core';

import ProductCardComponent from '../ProductCard';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { AZUL_BEBE, AZUL_ESCURO } from '../../../utils/colors';

import '../../../index.css';


const styles = () => ({

    text: {

        color: AZUL_ESCURO,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textIndent: '47px',
        fontSize: '20px',
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
        justifyContent: 'center',
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
        backgroundColor: '#2C719C',
        transition: 'opacity 0.4s',
        '&:hover': {
            opacity: 0.8,
            backgroundColor: '#2C719C',
        },
    },

    icon: {
        color: 'white',
        fontSize: 40,
    },

});

let produtos = [];

export class MaisVendidos extends PureComponent {


    state = {

        listaDeProdutos:

            [

                {
                    id: 5,
                    images: [
                        {
                            id: 1,
                            image_url: 'https://cdn.awsli.com.br/600x450/492/492729/produto/32850267/26cba2d95e.jpg',
                            created_at: "2020-04-05T16:26:05.962531-03:00",
                            updated_at: "2020-04-05T16:26:05.962648-03:00"
                        }
                    ],
                    name: 'DorFlex',
                    price: 35,
                    categories: [
                        {
                            id: 1,
                            name: "XAROPE",
                            created_at: "2020-04-03T01:01:54.306016-03:00",
                            updated_at: "2020-04-03T01:01:54.306048-03:00"
                        },
                        {
                            id: 2,
                            name: "PASTILHA",
                            created_at: "2020-04-03T01:02:11.701019-03:00",
                            updated_at: "2020-04-03T01:02:11.701046-03:00"
                        }
                    ],
                },

                {
                    id: 6,
                    name: 'Tylenol',
                    price: 35,
                    images: [
                        {
                            id: 2,
                            image_url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/65fc6fd4367f4c1dd36b525bec13176a4402349e.jpg?1583942107',
                            created_at: "2020-04-05T16:26:05.962531-03:00",
                            updated_at: "2020-04-05T16:26:05.962648-03:00"
                        }
                    ],

                    categories: [
                        {
                            id: 1,
                            name: "XAROPE",
                            created_at: "2020-04-03T01:01:54.306016-03:00",
                            updated_at: "2020-04-03T01:01:54.306048-03:00"
                        },
                        {
                            id: 2,
                            name: "PASTILHA",
                            created_at: "2020-04-03T01:02:11.701019-03:00",
                            updated_at: "2020-04-03T01:02:11.701046-03:00"
                        }
                    ],
                },
                {
                    id: 78,
                    name: 'Dipirona',
                    price: 35,
                    images: [
                        {
                            id: 3,
                            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
                            created_at: "2020-04-05T16:26:05.962531-03:00",
                            updated_at: "2020-04-05T16:26:05.962648-03:00"
                        }
                    ],
                    categories: [
                        {
                            id: 1,
                            name: "XAROPE",
                            created_at: "2020-04-03T01:01:54.306016-03:00",
                            updated_at: "2020-04-03T01:01:54.306048-03:00"
                        },
                        {
                            id: 2,
                            name: "PASTILHA",
                            created_at: "2020-04-03T01:02:11.701019-03:00",
                            updated_at: "2020-04-03T01:02:11.701046-03:00"
                        }
                    ],
                },
                {
                    id: 99,
                    name: 'Mascara',
                    price: 35,
                    images: [
                        {
                            id: 4,
                            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3zYKBMsA4mKyfP9ZTbAswi-2TxP9efoNfj60yrOGQTK4Rgs1-&usqp=CAU',
                            created_at: "2020-04-05T16:26:05.962531-03:00",
                            updated_at: "2020-04-05T16:26:05.962648-03:00"
                        }
                    ],
                    categories: [
                        {
                            id: 1,
                            name: "XAROPE",
                            created_at: "2020-04-03T01:01:54.306016-03:00",
                            updated_at: "2020-04-03T01:01:54.306048-03:00"
                        },
                        {
                            id: 2,
                            name: "PASTILHA",
                            created_at: "2020-04-03T01:02:11.701019-03:00",
                            updated_at: "2020-04-03T01:02:11.701046-03:00"
                        }
                    ],
                },
                {
                    id: 9,
                    name: 'DorFlex',
                    price: 35,
                    mages: [
                        {
                            id: 3,
                            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
                            created_at: "2020-04-05T16:26:05.962531-03:00",
                            updated_at: "2020-04-05T16:26:05.962648-03:00"
                        }
                    ],
                    categories: [
                        {
                            id: 1,
                            name: "XAROPE",
                            created_at: "2020-04-03T01:01:54.306016-03:00",
                            updated_at: "2020-04-03T01:01:54.306048-03:00"
                        },
                        {
                            id: 2,
                            name: "PASTILHA",
                            created_at: "2020-04-03T01:02:11.701019-03:00",
                            updated_at: "2020-04-03T01:02:11.701046-03:00"
                        }
                    ],
                },

                {
                    id: 14,
                    name: 'Tylenol',
                    price: 35,
                    mages: [
                        {
                            id: 3,
                            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
                            created_at: "2020-04-05T16:26:05.962531-03:00",
                            updated_at: "2020-04-05T16:26:05.962648-03:00"
                        }
                    ],
                    categories: [
                        {
                            id: 1,
                            name: "XAROPE",
                            created_at: "2020-04-03T01:01:54.306016-03:00",
                            updated_at: "2020-04-03T01:01:54.306048-03:00"
                        },
                        {
                            id: 2,
                            name: "PASTILHA",
                            created_at: "2020-04-03T01:02:11.701019-03:00",
                            updated_at: "2020-04-03T01:02:11.701046-03:00"
                        }
                    ],
                },
                {
                    id: 39,
                    name: 'Dipirona',
                    price: 35,
                    mages: [
                        {
                            id: 3,
                            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
                            created_at: "2020-04-05T16:26:05.962531-03:00",
                            updated_at: "2020-04-05T16:26:05.962648-03:00"
                        }
                    ],
                    categories: [
                        {
                            id: 1,
                            name: "XAROPE",
                            created_at: "2020-04-03T01:01:54.306016-03:00",
                            updated_at: "2020-04-03T01:01:54.306048-03:00"
                        },
                        {
                            id: 2,
                            name: "PASTILHA",
                            created_at: "2020-04-03T01:02:11.701019-03:00",
                            updated_at: "2020-04-03T01:02:11.701046-03:00"
                        }
                    ],
                },
                {
                    id: 72,
                    name: 'Mascara',
                    price: 35,
                    mages: [
                        {
                            id: 3,
                            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
                            created_at: "2020-04-05T16:26:05.962531-03:00",
                            updated_at: "2020-04-05T16:26:05.962648-03:00"
                        }
                    ],
                    categories: [
                        {
                            id: 1,
                            name: "XAROPE",
                            created_at: "2020-04-03T01:01:54.306016-03:00",
                            updated_at: "2020-04-03T01:01:54.306048-03:00"
                        },
                        {
                            id: 2,
                            name: "PASTILHA",
                            created_at: "2020-04-03T01:02:11.701019-03:00",
                            updated_at: "2020-04-03T01:02:11.701046-03:00"
                        }
                    ],
                },
            ],

        produtoExibidoInicial: 0,
        produtoExibidoFinal: 3,
    };

    forwardImage = (() => {

        if ( (this.state.produtoExibidoFinal % this.state.slide.length  ) != 3 ) { // Nao Cheguei nos 4 primeiros

            this.setState({

                produtoExibidoFinal: this.state.produtoExibidoFinal + 1,
                produtoExibidoInicial: this.state.produtoExibidoInicial + 1,
            });

        } else {    // Reniciei o ciclo

            this.setState({

                produtoExibidoFinal: 3,
                produtoExibidoInicial: 0,
            });
        }

    })

    backImage = (() => {

        console.log('voltando');
    })




    render() {
        const {
            classes,
            history,
        } = this.props;

        return (

            <div>

                <div>

                    <Typography className={classes.text}>
                        Mais Vendidos
                </Typography>

                </div>

                <div className={classes.root}>

                    <div className={classes.buttonLeft}>
                        <IconButton
                            className={classes.button}
                            aria-label="Arrow Left"
                            onClick={() => this.backImage()}
                        >

                            <ChevronLeftIcon
                                className={classes.icon}
                                fontSize='inherit'
                            />

                        </IconButton>
                    </div>

                    <div className={classes.produtos}>

                        {

                            this.state.listaDeProdutos.map((produto, index) => {


                                if (index === (this.state.produtoExibidoInicial % this.state.slide.length) || index <= (this.state.produtoExibidoInicial % this.state.slide.length) ) {


                                    return <ProductCardComponent
                                        key={produto.id}
                                        product={produto}
                                        variant='normal'
                                    />
                                }else if( (this.state.produtoExibidoInicial % this.state.slide.length) >= 0 && (this.state.produtoExibidoInicial % this.state.slide.length)<=2 ){

                                    if(index <= (this.state.produtoExibidoInicial % this.state.slide.length)){

                                        return <ProductCardComponent
                                        key={produto.id}
                                        product={produto}
                                        variant='normal'
                                        />
                                    }
                                }
                            })
                        }

                    </div>

                    <div className={classes.buttonRight}  >
                        <IconButton
                            className={classes.button}
                            aria-label="Arrow Right"
                            onClick={() => this.forwardImage()}
                        >
                            <ChevronRightIcon
                                className={classes.icon}
                                fontSize='inherit'
                                size='medium'
                            />

                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
}

MaisVendidos.propTypes = {
    classes: PropTypes.object.isRequired,
    showSocialMedia: PropTypes.bool,
};

MaisVendidos.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(MaisVendidos)));
