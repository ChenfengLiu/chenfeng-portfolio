import React, { Component } from 'react';

import classes from './CardBody.css';

class CardBody extends Component {
  render() {
    return (
      <div className={classes.cardBody}>
        <p className={classes.date}>{this.props.date}</p>
        <h2 className={classes.title}>{this.props.title}</h2>
        <p className={classes.cardText}>{this.props.text}</p>
      </div>
    )
  }
}

export default CardBody;
