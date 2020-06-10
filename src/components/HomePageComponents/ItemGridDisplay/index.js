import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    withStyles, Typography, Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { AZUL_ESCURO } from '../../../utils/colors';

import { handleAdminProducts } from '../../../actions/admin';
import AdminProductCard from '../../AdminProductCard';

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


export class ItemGridDisplay extends PureComponent {

    componentDidMount(){
        const {
            dispatch,
        } = this.props;

        dispatch(handleAdminProducts())
    }

    render() {
        const {
            classes,
            displayName,
            items
        } = this.props;
        return (
            <div className='container' style={{ marginBottom: '50px', marginTop: '50px', backgroundColor:'#f1f1f1', padding:'2rem'}}>
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={12} >
                        <div>
                            <Typography className={classes.text}>
                                {displayName}
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
            </div>
        );
    }
}

const mapStateToProps = ({ REDUCER_ADMIN_PRODUCTS }, props) => ({
    items:REDUCER_ADMIN_PRODUCTS.admin_products,
})

ItemGridDisplay.propTypes = {
    displayName: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

ItemGridDisplay.defaultProps = {
    displayName: 'Produtos Cadastrados',
    items:[],
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ItemGridDisplay)));
