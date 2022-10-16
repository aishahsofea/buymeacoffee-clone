import { render, screen } from "@testing-library/react";
import React from "react";

import Home from "../../pages";
import { renderWithContext } from "../test-utils";

describe("Home page", () => {
  it("should render the home page", () => {
    renderWithContext(<Home />);
    const startYourPageButton = screen.getByText("Start your page");
    expect(startYourPageButton).toBeInTheDocument();
  });
});
