import React, { Component } from 'react';

import LightGallery from '../../../lib/lightGallery/LightGallery';
import classes from './Project3DPrinter.css';

const photos0 = [
  { src: require('../../../../images/project/my-3d-printer/1.JPG'), width: 5, height: 3 },
  { src: require('../../../../images/project/my-3d-printer/3dp2.png'), width: 16, height: 9 },
  { src: require('../../../../images/project/my-3d-printer/3dp1.png'), width: 16, height: 9 },
  { src: require('../../../../images/project/my-3d-printer/3dp3.png'), width: 16, height: 9 },
  { src: require('../../../../images/project/my-3d-printer/3dp4.png'), width: 16, height: 9 },
]

const photos1 = [
  { src: require('../../../../images/project/my-3d-printer/2.JPG'), width: 86, height: 100 },
  { src: require('../../../../images/project/my-3d-printer/2_2.jpg'), width: 1, height: 1 },
];

const photos2 = [
  { src: require('../../../../images/project/my-3d-printer/3.jpg'), width: 2, height: 3 },
  { src: require('../../../../images/project/my-3d-printer/4.jpg'), width: 2, height: 2 },
];

const photos3 = [
  { src: require('../../../../images/project/my-3d-printer/5.jpg'), width: 5, height: 4 },
  { src: require('../../../../images/project/my-3d-printer/6.jpg'), width: 5, height: 4 },
  { src: require('../../../../images/project/my-3d-printer/7.jpg'), width: 4, height: 3 },
];

const photos4 = [
  { src: require('../../../../images/project/my-3d-printer/8.jpg'), width: 26, height: 19 },
  { src: require('../../../../images/project/my-3d-printer/marlin.png'), width: 4, height: 5 },
];

const photos5 = [
  { src: require('../../../../images/project/my-3d-printer/9.jpg'), width: 4, height: 3 },
  { src: require('../../../../images/project/my-3d-printer/10.jpg'), width: 4, height: 3 },
];

class Project3DPrinter extends Component {

