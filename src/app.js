const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
