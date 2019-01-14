import React from 'react';

import { FaLinkedin, FaGooglePlusSquare, FaGithubSquare } from 'react-icons/fa';
import classes from '../../stylesheets/pages/Footer.css';


const Footer = () => (
  <div className={classes.footerContainer}>
    <div className="footer-content">
      <div className={classes.icons}>
        <a className={classes.iconWrapper}
          href="https://www.linkedin.com/in/chenfeng-liu-work">
          <FaLinkedin className={classes.icon} />
        </a>
        <a className={classes.iconWrapper}
          href="https://github.com/ChenfengLiu">
          <FaGithubSquare className={classes.icon} />
        </a>
        <a className={classes.iconWrapper}
         href="https://plus.google.com/111831347990864753800">
          <FaGooglePlusSquare className={classes.icon} />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
