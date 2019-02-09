import React, { Component } from 'react';

import classes from './ProjectD3.css';
import SpendingsGraph from './SpendingsGraph';
import spendings from './Spendings';

class ProjectD3 extends Component {

  render() {
    return (
      <div>
        <h2>Building a Portfolio Website</h2>
        <h3>Introduction:</h3>
        <p className={classes.typo}>
          I learned D3 in a project. It is a powerful tool if you want to make your own graphs or charts. This project introduced me to the world of data visualization. Now I understand more about how to present data so that users can understand it better.
        </p>
        <p className={classes.typo}>
          Below is an example I wrote in which presents my monthly spendings in various (3 different) ways. The numbers are fake, but please feel free to click through the stacked-bar chart, waterfall chat, and the bar graph.
        </p>
        <hr />
        <section>
          <h3>Play with D3 | My Monthly Spendings</h3>
          <SpendingsGraph spendings={spendings} />
        </section>
        <hr />

      </div>
    );
  }
};

export default ProjectD3;
