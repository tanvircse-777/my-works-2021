import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Card from './card'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '0px',
    color: theme.palette.text.secondary,
    boxShadow:'none',
  },
}));

export default function AllCards(prop) {
  const classes = useStyles();

  return (
    <Container>
    <div className={classes.root}>
     
      <Grid container spacing={3}>
        <Grid item xs={12}  sm={6} md={3}>
          <Paper className={classes.paper}>
            <Card
              bgcolor='#34C635'
              theHead='Google Drive'
              p1='Draft'
              p2='Not published'
              p3='Performing all operation in google drive'
              footerOwnerName='Inta Web Works'
              footerModificationTime='01-Oct 2019 06:46 AM'/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
          <Card
              bgcolor='#886CFD'
              theHead='Google Drive'
              p1='Draft'
              p2='Not published'
              p3='Performing all operation in google drive'
              footerOwnerName='Inta Web Works'
              footerModificationTime='01-Oct 2019 06:46 AM'/>
          </Paper>
        </Grid>
        <Grid item xs={12}  sm={6} md={3}>
          <Paper className={classes.paper}>
          <Card
              bgcolor='#098DFC'
              theHead='Google Drive'
              p1='Draft'
              p2='Not published'
              p3='Performing all operation in google drive'
              footerOwnerName='Inta Web Works'
              footerModificationTime='01-Oct 2019 06:46 AM'/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}  md={3}>
          <Paper className={classes.paper}>
          <Card
              bgcolor='#FE9516'
              theHead='Google Drive'
              p1='Draft'
              p2='Not published'
              p3='Performing all operation in google drive'
              footerOwnerName='Inta Web Works'
              footerModificationTime='01-Oct 2019 06:46 AM'/>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </Container>
    
  );
}