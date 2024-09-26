const shoppingCart = {
  items: [],

  addItem(item, price, quantity) {
    this.items.push({ item, price, quantity });
  },

  removeItem(itemName) {
    this.items = this.items.filter(item => item.item !== itemName);
  },

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
};

shoppingCart.addItem("Apple", 3.5, 2);
shoppingCart.addItem("Banana", 1, 5);
shoppingCart.removeItem("Apple");
const totalPrice = shoppingCart.calculateTotal();

console.log(totalPrice);
console.log(shoppingCart.items);
