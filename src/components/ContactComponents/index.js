import { Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AZUL_BEBE, AZUL_CLARO } from '../../utils/colors';
import PerfilDev from './PerfilDev';

const styles = () => ({

  root: {
    flexGrow: 1,
    marginTop: '50px',
    marginBottom: '50px',
    justifyContent: 'space-between',
  },

  text: {
    color: '#424242',
    //fontWeight: '600',
    fontSize: '18px',
    marginTop: '30px',
    marginBottom: '10px',
  },

  title: {
    color: AZUL_CLARO,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '24px',
    lineHeight: '86px',
    //textTransform: 'uppercase',

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
    backgroundColor: 'transparent',
    '&:hover': {

      borderColor: 'rgb(59, 59, 59)',
    },

  },


});
const options = [
  'Motivo do contato*',
  'Criticas Positivas',
  'Produto veio com defeito',
  'Produto não chegou',
  'Erro no login',
  'Outros',
];

const devs = [

  {
    name: 'Lucas Nardi',
    image: 'https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-1/s200x200/13645207_958079694324458_35205302251165214_n.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeFa5gsPO-POlGIyuBRhka8N2gFjihmso4naAWOKGayjid1jqKI3nuAVRtRWyx0KqNYoCbIsF2KWkLUUibF8KHJX&_nc_ohc=GtmhuXIgcR4AX_qUPCQ&_nc_ht=scontent.frec5-1.fna&_nc_tp=7&oh=2bd236d546181f7a4055353661b6c9c3&oe=5EFE1CD1',
    gitHub: 'https://github.com/Lucas-Nardi',
    facebook: 'https://www.facebook.com/lucas.baroni.56',
    whatsapp: '(81)998382336',

  },

  {
    name: 'Túlio Aoki',
    image: 'https://avatars3.githubusercontent.com/u/31329810?s=460&v=4',
    gitHub: 'https://github.com/tulioaoki',
    facebook: 'https://www.facebook.com/tulioaoki',
    whatsapp: '(81)994892726',

  },

  {
    name: 'Jose Arthur',
    image: 'https://avatars3.githubusercontent.com/u/3154604?s=460&u=b0ae334c3464c06cf83303e4ab1f231dab11845c&v=4',
    gitHub: 'https://github.com/zearthur99',
    facebook: 'https://www.facebook.com/zearthur99',
    whatsapp: '(81)996099275',

  },

  {
    name: 'Deborah Camila',
    image: 'https://avatars2.githubusercontent.com/u/38708826?s=460&u=28e6b36c87afba6564196f5bbd1c3f67fa73cb89&v=4',
    gitHub: 'https://github.com/debcamila',
    facebook: 'https://www.facebook.com/camiladeborah',
    whatsapp: '(81)99580534',

  }, 

  {
    name: 'Arthur Aragão',
    image: 'https://instagram.frec5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/42003595_490475731459272_15717767827161088_n.jpg?_nc_ht=instagram.frec5-1.fna.fbcdn.net&_nc_ohc=iqipsvT9o4oAX984SX1&oh=9eeac5e4c41d5aa5143cb35f60daf2d7&oe=5F027972',
    gitHub: 'https://github.com/arthur12320',
    facebook: 'https://www.facebook.com/arthurraragao',
    whatsapp: '(81)99373711',

  },
]

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

      event.preventDefault();

      console.log('Enviando email com esse dados:')
      console.log(`Nome do usuário: ${this.state.nome}`)
      console.log(`Email: ${this.state.email}`)
      console.log(`Email: ${this.state.descricao}`)
      console.log(`Mensagem: ${this.state.mensagem}`)




      this.props.enqueueSnackbar('Email enviado!',
        { variant: 'success', autoHideDuration: 2000, }
      )


      this.setState({  // Limpar o formulário

        email: '',
        mensagem: '',
        nome: '',
        anchorEl: null,
        selectedIndex: 0,
      });

    };

    const handleClickListItem = (event) => { // Abre o menu de opções quando o usuário seleciona uma das opções


      const value = event.currentTarget;

      this.setState({

        anchorEl: value,

      });

    };

    const handleMenuItemClick = (event, index) => { // Pega a opção que o usuário escolheu
      //const value = event.currentTarget;
      //console.log('Quem mensagem deve aparecer: ' + index)
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
        <Grid container spacing={10} justify="center">

          <Grid item xs={12} sm={6} lg={6} >

            <Typography component="h4" variant="h6" className={classes.title}>
              Funcionamento
            </Typography>

            <Typography component="h4" variant="h6" className={classes.text}>
              <strong>Dias e horários:</strong> segunda à sexta-feira - das 7h às 17h
            </Typography>

            <Typography component="h4" variant="h6" className={classes.text}>
            <strong>Telefones:</strong> +55 (81) 9999-9999 | 9 9999-9999
            </Typography>

            <Typography component="h4" variant="h6" className={classes.text}>
            <strong>E-mail:</strong> eletiva.react@gmail.com
            </Typography>

            <Typography component="h4" variant="h6" className={classes.text}>
            <strong>Endereço:</strong> Rua Senador Pompeu, 1520, Centro, Recife - PE
            </Typography>

            <Typography component="h4" variant="h6" className={classes.text}>
            <strong>CEP:</strong> 00000-000
            </Typography>
          </Grid>


          <Grid item xs={12} sm={6} lg={6} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

            <Typography component="h2" variant="h3" className={classes.title} style={{ paddingRight: '30px' }}>
              Interaja Conosco
             </Typography>

            <form onSubmit={sendEmail} className={classes.input}>
              <TextField
                className={classes.input}
                variant="outlined"
                margin="normal"
                label="Nome"
                required                              
                type="text"
                id="nome"
                name="nome"
                value= {this.state.nome}
                onChange={handleChangeName}   
              />
              <div className={`${classes.descricao} ${classes.borda}`}>

                <List component="nav" aria-label="Device settings" style={{ paddingTop: '3px', paddingBottom: '0px' }}>
                  <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="opicoes"
                    aria-label="Testes"
                    onClick={handleClickListItem}
                    style={{ backgroundColor: 'transparent', paddingLeft: '13px', paddingTop: '7px' }}
                  >
                    <ListItemText primary={options[this.state.selectedIndex]} style={{ color: '#757575', lineHeight: '0px', width: '195px', }} />
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
                      style={{ width: '259px', height: '35px' }}
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
                value= {this.state.email}
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
                name="mensagem"
                label="Mensagem"
                type="text"
                id="mensagem"
                value= {this.state.mensagem}
                onChange={handleChangeMensagem}                
              />

              <Button className={classes.btnStyle}
                type="submit"
                variant="contained"
                color="primary"

              >
                Enviar
              </Button>

            </form>

          </Grid>

        </Grid>

        <Grid container spacing={1} style={{marginTop:'10px', paddingBottom:'10px', backgroundColor: '#f2f2f2'}}>

          <Grid item xs={12} sm={12} >

            <Typography component="h2" variant="h3" className={classes.title}>
              Time de desenvolvedores
            </Typography>
          </Grid>


          <Grid item xs={12} sm={2} style={{ marginLeft: '50px' }}>

            <PerfilDev developer={devs[1]}/>

          </Grid>

          <Grid item xs={12} sm={2} >

            <PerfilDev developer={devs[0]}/>

          </Grid>

          <Grid item xs={12} sm={2} >

            <PerfilDev developer={devs[3]} />
          </Grid>

          <Grid item xs={12} sm={2} >

            <PerfilDev developer={devs[4]}/>
          </Grid>

          <Grid item xs={12} sm={2}  >

            <PerfilDev developer={devs[2]}/>
          </Grid>


        </Grid>

      </div>
    );
  }
}

ContactComponents.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

const ContactComponentsWithSnack = withSnackbar(ContactComponents);

const mapStateToProps = ({ otherProps}, props) => ({
  otherProps,
})


export default withRouter(connect(mapStateToProps)(withStyles(styles)(ContactComponentsWithSnack)));
