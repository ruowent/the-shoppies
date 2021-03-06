import React, { useState, useEffect } from 'react';

import SearchBox from './SearchBox';
import ResultList from './ResultList';

import { makeStyles, Paper } from '@material-ui/core';
import { useAppStyles } from '../../AppStyle';
import initialScreenBackground from '../img/minions.png';

const useStyles = makeStyles((theme) => ({
  initialScreen: {
    justifyContent: 'center',
    backgroundImage: `url('${initialScreenBackground}')`,
    backgroundRepeat: 'no',
    backgroundSize: 'cover'
  }
}));

export default function Search() {

  const [searchResult, setSearchResult] = useState({
    result: null,
    error: null
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.length === 0) {
      setSearchResult([]);
      return;
    }

    const url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${process.env.REACT_APP_APIKEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.Response === 'False') {
          setSearchResult({
            movies: null,
            error: data.Error
          });
        } else {
          setSearchResult({
            movies: data.Search,
            error: null
          });
        }
      })
      .catch(error => {
        console.log(`Failed with ${error}`);
        setSearchResult({
          movies: null,
          error: error
        });
      });
  }, [searchQuery]);

  const appClasses = useAppStyles();
  const classes = useStyles();

  if (searchQuery.length === 0) {
    return (
      <Paper className={`${appClasses.section} ${classes.initialScreen}`}>
        <SearchBox onSearchQueryChange={setSearchQuery} />
      </Paper>
    );
  } else {
    return (
      <Paper className={appClasses.section} >
        <SearchBox onSearchQueryChange={setSearchQuery} />
        <ResultList results={searchResult} />
      </Paper>
    );
  }
}