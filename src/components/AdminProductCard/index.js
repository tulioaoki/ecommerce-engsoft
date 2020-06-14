import { Select, TextField, withStyles, FormControlLabel, Checkbox, IconButton, Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AZUL_ESCURO } from '../../utils/colors';
import { withSnackbar } from 'notistack';
import generateUID from '../../utils/extra';



const styles = (theme) => ({
  media: {
    display: 'flex',
    flex: 1,
    height: 0,
    paddingTop: '56.25%', // 16:9
    'align-self':'flex-end'
  },
  buyButton: {
    marginLeft: 'auto',
    padding: '7px',
    backgroundColor: AZUL_ESCURO,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1a237e',
    },
  },
  dialogPaper: {
    minHeight: '80vh',
    maxHeight: '80vh',
    minWidth: '80vw',
    maxWidth: '80vw',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  card:{
    minHeight: '40vh',
    maxHeight: '40vh',
    minWidth: '16vw',
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

class AdminProductCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            id: null,
            nome: '',
            descricao:'',
            price:9999999,
            categorias:['Selecione a Categoria'],
            categorie:'',
            todasCategorias:[],
            offer:false,
            offer_price:0,
            images:{},
            quantity:0,
        };
    }
  getCategoriesString() {
    const {
      product,
    } = this.props;
    let string = '';
    product.categories.forEach((eachProd) => {
      if (string === '') {
        string += eachProd.name;
      } else {
        string += `, ${eachProd.name}`;
      }
    });
    return string;
  }

  componentDidMount(){
    const {
        product,
      } = this.props;
    this.setState(prevState => ({ 
      ...prevState,
      nome:product.name,
      descricao:product.description,
      categorias:product.categories,
      price: product.price,
      offer:product.offer,
      offer_price:product.offer_price,
      images:product.images,
      quantity: product.quantity,
    }))
  }

  render() {
    const {
      product,
      classes,
      variant,
      categories,
    } = this.props;


    const handleClickOpen = () => {
        this.setState({open:true})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
    }

    const handleClose = () => {
        this.setState({ open:false })    
    }

    const handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    const switchBoolean = (value) => {
      this.setState({
          offer: value
      });
      };

    const addImage = e => {
        let newImages = Object.assign({}, this.state.images);
        let imageName = generateUID()
        newImages[imageName] = {"image_url":''}
        this.setState(prevState => ({...prevState, images:newImages}))
    };

    const handleChangeImages = e => {
      let clone = this.state;
      let images = this.state.images
      let obj = images[e.target.name]
      obj['image_url'] = e.target.value
      clone.images[e.target.name] = obj
      this.setState({
          clone,
      })
  };

    const removeImage = (e,key) => {
        let newImages = Object.assign({}, this.state.images);
        delete newImages[key]
        this.setState(prevState => ({...prevState, images:newImages}))
    };

    let rows = []; 
    for (let key of Object.keys(this.state.images)) {
        let v =  this.state.images[key]
        rows.push(
            <div style={{display:'flex', width:'100%', alignItems: 'center', justifyContent:'center'}}>
            <Avatar alt={key} src={v.image_url} className={classes.large} style={{marginRight:'5px'}}/>
            <TextField
                autoFocus
                margin="dense"
                id={key}
                label="Nova Imagem"
                type="text"
                name={key}
                fullWidth
                placeholder='Url da Imagem'
                className='formField'
                onChange={handleChangeImages}
                value={v.image_url}
            />
            <IconButton onClick={(e)=>removeImage(e,key)} style={{'border-radius':'100%'}}><DeleteIcon color="secondary" fontSize="medium"/></IconButton>
            </div>
        );
    }
    
    return (
        <>
      <Card className={classes.card} style={{maxWidth: variant === 'small' ? 280 : 320,}} variant="outlined" onClick={handleClickOpen}>
        <CardHeader
          title={product.name}
          subheader={(
            <>
              <Typography color="primary" className={classes.price} display="inline">
                {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </Typography>
              {variant === 'normal'
                && (
                <Typography display="inline" style={{ marginLeft: 8 }}>
                  { this.getCategoriesString() }
                </Typography>
                )}
            </>
          )}
        />
        {
          product.images && product.images.length > 0
          && (
            <CardMedia
              className={classes.media}
              image={product.images[0].image_url}
              title="Imagem do produto"
            />
          )
        }
      </Card>
      <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.dialogPaper }} >
                <DialogTitle id="form-dialog-title">{product.name}</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                    Editar Produto
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="nome"
                    label="Nome"
                    type="text"
                    fullWidth
                    placeholder='Nome do Produto'
                    className='formField'
                    onChange={handleChange}
                    value={this.state.nome}
                    />
                    <TextField
                      id="descricao"
                      fullWidth={true}
                      multiline={true}
                      rows={5}
                      name="descricao"
                      label="Descreva o produto"
                      placeholder="Descrição do produto"
                      onChange={handleChange}
                      value={this.state.descricao}
                    />
                    <div style={{display:'flex', width:'95%', alignItems: 'center', justifyContent:'center'}}>
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
                    style={{marginLeft:'10px'}}
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
                    </div>
                    <div style={{display:'flex', width:'95%', alignItems: 'center', justifyContent:'center'}}>
                    <FormControlLabel
                        style={{marginRight: '15px'}}
                        labelPlacement='start' 
                        control={
                            <       Checkbox checked={this.state.offer} onChange={(event) => switchBoolean(event.target.checked)} />
                        }
                        label="Ativar oferta?"
                    />
                    <TextField
                    autoFocus
                    disabled={!this.state.offer}
                    margin="dense"
                    id="offer_price"
                    label="Preço de Oferta"
                    type="number"
                    name="offer_price"
                    fullWidth
                    placeholder='Preço do Produto em Oferta'
                    className='formField'
                    onChange={handleChange}
                    value={this.state.offer_price}
                    />
                    </div>
                    {rows}
                    <Typography>
                        Adicionar Imagem <IconButton onClick={addImage} style={{'border-radius':'100%'}}><AddCircleIcon style={{color:AZUL_ESCURO}} fontSize="large"/></IconButton>
                    </Typography>
                    <FormControl style={{minWidth: '90%'}} className={clsx(classes.formControl, classes.noLabel)}>
                        <Select
                        multiple
                        displayEmpty
                        value={this.state.categorias}
                        onChange={handleChange}
                        name="categorias"
                        input={<Input />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Sem categorias</em>;
                            }
                            let list = [];
                            for(let c in selected){
                                list.push(this.state.categorias[c].name)
                            }
                            return list.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem disabled value="">
                            <em> - </em>
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
                    Modificar
                    </Button>
                </DialogActions>
        </Dialog>
      </>
    );
  }
}

AdminProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(['small', 'normal']).isRequired,
  classes: PropTypes.object.isRequired,
};

AdminProductCard.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

const mapStateToProps = ({ REDUCER_CATEGORIES }, props) => ({
  categories:REDUCER_CATEGORIES.categories,
})


const AdminProductCardComponentsWithSnack = withSnackbar(AdminProductCard);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(AdminProductCardComponentsWithSnack)));
