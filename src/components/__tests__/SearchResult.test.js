import React from "react";

import { render, cleanup } from "@testing-library/react";

import Result from "../Search/Result";

afterEach(cleanup);


it("renders without crashing", () => {
  render(<Result />);
});

it("renders ")