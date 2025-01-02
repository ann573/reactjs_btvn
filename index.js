import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.js";

// http://127.0.0.1:8888
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Connect database successfully");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Lấy dữ liệu thành công",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }
    const result = await Product.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    if (!req.body.title || !req.body.price)
      return res.status(400).json({ message: "Some field is missed" });
    const result = await Product.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    const result = await Product.findByIdAndDelete(req.params.id);

    if (result === null) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.patch("/products/:id", async (req, res) => {
  try {
    const result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      timestamps: true,
    });
    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.listen(8888, () => {
  console.log("Server is running on port 8888");
});
