import React from "react";

import { render, cleanup } from "@testing-library/react";

import ResultHeader from "../Nominations/ResultHeader";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<ResultHeader />);
});

it("renders 'You've made 1 out of 5 nominations!' when nomination list contains 1 movie", () => {
  const { getByText } = render(<ResultHeader nominationCount={1} maxNominationCount={5} />);
  expect(getByText("You've made 1 out of 5 nominations!")).toBeInTheDocument();
})

it("renders 'You've made all 5 nominations!!!' when nomination list contains 5 movies", () => {
  const { getByText } = render(<ResultHeader nominationCount={5} maxNominationCount={5} />);
  expect(getByText("You've made all 5 nominations!!!")).toBeInTheDocument();
})