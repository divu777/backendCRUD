let id = 0;

class Product {
  constructor(name, description, price) {
    this.id = ++id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

Product.products = [];

module.exports = Product;
