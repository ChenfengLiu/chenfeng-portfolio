import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.css';

const NavItem = ( props ) => (
  <li className={[classes.NavItem, classes.borderXWidth].join(' ')}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default NavItem;
