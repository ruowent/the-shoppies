import React from "react";
// import { NominationContext } from "../App";
// import classnames from "classnames";(if not used, delete package)

export default function Movie(props) {
  // const [nomination, setNomination] = useState("");
  // const nominationContext = useContext(NominationContext);

  const handleClick = (event) => {
    event.preventDefault();
    console.log('button clicked, props', props.imdbID);
    // setNomination(!nomination);
    // if (nomination) {

    props.setNominationList(props);
  }

  return (
    <article className="movie">
      <img className="movie__poster" src={props.Poster} alt="Movie" />
      <div className="movie__details">
        <div className="movie__title">{props.Title}</div>
        <div className="movie__year">{props.Year}</div>
        <button className="movie__nomination" onClick={handleClick}>Nomination</button>
      </div>
    </article>
  );
}
