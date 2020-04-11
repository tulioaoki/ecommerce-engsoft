import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
} from '@material-ui/core';
import HomePageCard from './PageCard';
import { PURPLE } from '../../utils/colors';


const styles = () => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    minWidth: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    margin: '0px',
    justifyContent: 'center',
    alignSelf: 'center',
    //backgroundColor: '#e3e8eb',
    'z-index': 1,
  },
  colorizedBg: {
    borderRadius: 5,
    margin: 30,
    width: '92%',
    height: '60%',
    minHeight: '90vh',
    minWidth: '90%',
    display: 'flex',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: '#ca99d7',
    padding: 0,
    'z-index': 2,
    alignContent: 'flex-end',
    alignItens: 'flex-end',
  },
});

class HomePageComponent extends PureComponent {
  render() {
    const {
      classes,
      topText,
      middleText,
      bottomText,
      buttomText,
      position,
      color,
    } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.colorizedBg} style={{ backgroundColor: color }} />
      </div>
    );
  }
}

HomePageComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  topText: PropTypes.object.isRequired,
  middleText: PropTypes.object.isRequired,
  bottomText: PropTypes.object.isRequired,
  buttomText: PropTypes.object.isRequired,
  position: PropTypes.string,
  color: PropTypes.string,
};

HomePageComponent.defaultProps = {
  position: 'right',
  color: PURPLE,
};

export default withRouter(connect()(withStyles(styles)(HomePageComponent)));
