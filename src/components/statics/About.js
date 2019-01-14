import React from 'react';
import Banner from '../lib/banner/Banner';
import classes from '../../stylesheets/pages/About.css';

const About = ({skillsLang, skillsAPIs, skillsNodeModules, skillsWebTools, skillsArtTools}) => (
  <div>
    <div className={classes.aboutBanner}>
      <Banner title={"About Chenfeng"}
        subTitle={'minimalist☑️ + passion🍬☕ + foodie🍰'}
        showButton={false}
        buttonText={''}
        buttonLink={''}
        image={'breakfast.jpg'}/>
    </div>

    <div className="about-content">
      <div className={classes.aboutPassion}>
        <h1>Passion</h1>
        <p>I am a passionate web developer living in Boston.
         I push myself to the limit to build complete Web Applications.
          Communication and teamwork are two of my best friends.
          Empowering people with advanced technology is and will always be my goal.</p>
      </div>
      <div className={classes.aboutSkills}>
        <h1>Skill Set</h1>
        <h3>Languages</h3>
        <Chip skills={skillsLang} />
        <h3>Frameworks and APIs</h3>
        <Chip skills={skillsAPIs} />
        <h3>Node Modules and Libraries</h3>
        <Chip skills={skillsNodeModules} />
        <h3>DevOps</h3>
        <Chip skills={skillsWebTools} />
        <h3>Art and 3D</h3>
        <Chip skills={skillsArtTools} />
      </div>
      <div className={classes.aboutHire}>
        <h1>Hire Me</h1>
        <p>Web technology is a tool that can express your brilliant ideas.
        Don't let the technology be your constraints.
        Hire me to unleash your creativity and push your application from concept to reality. </p>
      </div>
    </div>
  </div>
);

About.defaultProps = {
  skillsLang: ['Java', 'Javascript', 'HTML', 'CSS', 'C', 'English', 'Chinese'],
  skillsAPIs: ['MEAN stack', 'React.js', 'Angular', 'Node.js', 'Express.js', 'Meteor.js', 'Bootstrap', 'WebGL', 'Reaction Commerce'],
  skillsNodeModules: ['JQuery', 'D3',  'Sequelize', 'mssql', 'Exceljs', 'Officegen'],
  skillsWebTools: ['Webpack', 'Babel', 'npm', 'Docker', 'Kubernetes', 'Jenkins', 'Google Kubernetes Engine', 'Firebase'],
  skillsArtTools: ['Photoshop', 'Illustrator', 'Solidworks', 'Fusion360', 'Cura']
};

const Chip = ({skills}) => (
  <div className={classes.skillGroup}>
    {skills.map((skill, i) =>
      <span key={i}> {skill} </span>
    )}
  </div>
);

export default About;
