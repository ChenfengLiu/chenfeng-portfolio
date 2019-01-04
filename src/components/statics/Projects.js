import React, { Component } from 'react';
import Banner from '../lib/banner/Banner';

import ProjectBlogs from '../../containers/projectBlogs/ProjectBlogs';


class Projects extends Component {

  render() {
    return (
      <div>
        <div className="projects-banner">
          <Banner title={"projects"}
            subTitle={"design, code, have fun😆"}
            image={"church.png"}/>
        </div>

        <div className='projects-content'>
          <ProjectBlogs />
        </div>
      </div>
    );
  }
}

export default Projects;
