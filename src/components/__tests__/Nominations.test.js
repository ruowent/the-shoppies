// integration test

import React from "react";

import { render, cleanup } from "@testing-library/react";

import ResultHeader from "../Nominations/ResultHeader";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<ResultHeader />);
});