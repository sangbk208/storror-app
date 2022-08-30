import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CartContainer from "../CartContainer";
import { BrowserRouter } from "react-router-dom";
import reducers from "../../../redux/reducers";
import { createStore } from "redux";

const products = [
  {
    product: {
      id: 2,
      name: "AW20 ODYSSEY POSTER T-SHIRT (BLACK)",
      price: "33,33 £",
      type: "t-shirts",
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0695/8195/products/Red_back_800x800_crop_center.jpg?v=1602151257",
    },
    option: "Small",
    quantity: 1,
    idProduct: 2,
    totalPrice: "33.33 £",
    id: "cf0b28c-ead2-dfd-44c1-15ec5bab53c",
  },
  {
    product: {
      id: 3,
      name: "AW20 ODYSSEY ICON T-SHIRT (WHITE)",
      price: "33,33 £",
      type: "t-shirts",
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0695/8195/products/icon_back_800x800_crop_center.jpg?v=1602151647",
    },
    option: "Small",
    quantity: 1,
    idProduct: 3,
    totalPrice: "33.33 £",
    id: "6db77b-b78-510d-44fd-53c4ac143757",
  },
];

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const MockCartContainer = ({ products }) => (
  <Provider store={mockStore({})}>
    <BrowserRouter>
      <CartContainer cartProducts={products} />
    </BrowserRouter>
  </Provider>
);

describe("CartContainer.js", () => {
  describe("Render CartContainer CPN information, products information", () => {
    it("renders CartContainer CPN and check products in cart", () => {
      render(<MockCartContainer products={products} />);

      expect(
        screen.getByTestId("cart-product-list-id").childElementCount
      ).toEqual(2);
      expect(screen.getByText("66.66 £")).toBeInTheDocument();
      expect(screen.getByRole("link").textContent).toContain("Begin checkout");
      expect(screen.getByRole("link")).toHaveAttribute("href", "/checkout");
    });
  });
});
