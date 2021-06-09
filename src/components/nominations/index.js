import { useAppContext } from '../../AppContext';

import ResultList from './ResultList';
import ResultHeader from './ResultHeader';

import { makeStyles, Paper, Typography } from '@material-ui/core';
import PlaylistAddSharpIcon from '@material-ui/icons/PlaylistAddSharp';
import { useAppStyles } from '../../AppStyle';

const useStyles = makeStyles((theme) => ({
  emptyIcon: {
    fontSize: 70,
    marginBottom: theme.spacing(1)
  }
}));

export default function Nominations() {
  const appContext = useAppContext();

  const appClasses = useAppStyles();
  const classes = useStyles();

  if (appContext.nominations.length === 0) {
    return (<Paper className={`${appClasses.section} ${appClasses.sectionContentEmpty}`}>
      <PlaylistAddSharpIcon color='disabled' className={classes.emptyIcon} />
      <Typography variant='h6'>You haven't added any nomination yet.</Typography>
      <Typography variant='subtitle1'>Search on the left section and nominate your favorite {appContext.maxNominationCount} movies.</Typography>
    </Paper>);
  } else {
    return (
      <Paper className={appClasses.section}>
        <ResultHeader
          nominationCount={appContext.nominations.length}
          maxNominationCount={appContext.maxNominationCount} />
        <ResultList nominations={appContext.nominations} />
      </Paper>
    )
  }
}