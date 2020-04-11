import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const styles = {

    root: {
        color: '#1F509C',
        '&$checked': {
            color: '#1F509C',
        },
    },
    checked: {},

    container: {
        position: 'absolute',
        width: '100%',
        height: '35%',
        display: 'flex',
        justifyContent: 'space-around',
    },

    
    buttonLeft: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        right: '70px',
        bottom: '30px',        
    },

    buttonRight: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        left: '70px',
        bottom: '30px',
    },

    button:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C719C',
        transition: 'opacity 0.4s',
        '&:hover': {                        
            opacity: 0.8,
            backgroundColor: '#2C719C',     
        },
        
    },

    icon: {
        color: 'white',
    },

    imagem: {
        position: 'absolute',
        width: '100%',
        height: '100%',
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


let timer = null;
let stopPlay = false; // Usar essa variavel para parar o auto play e voltar com o auto play

class Slider extends PureComponent {

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
    };
 
    
    handleChange = event => {

        const valor = event.target.value
       
        this.state.slide.map((slide,index) => {

            if(valor === slide.imagem){

                this.setState({ 
                    
                    currentImageValue: valor,
                    imagemAtual: index,
                });                
            }            
        })
    };


    forwardImage = (() => {        
        

        if(this.state.imagemAtual !== this.state.slide.length-1){

            this.setState({            

                imagemAtual: this.state.imagemAtual + 1,
                currentImageValue: this.state.slide[this.state.imagemAtual + 1].imagem 
            });

        }else{

            this.setState({            

                imagemAtual: 0,
                currentImageValue: this.state.slide[0].imagem 
            });
        }
       
    })

    backImage = (() => {
        

        if(this.state.imagemAtual !== 0){

            this.setState({            

                imagemAtual: this.state.imagemAtual - 1,
                currentImageValue: this.state.slide[this.state.imagemAtual - 1].imagem 
            });

        }else{

            const tamMaximo = this.state.slide.length;

            this.setState({            

                imagemAtual: tamMaximo-1,
                currentImageValue: this.state.slide[tamMaximo-1].imagem 
            });
        }
    })

    autoPlay = (() => { 
            
        if(timer === null){

            console.log('Criando o loop da função autoPlay')

            timer = setInterval(() => this.forwardImage(), 6000);
        }
    })


    stopAutoPlay = (() => {  /* Ver quando parar o auto play */
        
        if(timer !== null){

            clearInterval(timer);
        }
        timer = null;        
    })
  

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.container}>

                <Link
                    className={classes.imagem}
                    to= {this.state.slide[this.state.imagemAtual].link}
                >
                    <img
                        className={classes.imagem}
                        src={this.state.currentImageValue}
                    />
                </Link>

                <div className={classes.buttonLeft}>
                    <IconButton
                        className= {classes.button}  
                        aria-label="Arrow Left"
                        size='medium'                       
                        onClick = {() => (this.backImage(), this.stopAutoPlay())}
                    >

                        <ChevronLeftIcon
                            className= {classes.icon}  
                            fontSize= 'inherit'
                            size = 'medium'
                        />
                        

                    </IconButton>
                </div>

               
                <div className={classes.bolinhas}>

                    {
                        this.state.slide.map((slide) => (

                            <Radio
                                key = {slide.id}
                                checked={this.state.currentImageValue === slide.imagem}
                                onChange={this.handleChange}
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

                <div className={classes.buttonRight}  >
                    <IconButton
                        className= {classes.button}
                        aria-label="Arrow Right"
                        size='medium'                       
                        onClick = {() => (this.forwardImage(), this.stopAutoPlay() )}
                    >
                        <ChevronRightIcon
                            className= {classes.icon}   
                            fontSize= 'inherit'
                            size = 'medium'
                        />                        

                    </IconButton>
                </div>


                {this.autoPlay() }

            </div>
        );
    }
}
Slider.propTypes = {

    classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Slider)));
