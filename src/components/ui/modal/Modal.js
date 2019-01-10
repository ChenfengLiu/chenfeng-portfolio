import React from 'react';

import classes from './Modal.css';
import AuxComponent from '../../../hoc/auxComponent/AuxComponent';
import Backdrop from '../backdrop/Backdrop';

const Modal = (props) => (
  <AuxComponent>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : "translateY(-100vh)",
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </AuxComponent>
);

export default Modal;
