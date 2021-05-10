import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Paper, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

export default function SearchBox({ onSearchQueryChange }) {

  const handleChange = (event) => {
    onSearchQueryChange(event.target.value);
  }

  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search movies to nominate ..."
        onChange={handleChange}
        inputProps={{ 'aria-label': 'search movies' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}