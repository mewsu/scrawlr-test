import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Upvote from "./Upvote";

test("changes style when clicked", () => {
  render(<Upvote isSelected={false} id={1} />);
  const button = screen.getByRole("button", { name: "upvote" });

  expect(button).toHaveStyle("background-color: #F4F6F8; color: #343A40");

  fireEvent.click(button);

  expect(button).toHaveStyle("background-color: #E5E8FD; color: #253CF2");
});
