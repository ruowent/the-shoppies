import React from 'react';
import { useAppContext } from '../../AppContext';
import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import defaultMovieImage from '../img/defaultMovieImage.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 20
  },
  details: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  button: {
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem'
  }
}));

export default function Result({ Title, Year, Poster, imdbID }) {

  const appContext = useAppContext();
  const deleteNomination = () => {
    appContext.onDeleteNomination({ Title, Year, Poster, imdbID });
  };

  const image = Poster === 'N/A' ? defaultMovieImage : Poster;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={image}
        title={Title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {Year}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button className={classes.button} color="secondary" onClick={deleteNomination}>Delete</Button>
        </div>
      </div>
    </Card>
  )
};
