import React from 'react';

import Project3DPrinter from './Project_3D_Printer/Project3DPrinter';
import ProjectPortfolio from './Project_Portfolio/ProjectPortfolio';
import Banner from '../../lib/banner/Banner';

import projectDetailData from './ProjectDetailData';

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
