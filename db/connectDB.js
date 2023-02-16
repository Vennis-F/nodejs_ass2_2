const mongoose = require("mongoose");
require("../models/player");

const url = "mongodb://127.0.0.1:27017/worldcup2022";
mongoose.set("strictQuery", false);
const connect = mongoose.connect(url);

connect.then(
  (db) => {
    console.log("DB connection established");
  },
  (err) => {
    console.log("error db: ", err);
  }
);
