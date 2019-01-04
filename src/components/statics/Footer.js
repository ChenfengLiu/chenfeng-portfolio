import React from 'react';

import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import classes from '../../stylesheets/pages/Footer.css';


const Footer = () => (
  <div className={classes.footerContainer}>
    <div className="footer-content">
      <div className={classes.icons}>
        <a className={classes.iconWrapper}
          href="https://www.linkedin.com/in/chenfeng-liu-work">
          <FaLinkedinSquare className={classes.icon} />
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
