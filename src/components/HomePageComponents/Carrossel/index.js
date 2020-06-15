import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';



const styles = {

    root: {
        color: '#e0e0e0',
        '&$checked': {
            color: '#e0e0e0',
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

        currentImageValue: '',
        slide: [],
        imagemAtual: 0,
        timer: null,
    };

    async componentDidMount() {

        this.props.history.location.pathname.replace('/produto/', '')
        this.props.history.location.pathname.replace('/', '')

        await axios.get(`https://ecommerce-engsoft.herokuapp.com/carrosel/11`)

          .then((response) => {
            console.log(response);
            this.setState((prevState) => ({ ...prevState, slide: response.data.data.images, currentImageValue: response.data.data.images[0].url  }));
          })
          .catch((error) => {
            console.log('error fetching product');
            console.error(error)
          })
    
      }


    forwardImage = (() => {


        if (this.state.imagemAtual !== this.state.slide.length - 1) {

            this.setState({

                imagemAtual: this.state.imagemAtual + 1,
                currentImageValue: this.state.slide[this.state.imagemAtual + 1].url
            });

        } else {

            this.setState({

                imagemAtual: 0,
                currentImageValue: this.state.slide[0].url
            });
        }

    })

    stopAutoPlay = (event) => {


        const valor = event.target.value   // Pegar a imagem que a bolinha selecionada possui

        this.state.slide.map((slide, index) => { // Ver qual bolinha foi selecionada

            if (valor === slide.url) {

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

            this.reStartAutoPlay()
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

        const { classes ,history} = this.props;
     

        return (

            <div className={classes.container} >

                <Link
                    className={classes.imagem}
                    to={ this.state.slide[this.state.imagemAtual] ? this.state.slide[this.state.imagemAtual].link : ''}  
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
                                checked={this.state.currentImageValue === slide.url}
                                onChange={this.stopAutoPlay}
                                value={slide.url}
                                name={`${slide.id}`}
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                }}
                            />
                        ))
                        
                    }

                </div>

               
                { this.state.slide[this.state.imagemAtual] ? this.autoPlay() : console.log("BACK DESLIGADO")}

            </div>
        );
    }
}

Carrossel.propTypes = {

    classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Carrossel)));
