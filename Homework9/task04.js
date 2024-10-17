class ShoppingCart {
  #items = [];

  addItem(name, price, quantity) {
    const item = {
      name,
      price,
      quantity,
    };
    this.#items.push(item);
  }

  deleteItem(name, quantity) {
    const itemIndex = this.#items.findIndex((item) => item.name === name);

    itemIndex !== -1
      ? quantity >= this.#items[itemIndex].quantity
        ? this.#items.splice(itemIndex, 1)
        : (this.#items[itemIndex].quantity -= quantity)
      : console.log(`${name} not found in the cart`);
  }

  updateItem(name, price, quantity) {
    const item = this.#items.find((item) => item.name === name);
    if (item) {
      item.price = price;
      item.quantity = quantity;
    } else {
      console.log(`${name} not found in the cart`);
    }
  }

  calculateTotal() {
    let totalPrice = 0;
    this.#items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    console.log(`Total Price: ${totalPrice} ₾`);
    return totalPrice;
  }
}

const cart = new ShoppingCart();
cart.addItem("Apple", 1, 3);
cart.addItem("Banana", 0.5, 6);
cart.updateItem("Apple", 1, 4);
cart.calculateTotal();
cart.deleteItem("Banana", 2);
cart.calculateTotal();
