import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  withStyles, Typography,
} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const styles = () => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        margin: '30px',
        alignItems: 'center',
        width: 400,
      },
      input: {
        marginLeft: '10px',
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
      container: {
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0.9375rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
});

class SearchBox extends PureComponent {
    render() {
      const {
        classes,
        history,
      } = this.props;
  
      return (
        <div style={{display:'flex'}}>
            
            <Paper component="form" className={classes.root}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="O que você procura?"
                    inputProps={{ 'aria-label': 'O que você procura?' }}
                />
                <Divider className={classes.divider} orientation="vertical" />
            </Paper>
        </div>
      );
    }
  }

  SearchBox.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  
  SearchBox.defaultProps = {
  };
  
  export default withRouter(connect()(withStyles(styles)(SearchBox)));
