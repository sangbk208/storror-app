const newTotalPrice = (totalPrice) => {
  totalPrice = totalPrice.replace(" ", "").replace("£", "").replace(",", ".");
  return Math.round(Number(totalPrice) * 100) / 100;
};

export const currentTotalPrice = (cartProducts) => {
  const array = cartProducts.map((item) => {
    return newTotalPrice(item.totalPrice);
  });
  return Math.round(array.reduce((a, b) => a + b, 0) * 100) / 100;
};
