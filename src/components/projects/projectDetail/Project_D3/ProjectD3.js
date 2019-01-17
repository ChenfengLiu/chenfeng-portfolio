import React, { Component } from 'react';

import LightGallery from '../../../lib/lightGallery/LightGallery';
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
          {JSON.stringify(spendings)}
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
