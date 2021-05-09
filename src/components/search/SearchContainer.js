import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';
import { useAppContext } from '../../AppContext';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
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

export default function SearchContainer() {

  const [searchResult, setSearchResult] = useState({
    result: null,
    error: null
  });
  const [searchQuery, setSearchQuery] = useState('');

  const appContext = useAppContext();

  useEffect(() => {
    if (searchQuery.length <= 0) {
      setSearchResult([]);
      return;
    }

    const apiKey = 'b27bd681';
    const url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(`Found: ${JSON.stringify(data)}`);
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
      <Paper className={[appClasses.section, classes.initialScreen]}>
        <SearchBox onSearchQueryChange={setSearchQuery} />
      </Paper>
    );
  } else {
    return (
      <Paper className={appClasses.section} >
        <SearchBox onSearchQueryChange={setSearchQuery} />
        <SearchResultList results={searchResult} nominations={appContext.nominations} />
      </Paper>
    );
  }
}