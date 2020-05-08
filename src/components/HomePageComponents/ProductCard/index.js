import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AZUL_ESCURO } from '../../../utils/colors';

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

  render() {
    const {
      product,
      classes,
      variant,
    } = this.props;

    return (
      <Card style={{ maxWidth: variant === 'small' ? 280 : 320}} variant="outlined" > 
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
        <CardMedia
          className={classes.media}
          image={product.images[0].image_url}
          title="Imagem do produto"
        />
        <CardActions disableSpacing style={{ justifyContent: 'center' }}>
          <IconButton aria-label="Adicionar aos favoritos">
            <FavoriteIcon />
          </IconButton>
          <Button size="small"  className={classes.buyButton}>
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

export default withRouter(connect()(withStyles(styles)(ProductCardComponent)));
