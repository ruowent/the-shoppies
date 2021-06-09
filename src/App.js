import React from 'react';
import { AppContextProvider } from './AppContext';

import Nominations from './components/Nominations';
import Search from './components/Search';
import Header from './components/header/Header';

import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'stretch',
    height: '45em',
    padding: theme.spacing(4)
  },
  container: {
    height: '100%'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <AppContextProvider>
      <Header></Header>
      <Grid container justify="center" className={classes.root} spacing={3}>
        <Grid item xs={6} className={classes.container}>
          <Search />
        </Grid>
        <Grid item xs={6} className={classes.container}>
          <Nominations />
        </Grid>
      </Grid>
    </AppContextProvider>
  );
};

