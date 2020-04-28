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
  render() {
    const {
      classes,
      history,
    } = this.props;

    return (
      <div className={classes.root}>
        <Paper component="form" className={classes.rootPaper}>
          <InputBase
            className={classes.input}
            placeholder="O que você procura?"
            inputProps={{ 'aria-label': 'O que você procura?' }}
          />
          <IconButton type="submit" aria-label="search">
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
};

export default withRouter(connect()(withStyles(styles)(SearchBox)));
