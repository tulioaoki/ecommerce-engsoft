import axios from 'axios';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { TITLE } from '../../utils/colors';
import { AZUL_ESCURO } from '../../utils/colors';
import { AZUL_BEBE } from '../../utils/colors';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    marginBottom: '50px',
    justifyContent: 'space-between',
  },

  text: {
    color: TITLE,
    fontWeight: '600',
    fontSize: '20px',
    marginTop: '30px',
    marginBottom: '10px',
  },

  title: {
    color: AZUL_ESCURO,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '24px',
    lineHeight: '86px',
    textTransform: 'uppercase',
  },

  input: {

    width: '260px',
  },

  btnStyle: {

    fontSize: '15px',
  },

  menuOpcaoes: {

    backgroundColor: 'white',
    
    '&:hover': {

      backgroundColor: AZUL_BEBE, // Cor que mostra ao selecionar um item do menu de Opções

    },
  },

  descricao: {

    width: '259px',
    height: '54px',
    padding: '0px 0px 0px 0px',   
    marginBottom: '8px',
    marginTop: '16px',
    
  },

  borda: {

    borderColor: '#c4c4c4',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderRadius: '3px 3px 3px 3px',    
    '&:hover': {

      borderColor: 'rgb(59, 59, 59)',
      backgroundColor: 'transparent',
    },

  },

  textoMenu: {
    color: '#f4f4f4',
    lineHeight: '0px',
  },

});
const options = [
  'Motivo do contato',
  'Criticas Positivas',
  'Produto veio com defeito',
  'Produto não chegou',
  'Erro no login',
];

class ContactComponents extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mensagem: '',
      descricao: '',
      nome: '',
      anchorEl: null,
      selectedIndex: 0,
    };
  }


  render() {
    const {
      classes,
    } = this.props;

    const handleChangeName = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, nome: value }));
    };

    const handleChangeEmail = (event) => {

      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, email: value }));
    };

    const handleChangeMensagem = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, mensagem: value }));
    };

    const sendEmail = (event) => {

      console.log('Enviando email com esse dados:')
      console.log(`Nome do usuário: ${this.state.nome}`)
      console.log(`Email: ${this.state.email}`)
      console.log(`Email: ${this.state.descricao}`)
      console.log(`Mensagem: ${this.state.mensagem}`)

    };


    const handleClickListItem = (event) => { // Abre o menu de opções quando o usuário seleciona uma das opções


      const value = event.currentTarget;

      this.setState({

        anchorEl: value,

      });

    };

    const handleMenuItemClick = (event, index) => { // Pega a opção que o usuário escolheu
      const value = event.currentTarget;

      console.log('Quem mensagem deve aparecer: ' + index)

      this.setState({

        anchorEl: null,
        selectedIndex: index,
      });

    };

    const handleClose = () => {  // Fecha o menu de opções quando o usuário seleciona uma das opções

      this.setState({

        anchorEl: null,

      });
    };


    return (
      <div className={classes.root}>
        <Grid container spacing={6} justify='space-between'>

          <Grid item xs={12} sm={6} lg={6} style={{ backgroundColor: 'pink', border: '2px solid black' }}>

            <Typography component="h2" variant="h3" className={classes.title}>
              Funcionamento
              </Typography>

            <Typography component="h2" variant="h3" className={classes.text}>
              DIAS: Segunda à sexta
              </Typography>

            <Typography component="h2" variant="h3" className={classes.text}>
              HORÁRIO: 7h - 17h
              </Typography>

            <Typography component="h2" variant="h3" className={classes.text}>
              TELEFONE: (81) 998385597
              </Typography>

            <Typography component="h2" variant="h3" className={classes.text}>
              E-MAIL: eletiva.react@gmail.com
              </Typography>

            <Typography component="h2" variant="h3" className={classes.text}>
              ENDEREÇO: Rua Senador Pompeu, 1520, Centro, Fortaleza-Ce
              </Typography>

            <Typography component="h2" variant="h3" className={classes.text}>
              CEP: 60.025-001
              </Typography>
          </Grid>


          <Grid item xs={12} sm={6} lg={6} style={{ backgroundColor: 'white', border: '2px solid black' }}>

            <Typography component="h2" variant="h3" className={classes.title}>
              Intereja Conosco
             </Typography>

            <form onSubmit={sendEmail} className={classes.input}>
              <TextField
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                name="Nome"
                label="Nome"
                type="text"
                id="Nome"
                onChange={handleChangeName}
              />
              <div className={`${classes.descricao} ${classes.borda}`}>

                <List component="nav" aria-label="Device settings"  style={{paddingTop:'3px', paddingBottom: '0px'}}>
                  <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="opicoes"
                    aria-label="Testes"
                    onClick={handleClickListItem}
                    style={{ backgroundColor: 'transparent', paddingLeft:'13px', paddingTop:'7px'}}
                  >
                    <ListItemText primary={options[this.state.selectedIndex]} style={{color:'#757575', lineHeight:'0px', width:'195px',}}/>
                  </ListItem>
                </List>

                <Menu
                  id="opicoes"
                  anchorEl={this.state.anchorEl}
                  keepMounted
                  open={Boolean(this.state.anchorEl)}
                  onClose={handleClose}
                >
                  {options.map((option, index) => (
                    <MenuItem
                      className={classes.menuOpcaoes}
                      key={option}
                      disabled={index === 0}                              // Para voltar a mensagem incial basta colocar selectedIndex = 0
                      selected={index === this.state.selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>

              </div>



              <TextField
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                id="email"
                label="E-mail"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                onChange={handleChangeEmail}
              />

              <TextField
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                multiline
                rows={4}
                rowsMax={6}
                name="Mensagem"
                label="Mensagem"
                type="text"
                id="Mensagem"
                onChange={handleChangeMensagem}
              />

              <Button className={classes.btnStyle}
                type="submit"
                variant="contained"
                color="primary"

              >
                Entrar
              </Button>

            </form>

          </Grid>

        </Grid>
      </div>
    );
  }
}

ContactComponents.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};


export default withRouter(connect()(withStyles(styles)(ContactComponents)));
