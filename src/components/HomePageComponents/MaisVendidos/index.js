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
import { AZUL_ESCURO } from '../../../utils/colors';




const styles = () => ({

    text: {
        
        color: AZUL_ESCURO,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        textIndent: '47px',
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

let vetor; // Vetor usado para colocar a quantidade exata de produtos que serão exibidos.

let produto = null; // Pegar um produto especifico e exibir ele.

let i = -1;     // Colocar os produtos na ordem certa. Usado o loop do maps do vetor.map.

let index;    // Pegar a posição do produto que esta no state listaDeProdutos e que será exibido .

export class Slider extends PureComponent {


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
                        },
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
                    id: 14,
                    name: 'Tylenol',
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
                    id: 39,
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
                    id: 72,
                    name: 'Mascara',
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
            ],

        produtoExibidoInicial: 0,
        produtoExibidoFinal:  8,
        forward: true        

    };

    forwardImage = (() => {

        if ((this.state.produtoExibidoInicial % this.state.listaDeProdutos.length) !== this.state.listaDeProdutos.length-1) { // Nao Cheguei nos 4 primeiros

            this.setState({                
                produtoExibidoInicial: this.state.produtoExibidoInicial + 1,
                produtoExibidoFinal:  this.state.produtoExibidoInicial + 1,
                forward: true,
            });

        
        } else {    // Reniciei o ciclo

            this.setState({    

                produtoExibidoInicial: 0,
                produtoExibidoFinal:  this.state.listaDeProdutos.length,
                forward: true,
            });
        }

    })

    backImage = (() => {

        if ((this.state.produtoExibidoFinal % this.state.listaDeProdutos.length) !== 1) { // Nao Cheguei nos 4 primeiros

            this.setState({                
                produtoExibidoInicial: this.state.produtoExibidoFinal -1,
                produtoExibidoFinal:  this.state.produtoExibidoFinal -1,
                forward: false,
            });

        
        } else {    // Reniciei o ciclo

            this.setState({    
                            
                produtoExibidoInicial: 0,
                produtoExibidoFinal:  this.state.listaDeProdutos.length,
                forward: false,
            });
        }
    })


    render() {
        
        const {
            classes,
            productAmount, // Informa quantos produtos serão exibidos por vez
        } = this.props;

        vetor = new Array(productAmount); // Criar um vetor de tamanho variado que terá a quantidade de produtos que serão exibidos
        vetor.fill(1,...vetor); // Preencher todo o vetor com o valor 1, só para poder usar o maps depois
        
        return (

            <div className='container'>

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
                            
                            vetor.map(()=>{

                                i = i + 1;
                          
                                if(this.state.forward){ // Useio o botao da direita

                                    index =  ( (this.state.produtoExibidoInicial + i) % this.state.listaDeProdutos.length);                                
                                
                                }else{  // Usei o botão da esquerda

                                    index =  ( (this.state.produtoExibidoFinal + i) % this.state.listaDeProdutos.length);     
                                }

                                if(i === vetor.length-1){ // Limpar o valor de i para a o proximo produto
                                    i = -1;
                                }

                                produto = this.state.listaDeProdutos[index];
                                
                                return <ProductCardComponent
                                            key={produto.id}
                                            product={produto}
                                            variant='normal'
                                        />
                                
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

Slider.propTypes = {
    classes: PropTypes.object.isRequired,
    productAmount: PropTypes.number.isRequired,
};

Slider.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Slider)));
