import React, { Component } from 'react';

import Aux from '../aux/Aux';
import classes from './Layout.css';
import Navbar from '../../components/navbar/Navbar';
import SideDrawer from '../../components/navbar/sideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    } );
  }

  render() {
    return (
      <Aux>
        <div className={classes.navbarWrapper}>
          <Navbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        </div>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />

        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;
