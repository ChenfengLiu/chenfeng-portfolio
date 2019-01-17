import React, { Component } from 'react';

import LightGallery from '../../../lib/lightGallery/LightGallery';
import classes from './ProjectPortfolio.css';

const photos0 = [
  { src: require('../../../../images/project/my-portfolio/bootstrap.png'), width: 2, height: 2 },
  { src: require('../../../../images/project/my-portfolio/angular.png'), width: 2, height: 2 },
  { src: require('../../../../images/project/my-portfolio/react.png'), width: 64, height: 45 },
];

const photos1 = [
  { src: require('../../../../images/project/my-portfolio/firebase.png'), width: 2, height: 2 },
];

const photos2 = [
  { src: require('../../../../images/project/my-portfolio/color_palette.png'), width: 9, height: 5 },
];


class ProjectPortfolio extends Component {

  render() {
    return (
      <div>
        <h2>Building a Portfolio Website</h2>
        <h3>Introduction:</h3>
        <p className={classes.typo}>
          This is right after I graduated from college in May 2017. I want to build a website where I can show my skills as a Web Developer. For me, this is my first step into the professional world. I wanted to build a modern, minimalistic, and of course, "responsive" website with my personality baked into it. This was a huge challenge for me at that time.
        </p>
        <hr />
        <section>
          <h3>The Front-end | React.js</h3>
          <p className={classes.typo}>
            When I was back in school, I have already got my feet wet on learning Javascript, HTML, and CSS. I also learned Bootstrap which I think it's a powerful library for quickly creating "responsive" and "cross-browser" websites. However, I know this is not good enough for me to create my "modern" and maybe even "future-proof" website.
          </p>
          <p className={classes.typo}>
            Then, I learned React.js. I don't have any preference on which Front-end Framework is better. In fact, I also learned Angular at the same time. I used Angular in another project with my friends, but it is for another story. For me, all Front-end Frameworks are trying to achieve the same functionality. They all just do it a little differently. I chose React.js because I can create code faster in React than Angular or Vanilla Javascript.
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos0} />
          </div>
        </section>
        <hr />
        <section>
          <h3>The Back-end | Firebase</h3>
          <p className={classes.typo}>
            I have created a chat server with C. I have created a chat server with Java. I have put my PHP scripts on my school's HTTP server. However, this is not quite enough for me to create a Back-end and plus I don't want to spend money on renting a server. For me, spending money to create a portfolio website is not a choice, because Wix, Weebly, and Squarespace can do it way better than me (Okay, I'm cheap).
          </p>
          <p className={classes.typo}>
            Then, I learned Firebase. Firebase is famous for its real-time database. When I tried it, I was amazed. Later I discovered the "Hosting" function of Firebase which is even more amazing. Firebase took care of the SSL certificate, firewall, and authentication. I found a home for my portfolio website (Firebase has a free tier which is all I need for my website).
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos1} />
          </div>
        </section>
        <hr />
        <section>
          <h3>The Design | Minimalism</h3>
          <p className={classes.typo}>
            Minimalism is my theme. Google's Material Design is my guide. First, I found my color palette. Second, I collected the pictures I took in the last few months. Last but not least, I started to draw wireframes on paper.
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos2} />
          </div>
        </section>
      </div>
    );
  }
};

export default ProjectPortfolio;
