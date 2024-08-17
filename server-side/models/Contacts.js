import mongoose from "mongoose";

//creating a schema
const contactsSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
});

//creating a model
const contactsModel = new mongoose.model("users", contactsSchema);

export default contactsModel;
