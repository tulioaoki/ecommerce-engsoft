import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  withStyles,
} from '@material-ui/core';
import SocialMedia from '../../FooterComponents/SocialMedia';


const styles = () => ({

  root: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'white',

  },

  footer: {
    backgroundColor: '#1F509C',
    paddingTop: '1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '16px 0',
    color: 'white',
  },

});

export class Footer extends PureComponent {
  render() {
    const {
      classes,
      history,
    } = this.props;

    return (

      <div className={classes.root}>
        {/* Se o props passado for true, exiba as redes sociais */ }
        {this.props.showSocialMedia

                   && <SocialMedia />}
        <div className={classes.footer}>
          <span>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque quam purus,
            <br />
            consequat fermentum ipsum suscipit ut. t
            {' '}
          </span>
        </div>

      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  showSocialMedia: PropTypes.bool,
};

Footer.defaultProps = {
};

export default withRouter(connect()(withStyles(styles)(Footer)));
