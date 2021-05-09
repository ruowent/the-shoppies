import React from "react";
import Movie from "./Movie";
import './Nominations.css';

export default function Nominations(props) {
  const { nominationList, setNominationList } = props;
  console.log('nominationList on test page = ', nominationList);
  return nominationList.map(nomination => {
    return (
      <div className="nominations">
        <h2>Movie Nominations</h2>
        <Movie key={nomination.imdbID} {...nomination} setNominationList={setNominationList} />;
      </div>
    )
  });
}
