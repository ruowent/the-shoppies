import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function ResultHeader({ nominationCount, maxNominationCount }) {

  const classes = useStyles();

  if (nominationCount < maxNominationCount) {
    return (
      <div className={classes.root}>
        <Typography variant='h5'>You've made {nominationCount} out of {maxNominationCount} nominations!</Typography>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Typography variant='h5'>You've made all {maxNominationCount} nominations!!!</Typography>
      </div>
    );
  }
}