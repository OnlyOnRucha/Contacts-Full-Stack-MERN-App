import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactsModel from "./models/Contacts";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Contacts");

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
