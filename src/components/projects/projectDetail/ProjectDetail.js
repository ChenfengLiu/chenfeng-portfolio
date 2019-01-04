import React from 'react';

import ProjectDetailHeader from './projectDetailHeader/ProjectDetailHeader';
import Banner from '../../lib/banner/Banner';

const projectDetailData = [
  {
    "id": "0",
    "category": "Portfolio",
    "title": "Portfolio Website w/ React & Firebase",
    "banner": "3dp_banner.jpg",
    "date": "Feb 12 2018"
  },
  {
    "id": "1",
    "category": "Startup",
    "title": "DataNEdu | Data and Education",
    "banner": "3dp_banner.jpg",
    "date": "Feb 13 2018"
  },
  {
    "id": "2",
    "category": "DIY",
    "title": "Personal 3D Printer from Scratch",
    "banner": "3dp_banner.jpg",
    "date": "Feb 12 2018"
  }
];

const ProjectDetail = ({ match }) => {
  const projectId = match.params.id;
  return (
    <div className="project-container">
      <div className="projects-banner">
        <Banner title={projectDetailData[projectId].category}
          subTitle={projectDetailData[projectId].title}
          image={projectDetailData[projectId].banner}/>
      </div>
      <div className="project-content">
        {projectId === "2" && <ProjectDetailHeader />}
      </div>
    </div>
  );
}

export default ProjectDetail;
