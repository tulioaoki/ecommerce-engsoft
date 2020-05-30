import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    withStyles, Typography
} from '@material-ui/core';

import Slider from '../../Slide';

import { AZUL_ESCURO } from '../../../utils/colors';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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

    root: {

        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '0 0 10px 0',
    },

    categoria: {
        color: 'black',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: '24px',
        backgroundColor: '#eeeeee',
        transition: 'opacity 0.4s',
        padding: '6px 0px 8px 0px',
        '&$selected': {
            color: 'white',
            padding: '6px 6px 8px 6px',
            backgroundColor: AZUL_ESCURO,
        },
        
    },

    selected: {

    },
    
});

const categoria1 = [

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
]

const categoria2 = [

    {
        id: 7,
        name: 'Mascara',
        price: 35,
        images: [
            {
                id: 3,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3zYKBMsA4mKyfP9ZTbAswi-2TxP9efoNfj60yrOGQTK4Rgs1-&usqp=CAU',
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
        id: 8,
        name: 'Batom',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7QGZBHSNobGGSfBRnCiC890kKje4wKG3a4qdTSuFPTkercYPQ&usqp=CAU',
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
        id: 9,
        images: [
            {
                id: 1,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9XrXFkrs2xubp7mWMlhJsYUf2uEXrDINoV800xMv7_qt-ztrX&usqp=CAU',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Pó Compacto',
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

    {
        id: 10,
        name: 'Shampoo a Seco',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1K2O-PIJLn30SYcgdutSKB3cqH6SnPo75KEeMrwnOlhizRaJj&usqp=CAU',
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
        id: 11,
        images: [
            {
                id: 1,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqpZNYCxeeuMwDhCQAl571yKcGsycOxUC2svrcuMbpV_rqrPc4&usqp=CAU',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'álcool gel 70',
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

const categoria3 = [

    {
        id: 7,
        name: 'Hidratante Facial',
        price: 35,
        images: [
            {
                id: 4,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/260899-1200-auto?width=1200&height=auto&aspect=true',
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
        id: 1,
        name: 'Bepantol Derma Creme',
        price: 35,
        images: [
            {
                id: 3,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/262153-1200-auto?width=1200&height=auto&aspect=true',
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
        id: 77,
        name: 'Cr Facial Nivea Noturno',
        price: 35,
        images: [
            {
                id: 4,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/238854-1200-auto?width=1200&height=auto&aspect=true',
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
        id: 16,
        name: 'Ivy C Serum Uv Fps30',
        price: 35,
        images: [
            {
                id: 3,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/216467-1200-auto?width=1200&height=auto&aspect=true',
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
        id: 17,
        name: 'Cicaplast Baume B5 La Roche',
        price: 35,
        images: [
            {
                id: 3,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/206045-1200-auto?width=1200&height=auto&aspect=true',
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
        id: 177,
        name: 'Hidratante Nivea Milk Pele',
        price: 35,
        images: [
            {
                id: 3,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/257032-1200-auto?width=1200&height=auto&aspect=true',
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
]

const categoria4 = [

    {
        id: 5,
        images: [
            {
                id: 1,
                image_url: 'https://images-americanas.b2w.io/produtos/01/00/sku/36833/5/36833575_1GG.jpg',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Fraudas',
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

    {
        id: 6,
        name: 'Mamadeira',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://arquivos.meuamorzinho.com.br/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/8/0/8047-mamadeira-fiona-orto-silicone-tam2-300ml-agr.jpg',
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
        images: [
            {
                id: 1,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuPwRrLszLpQymScis5W4WulGJqLuRL5EbUou66t1VN5qRoZF0&usqp=CAU',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Talco de bebe',
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

    {
        id: 8,
        name: 'Berço',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy1SGQP9YXRPlQBl5-NHt427VCn_8u0MeZ3dt_GPBrRJZFr5vI&usqp=CAU',
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
        id: 9,
        images: [
            {
                id: 1,
                image_url: 'https://cdn.awsli.com.br/600x450/1037/1037109/produto/45003887/c467de326a.jpg',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Roupa',
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

const categoria5 = [

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

    {
        id: 6,
        name: 'Jumento de pelucia',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/200713-1200-auto?width=1200&height=auto&aspect=true',
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
        images: [
            {
                id: 1,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/262569-1200-auto?width=1200&height=auto&aspect=true',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Spray Dauf Home',
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

    {
        id: 8,
        name: 'Pilha Palito Aaa',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/256737-1200-auto?width=1200&height=auto&aspect=true',
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
        id: 9,
        images: [
            {
                id: 1,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/216743-500-auto?width=500&height=auto&aspect=true',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Lenço Dauf ',
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

    {
        id: 10,
        name: 'Chocolate M&Ms',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/218705-1200-auto?width=1200&height=auto&aspect=true',
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
        id: 15,
        name: 'Leite Em Pó Ninho',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/235082-1200-auto?width=1200&height=auto&aspect=true',
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
    }
]

const categoria6 = [

    {
        id: 88,
        images: [
            {
                id: 1,
                image_url: 'https://static3.tcdn.com.br/img/img_prod/468236/calca_legging_capri_lupo_roupa_fitness_para_academia_e_ginastica_1562_1_20190827110359.jpg',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Calça Leg',
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

    {
        id: 98,
        name: 'Shakeira',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://http2.mlstatic.com/D_NQ_NP_682030-MLB31136411793_062019-O.jpg',
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
        id: 78,
        images: [
            {
                id: 1,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJrctpiLvvwrL1IqU1559ulvqxbcUnx7_TWyCKxNxeo0ShPHaw&usqp=CAU',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Halteres',
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

    {
        id: 68,
        name: 'Tapete de Yoga',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://static.dafiti.com.br/p/Yangfit-Colchonete-Tapete-Yoga-Mat-Pilates-Gin%C3%A1stica-10mm-Yangfit-Com-Bolsa-6057-7154694-1-zoom.jpg',
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
        id: 58,
        images: [
            {
                id: 1,
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgPkSxE_uaBJZHwqHRkJOZlo-_5MNgsV3YEizipndT0lmAoGR8YV0Pqxn0dIXBjOIivOgrYVY&usqp=CAc',
                created_at: "2020-04-05T16:26:05.962531-03:00",
                updated_at: "2020-04-05T16:26:05.962648-03:00"
            },
        ],
        name: 'Nutren',
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

    {
        id: 48,
        name: 'Pro Whey',
        price: 35,
        images: [
            {
                id: 2,
                image_url: 'https://paguemenos.vtexassets.com/arquivos/ids/203844-1200-auto?width=1200&height=auto&aspect=true',
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
]

export class Novidade extends PureComponent {


    state = {

        value: 0,
    };

    categories = ((event, newValue) => {

        console.log("Categoria que vou: " + newValue)

        this.setState({             // Mudar a imagem 

            value: newValue
        });
    })

    slide = (categoria) => {

        console.log("PEGANDO O SLIDE")
        console.log("Que Slide deve Aparecer: " + categoria)

        switch (categoria) {
            case 0:
                return <Slider productAmount={4} images={categoria1} />

            case 1:
                return <Slider productAmount={4} images={categoria2} />

            case 2:
                return <Slider productAmount={4} images={categoria3} />

            case 3:
                return <Slider productAmount={4} images={categoria4} />

            case 4:
                return <Slider productAmount={4} images={categoria5} />

            case 5:
                return <Slider productAmount={4} images={categoria6} />
        }
    }

    render() {

        const {
            classes,
        } = this.props;

        return (

            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>

                <div>

                    <Typography className={classes.text}>
                        Novidades
                    </Typography>

                </div>

                <div className={`${classes.root} `}>
                    <BottomNavigation
                        value={this.state.value}
                        onChange={this.categories}
                        showLabels
                        className={classes.root}
                    >

                        <BottomNavigationAction label="Saúde"

                            classes={{
                                root: classes.categoria,
                                selected: classes.selected,
                            }}
                            style={{ borderRadius: '15px 0px 0px 15px' }}
                        />
                        <BottomNavigationAction label="Cuidados Pessoais"

                            classes={{
                                root: classes.categoria,
                                selected: classes.selected,
                            }}
                        />
                        <BottomNavigationAction label="Dermocosméticos"
                            classes={{
                                root: classes.categoria,
                                selected: classes.selected,
                            }}
                        />
                        <BottomNavigationAction label="Mamães e Bebês"
                            classes={{
                                root: classes.categoria,
                                selected: classes.selected,
                            }}
                        />
                        <BottomNavigationAction label="Conveniência"
                            classes={{
                                root: classes.categoria,
                                selected: classes.selected,
                            }}
                        />
                        <BottomNavigationAction label="Fitness e Nutrição"

                            classes={{
                                root: classes.categoria,
                                selected: classes.selected,
                            }}

                            style={{ borderRadius: '0px 15px 15px 0px' }}

                        />

                    </BottomNavigation>
                </div>

                {this.slide(this.state.value)}

            </div>
        );
    }
}

Novidade.propTypes = {

};

Novidade.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Novidade)));

