import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'
import { Divider } from '@material-ui/core';

import Logo from './cardLogo'
import Footer from './cardFooter'



const useStyles = makeStyles({
  
});

export default function SimpleCard(prop) {
  const classes = useStyles();


  return (
  <div>
      <div className='card'>
          <Logo bgcolor={prop.bgcolor}/>
          <h2 className='cardH'>{prop.theHead}</h2>
          <p className='cardP1'>{prop.p1}</p>
          <p  className='cardPbar'>|</p>
          <p className='cardP2'>{prop.p2}</p>
          <p className='cardP3' >{prop.p3}</p>
          <Divider/>
          <Footer
          ownerName={prop.footerOwnerName}
            modifiedOn={prop.footerModificationTime}/>
      </div>
  </div>
  );
}
