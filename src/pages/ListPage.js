import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import ProductCardComponent from '../components/HomePageComponents/ProductCard';
import { AZUL_ESCURO } from '../utils/colors';

const styles = () => ({
  rootPadding: {
    margin: '16px 0 15px 0',
  },
  button: {
    marginLeft: 'auto',
    padding: '7px',
    backgroundColor: AZUL_ESCURO,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1a237e',
    },
  },
});

class ListPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      filterCategories: [],
      loading: true,
      itemCount: 0,
      pageCount: 1,
    };
  }

  async componentDidMount() {
    await axios.get('https://ecommerce-engsoft.herokuapp.com/categories')
      .then((response) => {
        this.setState((prevState) => ({ ...prevState, categories: response.data.data }));
      })
      .catch((error) => {
        console.log('error fetching categories');
        console.error(error);
      });

    this.fetchProducts();
  }

  async filterCategories(category) {
    const { filterCategories } = this.state;
    const newFilterCategories = Array.from(filterCategories);
    if (filterCategories.includes(category.id)) {
      newFilterCategories.splice(newFilterCategories.indexOf(category.id), 1);
    } else {
      newFilterCategories.push(category.id);
    }
    await this.setState({ pageCount: 1, filterCategories: newFilterCategories });
    this.fetchProducts(true);
  }

  async fetchProducts(clear = true) {
    const { filterCategories, products, pageCount } = this.state;
    const { location } = this.props;

    await this.setState({ loading: true });

    let endpoint = `https://ecommerce-engsoft.herokuapp.com/products?page_size=10&page=${pageCount}`;
    if (filterCategories.length > 0) {
      endpoint += `&categories=${JSON.stringify(filterCategories)}`;
    }
    const searchQuery = location.search.replace('?search=', '');
    if (searchQuery) {
      endpoint += `&search=${searchQuery}`;
    }
    await axios.get(endpoint)
      .then(async (response) => {
        if (clear) {
          await this.setState({
            products: [...response.data.data],
            loading: false,
            itemCount: response.data.item_count,
          });
        } else {
          await this.setState({
            products: [...products, ...response.data.data],
            loading: false,
            itemCount: response.data.item_count,
          });
        }
      })
      .catch(async (error) => {
        console.log(error);
        if (error.response.status === 404) {
          await this.setState({ products: [], loading: false });
        }
      });
  }


  render() {
    const {
      categories, products, filterCategories, loading, itemCount,
    } = this.state;

    const nextPage = () => {
      this.setState((prevState) => ({ ...prevState, pageCount: prevState.pageCount + 1 }));
      this.fetchProducts(false);
    };

    const getProducts = () => products.map((eachProduct) => (
      <Grid key={eachProduct.id} item xs={12} md={6} lg={4} xl={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ProductCardComponent
          key={eachProduct.id}
          product={eachProduct}
          variant="normal"
        />
      </Grid>
    ));

    const getCategories = () => categories.map((eachCategory) => (
      <ListItem
        selected={filterCategories.includes(eachCategory.id)}
        button
        disabled={loading}
        onClick={() => this.filterCategories(eachCategory)}
        key={eachCategory.id}
      >
        <ListItemText primary={eachCategory.name} />
      </ListItem>
    ));

    return (
      <>
        <div className="mainContent">
          <TopBar />
          <NavBar />
          <div className="container">
            <Grid container spacing={4} style={styles().rootPadding}>
              <Grid item xs={3}>
                <Paper elevation={3}>
                  <List component="nav" aria-label="secondary mailbox folders">
                    {getCategories()}
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={9}>
                {
                  products.length < 1 && (
                    <span>
                      Não encontramos nenhum produto para sua busca!
                    </span>
                  )
                }
                <Grid container spacing={3}>
                  {getProducts()}
                </Grid>
                <div style={{ textAlign: 'center', marginTop: '18px' }}>
                  {console.log(itemCount, products.length)}
                  {itemCount > products.length && (
                  <Button style={styles().button} onClick={nextPage}>
                    carregar mais
                  </Button>
                  )}

                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ListPage)));
