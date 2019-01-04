import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Banner.css';

class Banner extends Component {

  renderBannerContent(){
    return (
      <div className={[classes.content, classes.centered].join(' ')}>
        <div className={classes.title}>
          <p> {this.props.title} </p>
        </div>
        <div className={classes.subtitle}>
          <p> {this.props.subTitle} </p>
        </div>
      </div>
    );
  }

  renderButtons(){
    const showButton = this.props.showButton;

    return (
      <div>
        { showButton &&
          <div className={classes.bottomCenter}>
            <Link to={'/'+ this.props.buttonLink} className="button button-accent">{this.props.buttonText}</Link>
          </div>
        }
      </div>
    );
  }

  render() {
    const imgUrl = require(`../../../images/banner/${this.props.image}`);
    const imgStyle = {
      backgroundImage: `url('${imgUrl}')`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };

    return (
      <div className={classes.container} style={imgStyle}>
        {this.renderBannerContent()}
        {this.renderButtons()}
      </div>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  showButton: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string
};

Banner.defaultProps = {
  title: "hello world",
  subTitle: "",
  showButton: false,
  buttonText: "",
  buttonLink: "",
  image: 'wood-default-bg.jpeg'
};

export default Banner;
