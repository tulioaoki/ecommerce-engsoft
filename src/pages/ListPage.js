import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TopBar from '../components/HomePageComponents/TopBar';
import NavBar from '../components/HomePageComponents/NavBar';
import Footer from '../components/HomePageComponents/Footer';
import ProductCardComponent from '../components/HomePageComponents/ProductCard';
import axios from "axios";

const styles = () => ({
  rootPadding: {
    margin: '16px 0 15px 0',
  },
});

class ListPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
    };
  }

  async componentDidMount() {
    await axios.get('https://ecommerce-engsoft.herokuapp.com/categories')
      .then((response) => {
        this.setState((prevState) => ({ ...prevState, categories: response.data.data }));
      })
      .catch((error) => {
        console.log('error fetching product');
        console.error(error);
      });
  }

  render() {
    const { categories, products } = this.state;

    const getProducts = () => products.map((eachProduct) => (
      <Grid item xs={12} md={6} lg={4} xl={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ProductCardComponent
          key={eachProduct.id}
          product={eachProduct}
          variant="normal"
        />
      </Grid>
    ));

    const getCategories = () => categories.map((eachCategory) => (
      <ListItem button onclick={this.setState((prevState) => ({ ...prevState, filteredCategory: eachCategory.name }))}>
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
                <Grid container spacing={3}>
                  {getProducts()}
                </Grid>
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
