import { Typography, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import FaceIcon from '@material-ui/icons/Face';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TITLE } from '../../utils/colors';
import { Typography } from '@material-ui/core';





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

class CategoriesComponents extends PureComponent {

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


        return (
            <div className={classes.root}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Categorias
                </Typography>


                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined" className={classes.root} style={{height: '400px', border: '2px solid #fb8c00', borderRadius: '10px'}}>
                            <CardActionArea onClick={()=>{history.push('/')}} style={{height: '100%'}}>
                                
                                <CardContent style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <LocalHospitalIcon style={{fontSize: '100px', color:'#fb8c00'}}/>
                                    <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                        Medicamentos e Saúde
                                    </Typography>
                                
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined" className={classes.root} style={{height: '400px', border: '2px solid #ec407a', borderRadius: '10px'}}>
                            <CardActionArea onClick={()=>{history.push('/')}} style={{height: '100%'}}>
                                
                                <CardContent style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <FaceIcon style={{fontSize: '100px', color:'#ec407a'}}/>
                                    <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                        Cuidados pessoais e Beleza
                                    </Typography>
                                
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined" className={classes.root} style={{height: '400px', border: '2px solid #cddc39', borderRadius: '10px'}}>
                            <CardActionArea onClick={()=>{history.push('/')}} style={{height: '100%'}}>
                                
                                <CardContent style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <InvertColorsIcon style={{fontSize: '100px', color:'#cddc39'}}/>
                                    <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                        Dermocosméticos
                                    </Typography>
                                
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined" className={classes.root} style={{height: '400px', border: '2px solid #512da8', borderRadius: '10px'}}>
                            <CardActionArea onClick={()=>{history.push('/')}} style={{height: '100%'}}>
                                
                                <CardContent style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <ChildFriendlyIcon style={{fontSize: '100px', color:'#512da8'}}/>
                                    <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                        Mamães e Bebês
                                    </Typography>
                                
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined" className={classes.root} style={{height: '400px', border: '2px solid #4caf50', borderRadius: '10px'}}>
                            <CardActionArea onClick={()=>{history.push('/')}} style={{height: '100%'}}>
                                
                                <CardContent style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <LocalMallIcon style={{fontSize: '100px', color: '#4caf50'}}/>
                                    <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                        Conveniência
                                    </Typography>
                                
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined" className={classes.root} style={{height: '400px', border: '2px solid #03a9f4', borderRadius: '10px'}}>
                            <CardActionArea onClick={()=>{history.push('/')}} style={{height: '100%'}}>
                                
                                <CardContent style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <FitnessCenterIcon style={{fontSize: '100px', color: '#03a9f4'}}/>
                                    <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="h2">
                                        Fitness e Nutrição
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

CategoriesComponents.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(CategoriesComponents)));
