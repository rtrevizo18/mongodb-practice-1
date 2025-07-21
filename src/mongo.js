import dotenv from "dotenv";
dotenv.config();

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PSWD;

import MongoClient from "mongodb";

const url = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@placescluster0.ydq4ewd.mongodb.net/?retryWrites=true&w=majority&appName=PlacesCluster0`;

const createProduct = async (req, res, next) => {};

const getProducts = async (req, res, next) => {};

export default { createProduct, getProducts };
