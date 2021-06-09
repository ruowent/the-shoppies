import React from 'react';

import Result from './Result';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import { useAppStyles } from '../../AppStyle';
import SentimentVeryDissatisfiedSharpIcon from '@material-ui/icons/SentimentVeryDissatisfiedSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    flex: 1,
    overflow: 'auto'
  },
  noResult: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    color: 'rgba(0, 0, 0, 0.26)'
  },
  noResultIcon: {
    fontSize: 40,
    marginBottom: theme.spacing(1)
  }
}));

export default function ResultList({ results, nominations = [] }) {

  const isNominated = (movie) => {
    return nominations
      .map(_ => _.imdbID)
      .includes(movie.imdbID);
  };

  const classes = useStyles();
  const appStyles = useAppStyles();

  if (results.error !== null) {
    return (
      <div className={classes.noResult}>
        <SentimentVeryDissatisfiedSharpIcon className={classes.noResultIcon} />
        <Typography variant='subtitle1'>{results.error}</Typography>
      </div>
    );
  } else {
    return (
      <div className={appStyles.sectionContent}>
        {
          results.movies.map((movie, idx) => {
            return <Result key={idx} {...movie} isNominated={isNominated(movie)} />;
          })
        }
      </div>
    )
  }
}