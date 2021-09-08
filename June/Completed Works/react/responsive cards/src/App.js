import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AllCards from './components/allCards';

const useStyles = makeStyles((theme) => ({
 
}));

export default function App() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AllCards/>
    </div>
    
  );
}
