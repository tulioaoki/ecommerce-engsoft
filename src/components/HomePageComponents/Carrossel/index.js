import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import {  AZUL_ESCURO } from '../../../utils/colors';

const styles = {

    root: {
        color: AZUL_ESCURO,
        '&$checked': {
            color: AZUL_ESCURO,
        },
    },
    checked: {},

    container: {
        position: 'relative',
        width: '100%',
        height: '300px',
        display: 'flex',
        justifyContent: 'space-around',
    },

    icon: {
        color: 'white',
        fontSize: 40,
    },

    imagem: {
        position: 'absolute',
        width: '100%',
        height: '300px',
    },

    bolinhas: {
        bottom: '10px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '40px',
    },
};

let tempo = null;

class Carrossel extends PureComponent {

    state = {

        currentImageValue: 'https://http2.mlstatic.com/kit-emagrecedor-2-remedio-desodalina-colageno-vitamina-c-D_NQ_NP_646272-MLB31670921915_082019-F.jpg',

        slide:
            [
                {
                    imagem: 'https://http2.mlstatic.com/kit-emagrecedor-2-remedio-desodalina-colageno-vitamina-c-D_NQ_NP_646272-MLB31670921915_082019-F.jpg',
                    link: '/',
                    id: 1,
                },

                {
                    imagem: 'https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg',
                    link: '/social',
                    id: 2,
                },

                {
                    imagem: 'https://bisturi.com.br/12262-large_default/coperalcool-alcool-gel-400g.jpg',
                    link: '/login',
                    id: 3,
                }
            ],

        imagemAtual: 0,
        timer: null,
    };

    forwardImage = (() => {


        if (this.state.imagemAtual !== this.state.slide.length - 1) {

            this.setState({

                imagemAtual: this.state.imagemAtual + 1,
                currentImageValue: this.state.slide[this.state.imagemAtual + 1].imagem
            });

        } else {

            this.setState({

                imagemAtual: 0,
                currentImageValue: this.state.slide[0].imagem
            });
        }

    })

    stopAutoPlay = (event) => {


        const valor = event.target.value   // Pegar a imagem que a bolinha selecionada possui

        this.state.slide.map((slide, index) => { // Ver qual bolinha foi selecionada

            if (valor === slide.imagem) {

                this.setState({             // Mudar a imagem 

                    currentImageValue: valor,
                    imagemAtual: index,
                    timer: 2,
                });
            }

        });
   
        clearInterval(tempo);                // Parar o autoPLay        
        return tempo = null;
    };

    autoPlay = (() => {

        if (this.state.timer === null) {
                        
            tempo = setInterval(() => this.forwardImage(), 6000);
            this.setState({

                timer: tempo
            });
        }else if (this.state.timer === 2){

            setTimeout(() => this.reStartAutoPlay(), 4000)
        }
    })

    reStartAutoPlay = (() => {  /* Ver quando parar o auto play */

        if (this.state.timer !== null) {     

            this.setState({

                timer: null,
            });
        }        
    })

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.container}>

                <Link
                    className={classes.imagem}
                    to={this.state.slide[this.state.imagemAtual].link}
                >
                    <img
                        className={classes.imagem}
                        src={this.state.currentImageValue}
                        alt="Imagem que roda no carrossel"
                    />
                </Link>


                <div className={classes.bolinhas}>

                    {
                        this.state.slide.map((slide) => (

                            <Radio
                                key={slide.id}
                                checked={this.state.currentImageValue === slide.imagem}
                                onChange={this.stopAutoPlay}
                                value={slide.imagem}
                                name={`${slide.id}`}
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                }}
                            />
                        ))
                    }

                </div>


                {this.autoPlay()}

            </div>
        );
    }
}
Carrossel.propTypes = {

    classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Carrossel)));
