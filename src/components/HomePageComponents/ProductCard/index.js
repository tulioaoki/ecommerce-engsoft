import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AZUL_ESCURO } from '../../../utils/colors';
import { handleAddFavorites, handleDeleteFavorites } from '../../../actions/favorites';

const styles = () => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

});

class ProductCardComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getCategoriesString() {
    const {
      product
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

  render() {
    const {
      product,
      key,
      classes,
      variant,
      dispatch,
      favorites,
      history
    } = this.props;

    let isFavorite = favorites.reduce((i,atual) => {
      return (i || atual.id === product.id)
    }, false)

    const handleFavorite = () =>{
      if(!isFavorite){
        dispatch(handleAddFavorites(product))
      }else{
        dispatch(handleDeleteFavorites(product))
      }
    }
    
    return (
      <Card onClick={() => (history.push(`/produto/${product.id}`))} style={{ maxWidth: variant === 'small' ? 280 : 320, height: '100%'}} variant="outlined"> 
        <div style={{minHeight: '100%'}}>
        <CardHeader 
          title={product.name}
          subheader={(
            <>
              <Typography color="primary" className={classes.price} display="inline">
                {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </Typography>
              {/*{variant === 'normal'
                && (
                <Typography display="inline" style={{ marginLeft: 8 }}>
                  { this.getCategoriesString() }
                </Typography>
                )}*/}
            </>
          )}
        />
        <CardMedia 
          className={classes.media}
          image={product.images[0].image_url}
          title="Imagem do produto"
        />
        </div>
        <CardActions disableSpacing style={{ justifyContent: 'center' }} style={{marginTop: '-55px', paddingBottom: '55px'}}>
          <IconButton onClick={handleFavorite} aria-label="Adicionar aos favoritos">
            <FavoriteIcon style={{color: isFavorite ? 'red' : 'gray'}} />
          </IconButton>
          <Button size="small" className={classes.buyButton}>
            Comprar
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ProductCardComponent.propTypes = {
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


const mapStateToProps = ({ REDUCER_CART, REDUCER_FAVORITES }, props) => ({
  cart:REDUCER_CART.cart_products,
  favorites:REDUCER_FAVORITES.favorites,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ProductCardComponent)));
