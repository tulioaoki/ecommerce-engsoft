import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = () => ({
  root: {
    maxWidth: 600,
    minWidth: 200,
    width: '100%'
  },
  rootPaper: {
    display: 'flex',
    background: '#c4c4c4',
  },
  input: {
    marginLeft: '10px',
    flex: 1,
  },
});

class SearchBox extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    const {
      classes,
      history,
      placeholder,
      inputProps,
      action,
    } = this.props;
    const changeAction = typeof action === 'undefined' ? (x) => (x) : action
    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        history.push('/products?search=' + this.state.value)
      }
    }
    return (
      <div className={classes.root}>
        <Paper className={classes.rootPaper}>
          <InputBase
            value={this.state.value} onChange={(e) => (changeAction(e), this.setState({value:e.target.value}))}
            className={classes.input}
            placeholder={placeholder}
            inputProps={{ 'aria-label': inputProps }}
            onKeyPress={handleKeyPress}
          />

          <IconButton onClick={()=>{history.push('/products?search=' + this.state.value)}} aria-label="search">

            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputProps: PropTypes.string.isRequired,
  action: PropTypes.func,
};

SearchBox.defaultProps = {
  placeholder: "O que você procura?",
  inputProps: 'O que você procura?',
};

export default withRouter(connect()(withStyles(styles)(SearchBox)));
