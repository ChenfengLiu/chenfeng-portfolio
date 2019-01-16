import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Card from '../../components/ui/card/Card';
import classes from './ProjectBlogs.css';

import projectDetailData from '../../components/projects/projectDetail/ProjectDetailData';

class ProjectBlogs extends Component {

  state = {
    cards: projectDetailData
  }

  projectSelectedHandler = (id) => {
    this.props.history.push('/projects/' + id);
    this.scrollUp();
    // console.log(this.props.history);
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

  render() {
    let projects = this.state.cards.map(card => {
      return (
        <Card
          details={card}
          key={card.id}
          clicked={() => this.projectSelectedHandler(card.id)} />
      );
    });

    console.log(this.props.match.url);

    return (
      <div>
        <section className={classes.cardList}>
          {projects}
        </section>
      </div>
    );
  }
}

export default withRouter(ProjectBlogs);
