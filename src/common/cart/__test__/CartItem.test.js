import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "../CartItem";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const productCart = {
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
};

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const MockCartItem = ({ productCart }) => (
  <Provider store={mockStore({})}>
    <CartItem product={productCart} />
  </Provider>
);

describe("CartItem.js", () => {
  it("renders product information", () => {
    render(<MockCartItem productCart={productCart} />);

    const inputElement = screen.getByTestId("input-id");
    expect(screen.getByText(productCart.product.name)).toBeInTheDocument();
    expect(screen.getByText(productCart.option)).toBeInTheDocument();
    expect(screen.getByText(productCart.totalPrice)).toBeInTheDocument();
    expect(inputElement.value).toBe("1");
    expect(screen.getByTestId("product-thumbnail-id")).toHaveStyle(
      `background-image: url(${productCart.product.thumbnail})`
    );
  });

  describe("User chooses to change the quantity of a product", () => {
    it("Increase the quantity of a product by button", async () => {
      render(<MockCartItem productCart={productCart} />);
      localStorage["cart"] = JSON.stringify([{ ...productCart }]);
      await fireEvent.click(screen.getByTestId("increase-btn"));

      const newProductCart = JSON.parse(localStorage.getItem("cart"))[0];
      expect(newProductCart.quantity).toEqual(2);
      expect(newProductCart.totalPrice).toEqual("66.66 £");
    });

    it("Decrease the quantity of a product by button", async () => {
      render(<MockCartItem productCart={productCart} />);
      localStorage["cart"] = JSON.stringify([{ ...productCart }]);
      await fireEvent.click(screen.getByTestId("decrease-btn"));

      const newProductCart = JSON.parse(localStorage.getItem("cart"))[0];
      expect(newProductCart.quantity).toEqual(1);
      expect(newProductCart.totalPrice).toEqual("33.33 £");
    });

    it("Change the quantity of a product by input", async () => {
      render(<MockCartItem productCart={productCart} />);
      localStorage["cart"] = JSON.stringify([{ ...productCart }]);
      await fireEvent.change(screen.getByTestId("input-id"), {
        target: { value: "3" },
      });

      const newProductCart = JSON.parse(localStorage.getItem("cart"))[0];
      expect(newProductCart.quantity).toEqual(3);
      expect(newProductCart.totalPrice).toEqual("99.99 £");
    });
  });

  describe("User choose to remove the product from cart", () => {
    it("User onclick the remove button", async () => {
      render(<MockCartItem productCart={productCart} />);
      await fireEvent.click(screen.getByTestId("remove-button-id"));

      expect(localStorage.getItem("cart")).toEqual("[]");
    });
  });
});
