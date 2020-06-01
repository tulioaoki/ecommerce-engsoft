import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
} from '@material-ui/core';
import { TITLE } from '../../utils/colors';
import { Typography } from '@material-ui/core';
import bg_about from '../../static/images/quem-somos.png';
import time_line_one from '../../static/images/1981.png';
import time_line_two from '../../static/images/2000.png';
import time_line_three from '../../static/images/2002.png';
import time_line_four from '../../static/images/2020.png';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = () => ({
    root: {
        flexGrow: 1,
        marginTop: '50px',
        marginBottom: '50px',
    },
    title: {
        color: TITLE,
        fontWeight: '600',
        fontSize: '20px',
        marginTop: '30px',
        marginBottom: '10px',
    },
    description: {
        color: '#424242',
        textAlign: 'justify',
    },
});

class AboutComponents extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const {
            history,
            classes,
        } = this.props;
        const image = bg_about;
        const img1 = time_line_one;
        const img2 = time_line_two;
        const img3 = time_line_three;
        const img4 = time_line_four;

        return (
            <div className={classes.root}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Sobre
                </Typography>

                <img src={image} alt="quem somos?" style={{ width: '100%', marginTop: '20px', opacity: '0.6' }} />

                <Typography component="h3" variant="h6" className={classes.title}>
                    Espaço / Conceito
                </Typography>

                <Typography className={classes.description}>
                    <p>
                        Nascida no coração de Pernambuco, a Farmácia começou a sua história.
                        Em 28 de março de 1935, foi dado o primeiro passo para a criação da empresa com a fusão de
                        dois pequenos grupos de farmácias familiares do Estado de Pernambuco: a Drogaria Pernambuco e a
                        Drogaria Brasil. Dois anos depois, em 1937, adotou o conceito de rede ao se juntar a outras
                        drogarias.
                    </p>
                    <p style={{ marginTop: '10px' }}>
                        Sempre focada no bom atendimento, criando uma relação de confiança com o cliente, pouco a pouco
                        a rede ampliou sua presença no interior pernambucano, chegando também a outros Estados. Em 1952, a
                        Farmácia abriu seu próprio laboratório, produzindo medicamentos, cremes e outros produtos exclusivos.
                        De olho no futuro e crescendo cada vez mais, a empresa iniciou maior investimento em tecnologia e,
                        em 1967, foi pioneira ao criar seu departamento de TI, para auxiliar nos processos e acompanhar as
                        novidades que foram surgindo.
                    </p>
                </Typography>

                <Typography component="h3" variant="h6" className={classes.title}>
                    História
                </Typography>

                <Grid container spacing={0}>
                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia style={{height: '110px'}}
                                className={classes.media}
                                image={img1}
                                title="Linha do tempo"
                                />
                                <CardContent>
                                <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                    Onde tudo isso começou 
                                </Typography>
                                <Typography style={{textAlign: 'justify'}} variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia style={{height: '110px'}}
                                className={classes.media}
                                image={img2}
                                title="Linha do tempo"
                                />
                                <CardContent>
                                <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                    Marco histórico: mais de 1000 lojas
                                </Typography>
                                <Typography style={{textAlign: 'justify'}} variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia style={{height: '110px'}}
                                className={classes.media}
                                image={img3}
                                title="Linha do tempo"
                                />
                                <CardContent>
                                <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                    Primeira loja fora do estado
                                </Typography>
                                <Typography style={{textAlign: 'justify'}} variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia style={{height: '110px'}}
                                className={classes.media}
                                image={img4}
                                title="Linha do tempo"
                                />
                                <CardContent>
                                <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                    Lançamento do nosso sistema de delivery
                                </Typography>
                                <Typography style={{textAlign: 'justify'}} variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

AboutComponents.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(AboutComponents)));
