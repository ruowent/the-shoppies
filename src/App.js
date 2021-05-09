import React, { useState } from 'react';
import './App.css';
import LiveSearch from './components/LiveSearch';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, setNominationList } = useApplicationData();
  const { nominationList } = state;


  // const initialState = {
  //   nominationList: [],
  //   nominationToggle: function (id) {
  //     const index = this.nominationList.indexOf(id);

  //     if (index < 0) {
  //       // add nomination
  //       this.nominationList.push(id);
  //     } else {
  //       // remove nomination
  //       this.nominationList.splice(index, 1);
  //     }
  //     console.log('this.nominationList', this.nominationList);
  //   }
  // }


  return (
    // <NominationContext.Provider value={initialState}>
    <div className="App">
      <LiveSearch nominationList={nominationList} setNominationList={setNominationList} />
    </div>
    // </NominationContext.Provider>
  );
}

export default App;
