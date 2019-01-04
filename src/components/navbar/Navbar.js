import React from 'react';

import Logo from '../logo/Logo';
import classes from './Navbar.css';
import NavItems from './navItems/NavItems';
import DrawerToggle from './sideDrawer/drawerToggle/DrawerToggle';

const Navbar = ( props ) => (
  <header className={classes.Navbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />

    <div className={classes.Logo}>
      <Logo className={classes.DesktopOnly}/>
      <p>Chenfeng Liu</p>
    </div>

    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>

  </header>
);

export default Navbar;
