import React from "react";

import Movie from "./Movie";

export default function Results(props) {
  const { results, setNominationList } = props;
  console.log('results = ', results);
  return results.map(movie => {
    return <Movie key={movie.imdbID} {...movie} setNominationList={setNominationList} />;
  });
}