  render() {
    return (
      <div>
        <h2>I made my own 3D printer from plywood</h2>
        <h3>Introduction</h3>
        <p className={classes.typo}>
          In 2014, I bought a Printrbot (about $400+).
          After few test prints, I was blown away by how easy it was to create complex 3D objects.
        </p>
        <p className={classes.typo}>
          I started to re-design and print the things which I see every day in my life: vase, coaster, bracelet, soap dish...
          Even my catchphrase changed from "I can make that" to "let me print it for you".
        </p>
        <p className={classes.typo}>
          3D printing changed my way of designing and making things.
          It opened up a whole new dimension of creating and prototyping.
        </p>
        <p className={classes.typo}>
          However, my handy little Printrbot, which had a 4X4X4 inch^3 printing volume, was not big enough to hold my design and my eager to print larger objects.
          Hence, motivated by my eager of making my own shoes (Yes, shoes!), I decided to make a large form factor 3D printer.
        </p>
        <h3>Design decisions: </h3>
        <div>
          <ol>
            <li>The print volume of this printer is 8X8X7 (length, width, height) inch^3.</li>
            <li>The budget is about $800+ (comparing to a $2000+ 3D printer which has the same print volume...).</li>
            <li>The structure of this printer is made from plywood since I didn't have access to metal cutting tools at the time. Plus plywood is cheaper. </li>
            <li>Some electronic parts such as the end-stop switches, hot-end (extruder), stepper motors, and etc, will be re-used in the new printer.
            I will disassemble my Printrbot, pick the electronic parts, and assemble them to the new printer.</li>
          </ol>
        </div>
        <hr />
        <section>
          <h3>Step 1 | Sketch My Design</h3>
          <p className={classes.typo}>
            I sketched my design in Solidworks (as the first picture shown down below).
          </p>
          <p className={classes.typo}>
            The yellow-colored components represent plywood, which I'm going to cut them in "step 3".
          </p>
          <p className={classes.typo}>
            Other colored components are either electronic components (like the stepper motor) or the components I'm about to 3D print later on.
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos0} />
          </div>
        </section>
        <hr />
        <section>
          <h3>Step 2 | Go Shopping! </h3>
          <p className={classes.typo}>
            I bought all the mechanical and electronic parts online (Mostly on Amazon), such as stepper motors, pulleys, timing belt, screws, and nuts.
          </p>
          <p className={classes.typo}>
            I also bought a large heated bed from Printrbot's online store.
            This heated bed had a nice layer of machined aluminum on top (8X8 inch^2) as shown in the first picture down below on the top right corner.
          </p>
          <p className={classes.typo}>
            The second picture shows the plywood sheets that I bought from Amazon.
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos1} />
          </div>
        </section>
        <hr />
        <section>
          <h3>Step 3 | Cut and Print</h3>
          <p className={classes.typo}>
            Precision is the most important factor when cutting plywood and printing components on my Printrbot.
          </p>
          <p className={classes.typo}>
            I didn't have access to a CNC machine at that time, so my initial plan was to draw all the cut lines.
          </p>
          <p className={classes.typo}>
            What a horrible idea!
            It took me two hours to draw the first piece, and it turned out that my drawing was not even right.
            You can see that I wasn't expecting this labor-intensive work.
          </p>
          <p className={classes.typo}>
            So after several cups of coffee, I decided to go for "plan B" (there's always a plan B).
            I export my plywood design at 1: 1 scale and print my design onto A3 papers.
            Then, thanks to 3M's "peel off" glue stick, I glued my prints directly to the plywood and began cutting!
          </p>
          <p className={classes.typo}>
            (Note: I designed my plywood pattern with the available cutting tools in mind.
            Basically, a vertical bandsaw and a Dremel is all I have access to.)
          </p>
          <p className={[classes.typo, classes.center].join(' ')}>----- More Text Divider -----</p>
          <p className={classes.typo}>
            Printing the 3D components was even more stressful.
          </p>
          <p className={classes.typo}>
            First of all, my low-cost Printrbot was not a precise tool.
            Instead of calibrating it, I went for the hard way.
            I saved a "designed" version of my sketched components and made a "3D printing" version for each 3D components.
          </p>
          <p className={classes.typo}>
            This was another horrible idea!
            I wish it was as easy as "scale the whole sketch by a factor", but I was wrong.
            I modified the dimension for every component that I sketched. I used my Printrbot to print it, measure the dimensions, and repeat...
          </p>
          <p className={classes.typo}>
            In the end, I'm glad that I have printed all the components with the correct dimensions.
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos2} />
          </div>
        </section>
        <hr />
        <section>
          <h3>Step 4 | Assemble</h3>
          <p className={classes.typo}>
            The assembly process was pretty straightforward since I did a lot of assembling and disassemble to test my 3D printed parts.
          </p>
          <p className={classes.typo}>
            The downside of lack of cutting tools is that the assembly process involves 200+ screw and nuts.
            Still, it was about 4 hours to assemble my big 3D printer.
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos3} />
          </div>
        </section>
        <hr />
        <section>
          <h3>Step 5 | Firmware and Config</h3>
          <p className={classes.typo}>
            Did I mention that I bought the "Printrboard" from Printrbot?
            I skipped the RAMPS board in order to buy me some time when installing the firmware (Marlin), and change some configurations.
            I did have to go inside the config file of the Marlin firmware and change the dimensions and directions to suit my big printer.
            Then, I flushed the firmware to my Printrboard.
            This step was relatively easy thanks to Printrbot's helpful tutorials.
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos4} />
          </div>
        </section>
        <hr />
        <section>
          <h3>Final Step | Test Print!</h3>
          <p className={classes.typo}>
            No picture for my first print?
            No picture for my first print (sad face)...
            I was too excited.
          </p>
        </section>
        <hr />
        <section>
          <h3>Credits | Shout out to my friends!!</h3>
          <p className={classes.typo}>
            I couldn't complete this 3D printer project without the help from my friends: Peng Xue and Xinrong (Leon) Chen!
          </p>
          <p className={classes.typo}>
            Here is a photo of Leon "risking his life" cutting a steel rod in the workshop.
            (Safety is critical, please don't try this at home).
          </p>
          <div className={classes.gallery}>
            <LightGallery photos={photos5}/>
          </div>
        </section>
      </div>
    );
  }
};

export default Project3DPrinter;
