import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("Test Sample", () => {
    render(<App />);
    expect(screen.getByText("Hello World!!")).toBeInTheDocument();
  });
});
