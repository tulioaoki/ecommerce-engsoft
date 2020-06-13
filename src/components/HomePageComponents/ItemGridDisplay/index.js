import React from 'react'

import { PureComponent } from 'react';
import { Button, DialogActions, DialogContentText, FormControl, Grid, IconButton, Input, MenuItem, Select, TextField, Typography, withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { handleAdminProducts, handleAddProduct, handleGetAllCategories } from '../../../actions/admin';
import { AZUL_ESCURO } from '../../../utils/colors';
import AdminProductCard from '../../AdminProductCard';
import SearchBox from '../../TopBarComponents/SearchBox';


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

});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


export class ItemGridDisplay extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          search: "",
          name:'',
          description:'',
          quantity:0,
          imagesNumber:0,
          images:{},
          categorias:[],
          price:0,
        };
      }

    componentDidMount(){
        const {
            dispatch,
        } = this.props;
        dispatch(handleAdminProducts())
        dispatch(handleGetAllCategories())
    }

    render() {
        const {
            classes,
            displayName,
            items,
            dispatch,
            categories,
        } = this.props;
        const state = this.state;

        const searchHandler = e => {
            let search  = e.target.value;
            this.setState({[e.target.name]:search})
            dispatch(handleAdminProducts(
                {
                    page:1,
                    page_size:10,
                    search,
                }
            ))
        }

        const handleClickOpen = () => {
            this.setState({open:true})
        }

        const handleClose = () => {
            this.setState({ open:false })    
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const { dispatch } = this.props;
            const {name, description, images, categorias, price, quantity} = this.state;
            let body = {
                name,
                description,
                categories:categorias,
                price,
                quantity,
                images:[],
            }
            for(let x of Object.entries(images)){
                body.images.push({image_url:x[1]})
            }
            dispatch(handleAddProduct(body)).then((r) =>
                {
                    if(typeof r !== 'undefined'){
                        this.props.enqueueSnackbar('Produto criado com sucesso!',
                        { variant: 'success', autoHideDuration: 3000, }
                      )
                    }
                }
            )
            handleClose();
        }
    
        const handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };

        const handleChangeImages = e => {
            let clone = this.state;
            let images = this.state.images
            images[e.target.name] = e.target.value
            clone.images[e.target.name] = e.target.value
            this.setState({
                clone,
            })
        };
        
        const addImage = e => {
            let newImages = this.state.images
            let imagesN  = this.state.imagesNumber
            let imageName = `image_${imagesN}`
            newImages[imageName] = ""
            this.setState(prevState => ({...prevState,imagesNumber: prevState.imagesNumber+1, images:newImages}))
        };
        
        let rows = []; 
        for (let i=0; i < state.imagesNumber; i++) {
             let v =  this.state.images[`image_${i}`]
             rows.push(
                <TextField
                    autoFocus
                    margin="dense"
                    id={`image_${i}`}
                    label="Nova Imagem"
                    type="text"
                    name={`image_${i}`}
                    fullWidth
                    placeholder='Url da Imagem'
                    className='formField'
                    onChange={handleChangeImages}
                    value={v}
                />
            );
        }
        return (
            <div className='container' style={{ marginBottom: '50px', marginTop: '50px', backgroundColor:'#f1f1f1', padding:'2rem'}}>
                <SearchBox placeholder='Digite o nome do produto' action={searchHandler}/>
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={12} >
                        <div>
                            <Typography className={classes.text}>
                                {displayName}
                                <IconButton onClick={handleClickOpen} style={{'border-radius':'100%'}}><AddCircleIcon style={{color:AZUL_ESCURO}} fontSize="large"/></IconButton>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container spacing={5}  style={{ marginLeft: '40px', marginRight: '40px' }} >
                        { 
                            items.map((item) => {
                                return <Grid item xs={12} sm={3} key={item.id} >
                                    <AdminProductCard
                                        product={item}
                                        variant='normal'
                                    />
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>
                <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.dialogPaper }} >
                <DialogTitle id="form-dialog-title">Inserir Produto</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                    Inserir Produto
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Nome"
                    type="text"
                    fullWidth
                    placeholder='Nome do Produto'
                    className='formField'
                    onChange={handleChange}
                    value={this.state.nome}
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="descricao"
                    label="Descrição"
                    type="text"
                    name="description"
                    fullWidth
                    placeholder='Descrição do Produto'
                    className='formField'
                    onChange={handleChange}
                    value={this.state.descricao}
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="price"
                    label="Preço"
                    type="number"
                    name="price"
                    fullWidth
                    placeholder='Preço do Produto'
                    className='formField'
                    onChange={handleChange}
                    value={this.state.price}
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="quantity"
                    label="Quantidade"
                    type="number"
                    name="quantity"
                    fullWidth
                    placeholder='Quantidade do Produto'
                    className='formField'
                    onChange={handleChange}
                    value={this.state.quantity}
                    />
                    <Typography>
                        Adicionar Imagem <IconButton onClick={addImage} style={{'border-radius':'100%'}}><AddCircleIcon style={{color:AZUL_ESCURO}} fontSize="large"/></IconButton>
                    </Typography>
                    {rows}
                    <FormControl className={clsx(classes.formControl, classes.noLabel)}>
                        <Select
                        style={{marginTop:20, width:'90%'}}
                        multiple
                        displayEmpty
                        value={this.state.categorias}
                        onChange={handleChange}
                        name="categorias"
                        input={<Input />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Inserir Categorias</em>;
                            }
                            let list = [];
                            for (let [key, value] of Object.entries(selected)) {
                                list.push(categories.find(x => x.id === value).name)
                            }
                            return list.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem disabled value="">
                            <em>Sem categorias</em>
                        </MenuItem>
                        {categories.map((categorie) => (
                            <MenuItem key={categorie.id} value={categorie.id}>
                            {categorie.name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                    Cancelar
                    </Button>
                    <Button onClick={handleSubmit}  
                    type='submit' 
                    color="primary"
                    >
                    Salvar
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}

const mapStateToProps = ({ REDUCER_ADMIN_PRODUCTS, REDUCER_CATEGORIES }, props) => ({
    items:REDUCER_ADMIN_PRODUCTS.admin_products,
    categories:REDUCER_CATEGORIES.categories,
})

ItemGridDisplay.propTypes = {
    displayName: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    enqueueSnackbar: PropTypes.func.isRequired,
};

ItemGridDisplay.defaultProps = {
    displayName: 'Produtos Cadastrados',
    items:[],
};
const ItemGridComponentsWithSnack = withSnackbar(ItemGridDisplay);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(ItemGridComponentsWithSnack)));
