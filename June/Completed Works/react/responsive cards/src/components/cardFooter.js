import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },
}));

export default function FullWidthGrid(prop) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}>
              <p className='footerP1'>Ownder by</p>
              <p className='footerOwner'>{prop.ownerName}</p>
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}>
            <p className='footerP2'>Modification on</p>
            <p className='footerP3'>{prop.modifiedOn}</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
