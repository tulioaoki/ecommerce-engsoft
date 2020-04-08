import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';


const styles = {
    root: {
        color: 'black',
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
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    imagem: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    bolinhas: {

        paddingBottom: '40px',
    },
};




class Slider extends PureComponent {




    state = {
        selectedValue: 'https://http2.mlstatic.com/kit-emagrecedor-2-remedio-desodalina-colageno-vitamina-c-D_NQ_NP_646272-MLB31670921915_082019-F.jpg',

        imagens:
            [
                {
                    view: 'https://http2.mlstatic.com/kit-emagrecedor-2-remedio-desodalina-colageno-vitamina-c-D_NQ_NP_646272-MLB31670921915_082019-F.jpg',
                    link: '/'
                },

                {
                    view: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuXj1qOjRamI&psig=AOvVaw2Q8bBYo_sxHEcXAkRagQYW&ust=1586383121508000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOicsMan1-gCFQAAAAAdAAAAABAD',
                    link: '/social'
                },

                {
                    view: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.paiquere.com.br%2Fprocon-encontra-mais-de-150-produtos-vencidos-em-farmacia-na-zona-leste%2F&psig=AOvVaw2Q8bBYo_sxHEcXAkRagQYW&ust=1586383121508000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOicsMan1-gCFQAAAAAdAAAAABAz',
                    link: '/login'
                }
            ],

        imagemAtual: 0,

    };



    mudarImagem = (() => ({



    }))

    handleChange = event => {

        this.setState({ selectedValue: event.target.value });
    };
     
    
    queImagemEstou = (()=>(

        this.setState((prevState) => ({

            imagemAtual: prevState + 1
        }))
    ))
    
   

    


    render() {

        const { classes } = this.props;

        return (
            <div className={classes.container}>

                <Link
                    className={classes.imagem}
                    to={this.state.imagens[this.state.imagemAtual].link}
                >
                    <img
                        className={classes.imagem}
                        src={this.state.imagens[this.state.imagemAtual].view}
                    />
                </Link>

                <div className={classes.bolinhas}>

                        <Radio
                            checked={this.state.selectedValue === this.state.imagens[0].view}
                            onChange={this.handleChange}
                            value={this.state.imagens[0].view}
                            name={`imagem ${this.state.imagemAtual}`}
                            classes={{
                                root: classes.root,
                                checked: classes.checked,
                            }}
                        />
                        <Radio
                            checked={this.state.selectedValue === this.state.imagens[1].view}
                            onChange={this.handleChange}
                            value={this.state.imagens[1].view}
                            name={`imagem ${this.state.imagemAtual}`}
                            classes={{
                                root: classes.root,
                                checked: classes.checked,
                            }}
                        />
                        <Radio
                            checked={this.state.selectedValue === this.state.imagens[2].view}
                            onChange={this.handleChange}
                            value={this.state.imagens[2].view}
                            name={`imagem ${this.state.imagemAtual}`}
                            classes={{
                                root: classes.root,
                                checked: classes.checked,
                            }}
                        />                             



                </div>
            </div>
        );
    }
}
Slider.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Slider)));
