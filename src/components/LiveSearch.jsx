import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Results from "./Results";
import Nominations from "./Nominations"
// import { NominationContext } from '../App';

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const URL = `http://www.omdbapi.com/?s=${term}&apikey=b27bd681`;
    axios.get(URL).then(response => {
      if (response.data.Response === "True") {
        setResults([...response.data.Search]);
      } else {
        setResults([]);
      }
      console.log(response.data);
    });
  }, [term])

  return (
    // <NominationContext.Consumer>{
    //   value => {
    //     return (
    <main>
      <SearchBar onSearch={term => setTerm(term)} />
      <Results results={results} setNominationList={props.setNominationList} />
      <Nominations nominationList={props.nominationList} setNominationList={props.setNominationList} />
    </main>
    //     )
    //   }
    // }
    // </NominationContext.Consumer>
  );
}
