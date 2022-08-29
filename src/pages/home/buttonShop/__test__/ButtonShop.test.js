import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router-dom";
import ButtonShop from "../ButtonShop";

const MockButtonShop = () => (
  <BrowserRouter>
    <ButtonShop />
  </BrowserRouter>
);

describe("ButtonShop", () => {
  it("renders without crashing", () => {
    render(<MockButtonShop />);
  });
  it("should render link to store page", () => {
    render(<MockButtonShop />);
    expect(screen.getByRole("link").textContent).toContain("STORROR STORE");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/parkour-store");
  });
});
