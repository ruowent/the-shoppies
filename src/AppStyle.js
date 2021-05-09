import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles((theme) => ({
  section: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
  sectionContent: {
    marginTop: theme.spacing(2),
    flex: 1,
    overflow: 'auto'
  },
  sectionContentEmpty: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
