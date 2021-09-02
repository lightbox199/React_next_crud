import { MongoClient } from "mongodb";
import * as mongoose from "mongoose";

export default async function database(req, res, next) {
  mongoose.connect("mongodb://localhost:27017/crud", (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfully Connected!");
    }
  });
}
