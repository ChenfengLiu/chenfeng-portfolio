import React from 'react';

import Project3DPrinter from './Project_3D_Printer/Project3DPrinter';
import ProjectPortfolio from './Project_Portfolio/ProjectPortfolio';
import Banner from '../../lib/banner/Banner';

const projectDetailData = [
  {
    "id": "0",
    "category": "Portfolio",
    "title": "Portfolio Website w/ React & Firebase",
    "banner": "3dp_banner.jpg",
    "date": "Jan 15 2018 (Updated)"
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
  },
  {
    "id": "3",
    "category": "Work",
    "title": "D3 ",
    "banner": "3dp_banner.jpg",
    "date": "Jan 15 2018"
  }
];

const ProjectDetail = ({ match }) => {
  const projectId = match.params.id;
  return (
    <div className="project-container">
      <div className="projects-banner">
        <Banner title={projectDetailData[projectId].category}
          subTitle={projectDetailData[projectId].title}
          image={projectDetailData[projectId].banner} />
      </div>
      <div className="project-content">
        {projectId === "0" && <ProjectPortfolio />}
        {projectId === "2" && <Project3DPrinter />}
      </div>
    </div>
  );
}

export default ProjectDetail;
