import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Component Test Cases", () => {
  test("should load the contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load the  button inside the contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should load the submit text inside contact component", () => {
    render(<Contact />);

    const SubmitText = screen.getByText("Submit");

    expect(SubmitText).toBeInTheDocument();
  });

  test("should load  placeholdertext name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load input boxes inside contact component ", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).not.toBe(3);
  });
});
