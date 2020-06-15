import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    withStyles, Typography, Grid,
} from '@material-ui/core';

import { AZUL_ESCURO, TITLE } from '../../../utils/colors';

import ProductCard from '../ProductCard';

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

});


export class Promocao extends PureComponent {

    state = {

        produtos: [

            {
                id: 1,
                images: [
                    {
                        id: 1,
                        image_url: 'https://cdn.awsli.com.br/600x450/492/492729/produto/32850267/26cba2d95e.jpg',
                        created_at: "2020-04-05T16:26:05.962531-03:00",
                        updated_at: "2020-04-05T16:26:05.962648-03:00"
                    },
                ],
                name: 'DorFlex',
                price: 33,
                categories: [
                    {
                        id: 1,
                        name: "XAROPE",
                        created_at: "2020-04-03T01:01:54.306016-03:00",
                        updated_at: "2020-04-03T01:01:54.306048-03:00"
                    },
                    {
                        id: 2,
                        name: "PASTILHA",
                        created_at: "2020-04-03T01:02:11.701019-03:00",
                        updated_at: "2020-04-03T01:02:11.701046-03:00"
                    }
                ],
            },

            {
                id: 2,
                name: 'Tylenol',
                price: 25,
                images: [
                    {
                        id: 2,
                        image_url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/65fc6fd4367f4c1dd36b525bec13176a4402349e.jpg?1583942107',
                        created_at: "2020-04-05T16:26:05.962531-03:00",
                        updated_at: "2020-04-05T16:26:05.962648-03:00"
                    }
                ],

                categories: [
                    {
                        id: 1,
                        name: "XAROPE",
                        created_at: "2020-04-03T01:01:54.306016-03:00",
                        updated_at: "2020-04-03T01:01:54.306048-03:00"
                    },
                    {
                        id: 2,
                        name: "PASTILHA",
                        created_at: "2020-04-03T01:02:11.701019-03:00",
                        updated_at: "2020-04-03T01:02:11.701046-03:00"
                    }
                ],
            },

            {
                id: 3,
                name: 'Dipirona',
                price: 60,
                images: [
                    {
                        id: 3,
                        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
                        created_at: "2020-04-05T16:26:05.962531-03:00",
                        updated_at: "2020-04-05T16:26:05.962648-03:00"
                    }
                ],
                categories: [
                    {
                        id: 1,
                        name: "XAROPE",
                        created_at: "2020-04-03T01:01:54.306016-03:00",
                        updated_at: "2020-04-03T01:01:54.306048-03:00"
                    },
                    {
                        id: 2,
                        name: "PASTILHA",
                        created_at: "2020-04-03T01:02:11.701019-03:00",
                        updated_at: "2020-04-03T01:02:11.701046-03:00"
                    }
                ],
            },

            {
                id: 4,
                name: 'Novalgina',
                price: 35,
                images: [
                    {
                        id: 4,
                        image_url: 'https://img.drogasil.com.br/catalog/product/n/o/novalgina-1g-com-10-comprimidos-7891058001155-_3_.jpg?width=520&height=520&quality=50&type=resize',
                        created_at: "2020-04-05T16:26:05.962531-03:00",
                        updated_at: "2020-04-05T16:26:05.962648-03:00"
                    }
                ],
                categories: [
                    {
                        id: 1,
                        name: "XAROPE",
                        created_at: "2020-04-03T01:01:54.306016-03:00",
                        updated_at: "2020-04-03T01:01:54.306048-03:00"
                    },
                    {
                        id: 2,
                        name: "PASTILHA",
                        created_at: "2020-04-03T01:02:11.701019-03:00",
                        updated_at: "2020-04-03T01:02:11.701046-03:00"
                    }
                ],
            },

            {
                id: 5,
                name: 'Advil',
                price: 29.90,
                images: [
                    {
                        id: 3,
                        image_url: 'https://www.drogarianovaesperanca.com.br/imagens-complete/1000x1000/advil-400mg-com-20-capsulas-2da016144f.jpg',
                        created_at: "2020-04-05T16:26:05.962531-03:00",
                        updated_at: "2020-04-05T16:26:05.962648-03:00"
                    }
                ],
                categories: [
                    {
                        id: 1,
                        name: "XAROPE",
                        created_at: "2020-04-03T01:01:54.306016-03:00",
                        updated_at: "2020-04-03T01:01:54.306048-03:00"
                    },
                    {
                        id: 2,
                        name: "PASTILHA",
                        created_at: "2020-04-03T01:02:11.701019-03:00",
                        updated_at: "2020-04-03T01:02:11.701046-03:00"
                    }
                ],
            },

            {
                id: 6,
                name: 'Benegrip',
                price: 14.75,
                images: [
                    {
                        id: 3,
                        image_url: 'https://img.drogaraia.com.br/catalog/product/b/e/benegrip_20comps.jpg?width=520&height=520&quality=50&type=resize',
                        created_at: "2020-04-05T16:26:05.962531-03:00",
                        updated_at: "2020-04-05T16:26:05.962648-03:00"
                    }
                ],
                categories: [
                    {
                        id: 1,
                        name: "XAROPE",
                        created_at: "2020-04-03T01:01:54.306016-03:00",
                        updated_at: "2020-04-03T01:01:54.306048-03:00"
                    },
                    {
                        id: 2,
                        name: "PASTILHA",
                        created_at: "2020-04-03T01:02:11.701019-03:00",
                        updated_at: "2020-04-03T01:02:11.701046-03:00"
                    }
                ],
            },

            {
                id: 7,
                name: 'Mascara',
                price: 35,
                images: [
                    {
                        id: 3,
                        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhuRFnvcxWtzwSVfky4jraS5D9Fb9EYIXd3yG0xdKofAHFVymt&usqp=CAU.array.isRequired',
                        created_at: "2020-04-05T16:26:05.962531-03:00",
                        updated_at: "2020-04-05T16:26:05.962648-03:00"
                    }
                ],
                categories: [
                    {
                        id: 1,
                        name: "XAROPE",
                        created_at: "2020-04-03T01:01:54.306016-03:00",
                        updated_at: "2020-04-03T01:01:54.306048-03:00"
                    },
                    {
                        id: 2,
                        name: "PASTILHA",
                        created_at: "2020-04-03T01:02:11.701019-03:00",
                        updated_at: "2020-04-03T01:02:11.701046-03:00"
                    }
                ],
            },

            {
                id: 5,
                images: [
                    {
                        id: 1,
                        image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/207387-1200-auto?width=1200&height=auto&aspect=true',
                        created_at: "2020-04-05T16:26:05.962531-03:00",
                        updated_at: "2020-04-05T16:26:05.962648-03:00"
                    },
                ],
                name: 'Uno',
                price: 35,
                categories: [
                    {
                        id: 1,
                        name: "XAROPE",
                        created_at: "2020-04-03T01:01:54.306016-03:00",
                        updated_at: "2020-04-03T01:01:54.306048-03:00"
                    },
                    {
                        id: 2,
                        name: "PASTILHA",
                        created_at: "2020-04-03T01:02:11.701019-03:00",
                        updated_at: "2020-04-03T01:02:11.701046-03:00"
                    }
                ],
            },
        ]
    };

    render() {

        const {
            classes,
        } = this.props;



        return (

            <div style={{ marginBottom: '50px', marginTop: '50px' }}>



                <Grid container spacing={5} >

                    <Grid item xs={12} sm={12} >

                        <div>
                            <Typography className={classes.text}>
                                Ofertas
                            </Typography>
                        </div>
                    </Grid>


                    <Grid container spacing={5}  style={{ marginLeft: '40px', marginRight: '40px' }} >

                    
                        { 
                            this.state.produtos.map((produto, index) => {

                                return <Grid key={index} item xs={12} sm={3} >

                                    <ProductCard
                                        
                                        product={produto}
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

Promocao.propTypes = {

};

Promocao.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Promocao)));
