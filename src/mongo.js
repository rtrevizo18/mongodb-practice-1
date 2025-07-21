import dotenv from "dotenv";
dotenv.config();

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PSWD;

const PRODUCTS_DATABASE_NAME = "productsDB";
const PRODUCTS_COLLECTION_NAME = "products";

import { MongoClient } from "mongodb";

const url = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@placescluster0.ydq4ewd.mongodb.net/?retryWrites=true&w=majority&appName=PlacesCluster0`;

export const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const newProduct = {
    name,
    price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(PRODUCTS_DATABASE_NAME);
    const result = await db
      .collection(PRODUCTS_COLLECTION_NAME)
      .insertOne(newProduct);
    res.json(newProduct);
  } catch (err) {
    return res.status(500).json({ message: "Could not store data." });
  } finally {
    await client.close();
  }
};

export const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(PRODUCTS_DATABASE_NAME);
    const result = await db
      .collection(PRODUCTS_COLLECTION_NAME)
      .find({})
      .toArray();
    res.json(result);
  } catch (err) {
    return res.status(500).json({ message: "Could not fetch data." });
  } finally {
    await client.close();
  }
};
