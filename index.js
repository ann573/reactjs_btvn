import express from "express";
import fetch from "node-fetch"; 

const app = express();

const products = [
  { id: 1, title: "Product 1", price: 1000 },
  { id: 2, title: "Product 2", price: 2000 },
  { id: 3, title: "Product 3", price: 3000 },
  { id: 4, title: "Product 4", price: 4000 },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req,res) =>{
  const id = req.params.id;
  const findProduct = products.find(item => item.id == id);
  if (findProduct) {
    res.json(findProduct)
  } else {
    res.json({})
  }
})

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((item) => item.id === id);

  if (index !== -1) {
    products[index] = { ...products[index], ...req.body }; 
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.post("/products", (req, res) => {
  const newProduct = {"id": products.length + 1, ...req.body};  
  products.push(newProduct); 
  res.status(201).json(newProduct); 
});

app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);
  
  if (index === -1) {
    return res.status(404).send("Product not found");
  }

  products.splice(index, 1);  
  res.status(200).send(`Product with ID ${productId} deleted`);
});

app.post("/simulate-post", async (req, res) => {
  const response = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(products),
  });
  const data =  await response.json();
  res.json(data);
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(8888, () => {
  console.log("Server is running on port 8888");
});
