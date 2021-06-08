import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { composeStories } from '@storybook/testing-react';
import { act } from "react-dom/test-utils";

import * as NominationStories from "./Nomination.stories";
const { Default } = composeStories(NominationStories);

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with Default template", () => {
  act(() => {
    render(<Default />, container);
  });
  expect(container.querySelector("b").textContent).toBe(NominationStories.Default.args.Title);
  expect(container.querySelector("small").textContent).toBe(NominationStories.Default.args.Year);
  expect(container.querySelector("img").src).toBe(NominationStories.Default.args.Poster);
});