import Result from './Result';
import { Typography } from '@material-ui/core';
import { useAppStyles } from '../../AppStyle';

export default function ResultList({ nominations }) {
  const appStyles = useAppStyles();

  if (nominations.length === 0) {
    return (
      <Typography variant="h6" component="h6">
        No nomination added yet.
      </Typography>
    )
  } else {
    return (
      <div className={appStyles.sectionContent}>
        {
          nominations.map((nomination, idx) => (
            <Result key={idx} {...nomination} />
          ))
        }
      </div>
    )
  }
}