import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Card from '../../components/ui/card/Card';
import classes from './ProjectBlogs.css';

//Temporarily store data here
const CardsData = [
  {
    "id": "0",
    "category": "Portfolio",
    "title": "Portfolio Website w/ React & Firebase",
    "text": "I decided to create my own portfolio website. This is what I learned",
    "image": "card-portfolio.png",
    "date": "Feb 12 2018"
  },
  {
    "id": "1",
    "category": "Startup",
    "title": "DataNEdu | Data and Education",
    "text": "Apply data analytics to education industry to help students better prepare graduate studies and career development",
    "image": "card-datanedu.jpg",
    "date": "Feb 13 2018"
  },
  {
    "id": "2",
    "category": "DIY",
    "title": "Personal 3D Printer from Scratch",
    "text": "I made my own 3D printer. Most parts of this printer is made of plywood and 3D printed parts.",
    "image": "card-3dp.jpg",
    "date": "Feb 12 2018"
  },
  {
    "id": "3",
    "category": "Work",
    "title": "Apply D3 to your Everyday Life",
    "text": "I learned D3 in a project. It is a powerful tool if you want to make your own visualizations.",
    "image": "card-d3.jpg",
    "date": "Jan 16 2018"
  }
];

class ProjectBlogs extends Component {

  state = {
    cards: CardsData
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
