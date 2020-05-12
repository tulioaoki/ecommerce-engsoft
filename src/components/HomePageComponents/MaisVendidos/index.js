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

let vetor; // Vetor usado para colocar a quantidade exata de produtos que serão exibidos.

let produto = null; // Pegar um produto especifico e exibir ele.

let i = -1;     // Colocar os produtos na ordem certa. Usado o loop do maps do vetor.map.

let index;    // Pegar a posição do produto que esta no state listaDeProdutos e que será exibido .

export class Slider extends PureComponent {


    state = {        

        produtoExibidoInicial: 0,
        produtoExibidoFinal:  8,
        forward: true        

    };

    forwardImage = (() => {

        if ((this.state.produtoExibidoInicial % this.props.images.length) !== this.props.images.length-1) { // Nao Cheguei nos 4 primeiros

            this.setState({                
                produtoExibidoInicial: this.state.produtoExibidoInicial + 1,
                produtoExibidoFinal:  this.state.produtoExibidoInicial + 1,
                forward: true,
            });

        
        } else {    // Reniciei o ciclo

            this.setState({    

                produtoExibidoInicial: 0,
                produtoExibidoFinal:  this.props.images.length,
                forward: true,
            });
        }

    })

    backImage = (() => {

        if ((this.state.produtoExibidoFinal % this.props.images.length) !== 1) { // Nao Cheguei nos 4 primeiros

            this.setState({                
                produtoExibidoInicial: this.state.produtoExibidoFinal -1,
                produtoExibidoFinal:  this.state.produtoExibidoFinal -1,
                forward: false,
            });

        
        } else {    // Reniciei o ciclo

            this.setState({    
                            
                produtoExibidoInicial: 0,
                produtoExibidoFinal:  this.props.images.length,
                forward: false,
            });
        }
    })


    render() {
        
        const {
            classes,
            productAmount, // Informa quantos produtos serão exibidos por vez
            images,        // Array De Images que serão exibidos
        } = this.props;

        vetor = new Array(productAmount); // Criar um vetor de tamanho variado que terá a quantidade de produtos que serão exibidos
        vetor.fill(1); // Preencher todo o vetor com o valor 1, só para poder usar o maps depois
        
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

                                    index =  ( (this.state.produtoExibidoInicial + i) % images.length);                                
                                
                                }else{  // Usei o botão da esquerda

                                    index =  ( (this.state.produtoExibidoFinal + i) % images.length);     
                                }

                                if(i === vetor.length-1){ // Limpar o valor de i para a o proximo produto
                                    i = -1;
                                }

                                produto = images[index];
                                
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
    images: PropTypes.array.isRequired,
};

Slider.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Slider)));
