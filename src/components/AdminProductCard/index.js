import { Select, TextField, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
    minHeight: '60vh',
    maxHeight: '60vh',
    minWidth: '60vw',
    maxWidth: '60vw',
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
    }))
  }

  render() {
    const {
      product,
      classes,
      variant,
      theme
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

    const changeSelect = name => event => {
        this.setState({ [name]: Number(event.target.value) });
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
                    autoFocus
                    margin="dense"
                    id="descricao"
                    label="Descrição"
                    type="text"
                    name="descricao"
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
                    <FormControl className={clsx(classes.formControl, classes.noLabel)}>
                        <Select
                        multiple
                        displayEmpty
                        value={this.state.categorias}
                        onChange={handleChange}
                        name="categorias"
                        input={<Input />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Placeholder</em>;
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
                            <em>Placeholder</em>
                        </MenuItem>
                        {this.state.categorias.map((categorie) => (
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

export default withRouter(connect()(withStyles(styles)(AdminProductCard)));
