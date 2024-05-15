const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");
const authMiddleware = require("../middleware/auth.js");

router.get("/", productController.getAllProducts);
router.post("/", authMiddleware, productController.createProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", authMiddleware, productController.updateProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
