import React from 'react';

import classes from './NavItems.css';
import NavItem from './navItem/NavItem';

const NavItems = (props) => (
  <ul className={classes.NavItems} onClick={props.clicked}>
    <NavItem link="/" exact>home</NavItem>
    <NavItem link="/about">about</NavItem>
    <NavItem link="/projects">projects</NavItem>
    <NavItem link="/contact">contact</NavItem>
    <NavItem link="/playground">playground</NavItem>
  </ul>
);

export default NavItems;
