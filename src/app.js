import express from "express";
import bodyParser from "body-parser";
// import { createProduct, getProducts } from "./mongo.js";
import { createProduct, getProducts } from "./mongoose.js";

const app = express();

app.use(bodyParser.json());

app.post("/products", createProduct);

app.get("/products", getProducts);

app.listen(5001);
