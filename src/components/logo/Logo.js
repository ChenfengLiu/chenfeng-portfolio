import React from 'react';

import logoImg from '../../images/logo/cf-portfolio-logo-black-tiny.svg';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={[classes.Logo, props.className].join(' ')} style={{height: props.height}}>
        <img src={logoImg} alt="Chenfeng Liu" />
    </div>
);

export default Logo;
