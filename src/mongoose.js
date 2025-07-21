import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import { Product } from "./models/product.js";

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PSWD;

const url = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@placescluster0.ydq4ewd.mongodb.net/productsDB?retryWrites=true&w=majority&appName=PlacesCluster0`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to db");
  })
  .catch(() => {
    console.log("Could not connect");
  });

export const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({
    name,
    price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

export const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();

  res.json(products);
};
