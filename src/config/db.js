import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("db conectada");
  } catch (error) {
    console.error("la conexion fue rechazada", error);
  }
};