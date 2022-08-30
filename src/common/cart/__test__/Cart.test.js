import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
import _ from "lodash";
import { PRODUCTS_CART } from "../../../helper/sampleData";

const mockStore = configureMockStore([]);
const store = mockStore({
  cart: { ..._.mapKeys(PRODUCTS_CART, "id") },
});

const MockCart = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  </Provider>
);

describe("Cart.js", () => {
  it("render elements in cart cpn", () => {
    render(<MockCart />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
