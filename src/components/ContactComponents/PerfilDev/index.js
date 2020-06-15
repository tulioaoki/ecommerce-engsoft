import { Link, withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AZUL_ESCURO } from '../../../utils/colors';

const styles = () => ({

    
    title: {
        color: AZUL_ESCURO,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '10px',        
        textTransform: 'uppercase',

    },

    imagem:{

        width: '75px',
        height: '75px',

    },

    distanciaText:{

        paddingTop:'10px',
        paddingBottom: '10px',
        display: 'flex',
        flexDirection:'column',
    },

    informacao: {
        color: AZUL_ESCURO,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '10px',
        paddingTop: '5px',
    },

});

class PerfilDev extends PureComponent {

    
    static defaultProps = {
        cor: '#c4c4c470'
    }


    render() {
        const {
            developer,
            classes,
            cor,
        } = this.props;


        return (
            <Card  variant="outlined" style = {{backgroundColor: `${this.props.cor}`, maxHeight:'337px'}}>
                <CardHeader
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:'16px',}}
                    avatar= {
                        <Avatar alt="Dev 1" 
                            src= {developer.image}
                            style={{display: 'flex'}}
                            className={classes.imagem}                                  
                        /> }
                />
   
                <CardContent style={{paddingRight: '2px', paddingLeft: '5px'}}>

                    <div>
                        <div className={classes.distanciaText}>
                            <Typography component="h1" variant="h1" className={classes.title}>
                              Nome:
                            </Typography>
                            <Typography component="h3" variant="h3" className={classes.informacao}>
                                {developer.name}
                            </Typography>
                        </div>
                        
                        <div className={classes.distanciaText}>
                            
                            <Typography component="h1" variant="h1" className={classes.title}>
                                Github:
                            </Typography>
                            
                            <Link
                            
                                href= {developer.gitHub}
                                target="_blank"
                                rel="noopener"
                            >
                                <Typography component="h3" variant="h3" className={classes.informacao}>
                                    {developer.gitHub}
                                </Typography>
                            </Link>
                        </div>
                        <div className={classes.distanciaText}>
                            <Typography component="h1" variant="h1" className={classes.title}>
                               Facebook: 
                            </Typography>
                            <Link
                            
                                href= {developer.facebook}
                                target="_blank"
                                rel="noopener"
                            >
                                <Typography component="h3" variant="h3" className={classes.informacao}>
                                    {developer.facebook}
                                </Typography>
                            </Link>                            
                        </div>
                        <div className={classes.distanciaText}>
                            <Typography component="h1" variant="h1" className={classes.title}>
                                What's App:
                            </Typography>
                            <Typography component="h3" variant="h3" className={classes.informacao}>
                                {developer.whatsapp}
                            </Typography>
                        </div>

                    </div>

                </CardContent>

            </Card>
        );
    }
}

PerfilDev.propTypes = {
  developer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gitHub: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
  }).isRequired, 
  cor: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(PerfilDev)));
