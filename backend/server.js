const express = require("express");
const product = require("./data/ProductData");
const ProductRouter = require("./route/product.routes");
const cors = require("cors");
const dotenv = require("dotenv");
const connectBD = require("./config/db");
const {
  notFound,
  errorHandller,
} = require("./middleware/productError.middleware");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

dotenv.config();
connectBD();
app.get("/", (req, res) => {
  res.status(200).json({
    status: "API is running",
  });
});
app.use("/api/product/", ProductRouter);
app.use(notFound);
app.use(errorHandller);

app.listen(PORT, () => {
  console.log(`the is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
