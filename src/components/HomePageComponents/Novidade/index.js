import { Typography, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AZUL_ESCURO, TITLE } from '../../../utils/colors';
import Slider from '../../Slide';
import axios from 'axios';

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
        alignItems: 'center',
        padding: '0 0 10px 0',
    },
        
    novidades_categoria: {
        color: '#424242',
        fontSize: '12px',
    },

    selected: {

    },
    
});

const TabsStyle = withStyles({
    root:{
        '&selected':{
            textColor: AZUL_ESCURO,
        },
    },
})(Tabs);

export class Novidade extends PureComponent {


    state = {
        categorias: [],
        value: null,
        listaProdutos:[],
      
    };

    async componentDidMount() {
       
        await axios.get(`https://ecommerce-engsoft.herokuapp.com/categories`)
          .then((response) => {

                this.setState((prevState) => ({ ...prevState, categorias: response.data.data, value: 0, 
                                                           
            }));
          })
          .then(()=>(this.categories(null,0)))
          .catch((error) => {
            console.log('error fetching product');
            console.error(error)
          })

      }
    
    pegarListaDeCategorias =  async (id) =>{

        await axios.get(`https://ecommerce-engsoft.herokuapp.com/products/recent?categories=[${id}]`)
          .then((response) => {

                this.setState((prevState) => ({ ...prevState, listaProdutos: response.data.data, 
                                                       
            }));
          })
          .catch((error) => {
            console.log('error fetching product');
            console.error(error)
          })
    }  

    categories = ((event, newValue) => {
        
        console.log(`Index que to recebendo: ${newValue}`)
        
        this.setState({             // Mudar a imagem 

            value: newValue
        });
          
        this.slide(this.state.value)            

    })

    slide =  (indexCategorias) => {
        
        if (typeof this.state.categorias !== 'undefined' && this.state.categorias.length >= 0 ){ 
   
           let index = this.state.categorias[indexCategorias].id

           this.pegarListaDeCategorias(index)            
        }    
    }

    render() {

        const {
            classes,
        } = this.props;

        return (
            <div className={classes.root}>
                
                <Grid container style={{ marginBottom: '50px', marginTop: '50px' }}>
                    
                    <Grid xs={12} sm={12}>
                        <Typography className={classes.text}>
                            Novidades
                        </Typography>
                    </Grid>
                    
                    <TabsStyle centered 
                        style={{paddingLeft: '10px'}}
                        value={this.state.value}
                        onChange={this.categories}
                        indicatorColor="white"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {   this.state.categorias.map( (categoria, index) => {
                            return(<Tab className={classes.novidades_categoria} style={this.state.value == index ? {color: AZUL_ESCURO, fontWeight: 900} : {}} label={categoria.name}  />)
                            })
                        }
                    </TabsStyle>
                    <br></br>
                    <br></br>
                        {
                            (typeof this.state.listaProdutos !== 'undefined' && this.state.listaProdutos.length > 0 && this.state.value !== null) &&
                                
                            <Slider productAmount={4} images={this.state.listaProdutos}/>
                        }   
                </Grid>      

            </div> 
        );            
    
    }
}

Novidade.propTypes = {

};

Novidade.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Novidade)));

