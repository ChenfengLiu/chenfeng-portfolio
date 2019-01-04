import React, { Component } from 'react';
import CardHeader from './cardHeader/CardHeader';
import CardBody from './cardBody/CardBody';

import classes from './Card.css';

class Card extends Component {
  render() {
    return (
      <article className={classes.card} onClick={this.props.clicked}>
        <CardHeader
          category={this.props.details.category}
          image={this.props.details.image}/>
        <CardBody
          title={this.props.details.title}
          text={this.props.details.text}
          date={this.props.details.date}/>
      </article>
    )
  }
}

export default Card;
