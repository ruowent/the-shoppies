import React from 'react';
import './App.css';
import { AppContextProvider } from './AppContext';
import NominationContainer from './components/nominations/NominationContainer';
import SearchContainer from './components/search/SearchContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Header from './components/header/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'stretch',
    height: '100%',
    padding: theme.spacing(4)
  },
  container: {
    height: '100%'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <AppContextProvider>
      <Header></Header>
      <Grid container justify="center" className={classes.root} spacing={3}>
        <Grid item xs={6} className={classes.container}>
          <SearchContainer />
        </Grid>
        <Grid item xs={6} className={classes.container}>
          <NominationContainer />
        </Grid>
      </Grid>
    </AppContextProvider>
  );
}

export default App;
