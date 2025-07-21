import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.post("/products");

app.get("/products");

app.listen(5001);
