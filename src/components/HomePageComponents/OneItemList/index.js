import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, withStyles, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { AZUL_ESCURO, PRIMARY_COLOR, SECONDARY_COLOR } from '../../../utils/colors';
import EditIcon from '@material-ui/icons/Edit';
import { handleAddCategories, handleEditCategories, handleDeleteCategories } from '../../../actions/admin';

const styles = () => ({
  root: {
    backgroundColor: 'white',
    margin:10,
    width:'80%'
  },
  OneItemList: {
    backgroundColor: '#1F509C',
    fontSize: '.85rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '10px 0 10px 0',
    color: 'white',
  },
  text: {

    color: AZUL_ESCURO,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '24px',
    lineHeight: '86px',
    textTransform: 'uppercase',

},
dialogPaper: {
    minHeight: '40vh',
    maxHeight: '40vh',
    minWidth: '40vw',
    maxWidth: '40vw',
  },
});

export class OneItemList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          open:false,
          edit:false,
          categorie:null,
        };
      }
  render() {
    const {
      classes,
      categories,
    } = this.props;

    const handleClickOpen = (item) => {
        if(typeof item !== 'undefined'){
            this.setState({open:true, edit:true, name:item.name, categorie:item})
        }else{
            this.setState({open:true, edit:false})
        }
    }
    const handleOpenDelete = (item) => {
      this.setState({open:true, delete:true, name:item.name, categorie:item})
    }

    const handleClose = () => {
        this.setState({ open:false, name:'', edit:false, delete:false })    
    }

    const handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const {name, categorie, edit} = this.state;
        let body = {
            name,
        }
        if(edit){
            dispatch(handleEditCategories({name, id:categorie.id}))
        }else{
            dispatch(handleAddCategories(body))
        }
        handleClose();
    }

    const handleSubmitDelete = (e) => {
      e.preventDefault();
      const { dispatch } = this.props;
      const {name, categorie} = this.state;
      dispatch(handleDeleteCategories({name, id:categorie.id}))
      handleClose();
  }


    return (
        <div style={{ marginBottom: '50px', marginTop: '50px', backgroundColor:'#f1f1f1', padding:'3rem', flexDirection:'column', marginLeft:'5rem', marginRight:'5rem'}}>
            <Typography className={classes.text}>
                {'Categorias Cadastradas'}
                <IconButton onClick={()=>handleClickOpen()} style={{'border-radius':'100%'}}><AddCircleIcon style={{color:AZUL_ESCURO}} fontSize="large"/></IconButton>
            </Typography>
             <List dense={true} style={{backgroundColor:'#fff'}}>
              {categories.map((item) =>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                  />
                  <ListItemSecondaryAction>
                  <IconButton onClick={() => handleClickOpen(item)} edge="end" aria-label="delete">
                      <EditIcon style={{color:PRIMARY_COLOR}}/>
                    </IconButton>
                    <IconButton onClick={() => handleOpenDelete(item)} edge="end" aria-label="delete">
                      <DeleteIcon style={{color:SECONDARY_COLOR}}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
            <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.dialogPaper }} >
                {
                !this.state.delete ? 
                  (<>
                  <DialogTitle id="form-dialog-title">Inserir Categoria</DialogTitle>
                  <DialogContent >
                      <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      name="name"
                      label="Nome"
                      type="text"
                      fullWidth
                      placeholder='Nome da Categoria'
                      className='formField'
                      onChange={handleChange}
                      value={this.state.name}
                      />
                  </DialogContent>
                  
                  <DialogActions>
                      <Button onClick={handleClose} color="secondary">
                      Cancelar
                      </Button>
                      <Button onClick={handleSubmit}  
                      type='submit' 
                      color="primary"
                      >
                      Concluir
                      </Button>
                  </DialogActions>
                  </>)
                  :
                  (<><DialogTitle id="form-dialog-title">Inserir Categoria</DialogTitle>
                  <DialogContent >
                      Isto irá apagar a categoria {this.state.name}. Continuar?
                  </DialogContent>
                  
                  <DialogActions>
                      <Button onClick={handleClose} color="secondary">
                      Cancelar
                      </Button>
                      <Button onClick={handleSubmitDelete}  
                      type='submit' 
                      color="primary"
                      >
                      Concluir
                      </Button>
                  </DialogActions></>)
              }
            </Dialog>
      
        </div>
       
    );
  }
}

OneItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};

OneItemList.defaultProps = {
    categories:[],
};


const mapStateToProps = ({  REDUCER_CATEGORIES }, props) => ({
    categories:REDUCER_CATEGORIES.categories,
})
const OneItemListComponentsWithSnack = withSnackbar(OneItemList);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(OneItemListComponentsWithSnack)));

