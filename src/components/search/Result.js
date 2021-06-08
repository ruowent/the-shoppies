import React from 'react';
import { useAppContext } from '../../AppContext';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography
} from '@material-ui/core';
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
    justifyContent: 'flex-end',
    alignItems: 'center',
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Result({ Title, Year, Poster, imdbID, isNominated }) {

  const [openAlert, setOpenAlert] = React.useState(false);
  const appContext = useAppContext();

  const closeAlertHandler = () => {
    setOpenAlert(false);
  };

  const deleteHandler = () => {
    appContext.onDeleteNomination({ Title, Year, Poster, imdbID });
  };

  const nominateHandler = () => {
    if (appContext.nominations.length === appContext.maxNominationCount) {
      setOpenAlert(true);
    } else {
      appContext.onAddNomination({ Title, Year, Poster, imdbID });
    }
  };

  const image = Poster === 'N/A' ? defaultMovieImage : Poster;

  const classes = useStyles();

  let control;
  if (isNominated) {
    control = (
      <div className={classes.controls}>
        <Typography>You nominated this movie already.</Typography>
        <Button color='secondary' onClick={deleteHandler} className={classes.button}> Delete?</Button>
      </div>
    );
  } else {
    control = (
      <div className={classes.controls}>
        <Button className={classes.button} variant='contained' color="primary" onClick={nominateHandler}>Nominate</Button>
        <Dialog
          open={openAlert}
          TransitionComponent={Transition}
          keepMounted
          onClose={closeAlertHandler}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{`You can only nominate up to ${appContext.maxNominationCount} movies!`}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You've hit the limit of {appContext.maxNominationCount} nominations. To nominated other movies, delete one or more from the nominated list.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeAlertHandler} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

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
        {control}
      </div>
    </Card >
  )
};