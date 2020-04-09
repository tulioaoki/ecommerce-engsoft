import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
        backgroundColor: 'black',

    },

    buttonRight: {

        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'black',

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




class Slider extends PureComponent {

    state = {

        selectedValue: 'https://http2.mlstatic.com/kit-emagrecedor-2-remedio-desodalina-colageno-vitamina-c-D_NQ_NP_646272-MLB31670921915_082019-F.jpg',

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
        arrowRight: false,
        arrowLeft: false,    
    };

    

    mudarImagem = (() => ({


    }))

    handleChange = event => {

        this.setState({ selectedValue: event.target.value });
    };


    forwardImage = (() => {

        if(this.state.imagemAtual !== this.state.slide.length){

            this.setState((prevState) => ({            

                imagemAtual: prevState + 1
            }))

        }else{
            this.setState({            

                imagemAtual: 0,
            })
        }    
    })


    backImage = (() => {

        if(this.state.imagemAtual !== 0){

            this.setState((prevState) => ({            

                imagemAtual: prevState - 1
            }))

        }else{

            const tamMaximo = this.state.slide.length;

            this.setState({            

                imagemAtual: tamMaximo,
            })
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
                        src={this.state.selectedValue}
                    />
                </Link>

                <div className={classes.buttonLeft}>
                    <IconButton
                        color="primary"
                        aria-label="Arraow Left"
                        size='large'
                        fullWidth='true'
                    >

                        <ArrowBackIosIcon />

                    </IconButton>
                </div>

               
                <div className={classes.bolinhas}>

                    {
                        this.state.slide.map((slide) => (

                            <Radio
                                checked={this.state.selectedValue === slide.imagem}
                                onChange={this.handleChange}
                                value={slide.imagem}
                                name={slide.id}
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                }}
                            />
                        ))
                    }

                        getElementByID REact

                </div>

                <div className={classes.buttonRight}  >
                    <IconButton
                        color="primary"
                        aria-label="Arraow Right"
                        iconSizeLarge='size="large'
                        fullWidth='true'
                        onClick
                    >
                        <ArrowForwardIosIcon />

                    </IconButton>
                </div>

            </div>
        );
    }
}
Slider.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Slider)));
