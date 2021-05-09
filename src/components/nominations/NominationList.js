import Nomination from './Nomination';
import { Typography } from '@material-ui/core';
import { useAppStyles } from '../../AppStyle';

export default function NominationList({ nominations }) {
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
            <Nomination key={idx} {...nomination} />
          ))
        }
      </div>
    )
  }
}