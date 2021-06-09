import React from 'react';
import { useAppContext } from '../../AppContext';
import { makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const appContext = useAppContext();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The Shoppies Awards
          </Typography>
          <Button color="inherit" onClick={appContext.onReset}>Reset</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}