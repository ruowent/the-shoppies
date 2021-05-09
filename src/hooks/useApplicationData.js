import { useState } from 'react';

export default function useApplicationData() {
  const [state, setState] = useState({
    nominationList: []
  });

  const { nominationList } = state;
  const setNominationList = objList => {
    setState(prev => {
      const prevList = [...prev.nominationList];
      const index = prevList.indexOf(objList);

      if (index < 0) {
        // add nomination
        prevList.push(objList);
      } else {
        // remove nomination
        prevList.splice(index, 1);
      }
      return { ...prev, nominationList: prevList };
    });
  };

  return { state, setNominationList }
}