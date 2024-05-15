const Product = require("../models/Product");

exports.getAllProducts = (req, res) => {
  res.status(200).json(Product.products);
};

exports.createProduct = (req, res) => {
  const { name, description, price } = req.body;
  const product = new Product(name, description, price);
  Product.products.push(product);
  res.status(201).json(product);
};

exports.getProductById = (req, res) => {
  const product = Product.products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
};

exports.updateProduct = (req, res) => {
  const { name, description, price } = req.body;
  const product = Product.products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  product.name = name || product.name;
  product.description = description || product.description;
  product.price = price || product.price;
  res.status(200).json(product);
};

exports.deleteProduct = (req, res) => {
  const index = Product.products.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  Product.products.splice(index, 1);
  res.status(204).json();
};
