import React from 'react';

import Logo from '../../logo/Logo';
import NavItems from '../navItems/NavItems';
import classes from './SideDrawer.css';
import Backdrop from '../../ui/backdrop/Backdrop';
import AuxComponent from '../../../hoc/auxComponent/AuxComponent';

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <AuxComponent>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.Nav}>
          <NavItems clicked={props.closed}/>
        </nav>
      </div>
    </AuxComponent>
  );
};

export default SideDrawer;
