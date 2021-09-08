import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'

const useStyles = makeStyles({
  
});

export default function Logo(prop) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
  <div style={{backgroundColor:prop.bgcolor}} className='logo'>
      <h2>GD</h2>
  </div>
  );
}
