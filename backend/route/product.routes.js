const express = require("express");
const asyncHandler = require("express-async-handler");
const ProductData = require("../data/ProductData");
const Product = require("../model/Product.model");
const Route = express.Router();

Route.get("/", (req, res) => {
  res.send(JSON.stringify(ProductData));
});

Route.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const foundProduct = await ProductData.find((p) => {
      return p.id === Number(req.params.id);
    });
    if (foundProduct) {
      res.send(foundProduct);
    } else {
      res.status(404).json({
        err: `${res.statusCode}`,
      });
    }
  })
);

module.exports = Route;
