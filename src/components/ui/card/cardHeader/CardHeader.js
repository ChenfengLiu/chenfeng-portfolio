import React, { Component } from 'react';

import classes from './CardHeader.css';

class CardHeader extends Component {
  render() {
    const { image, category } = this.props;
    const imageUrl = require(`../../../../images/card/${image}`);
    var style = {
        backgroundImage: `url('${imageUrl}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    return (
      <header style={style} className={classes.cardHeader}>
        <h4 className={classes.cardTitle}>{category}</h4>
      </header>
    )
  }
}

export default CardHeader;
