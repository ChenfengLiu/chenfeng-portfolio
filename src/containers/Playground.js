import React, { Component } from 'react';

import classes from '../stylesheets/containers/playground.css';
import Banner from '../components/lib/banner/Banner';
// import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import PunchCard from '../components/playground/punchCard/PunchCard';

class Playground extends Component {

  render() {

    return(
      <div className={classes.container}>
        <div className="home-banner">
          <Banner title={"Have fun coding"}
            subTitle={'"All I have is fun, but fun is not all I have."'}
            image={'lights_standard.jpg'}/>
        </div>
        {
          //<BurgerBuilder />
        }

        {
          <PunchCard />
        }
      </div>
    );
  }
}

export default Playground;
