const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { SYS, DB, ERROR } = require("./systemLog");

require("dotenv").config();

const app = express();

// ROUTE'S
const allFetchRoutes = require("./routes/alFetch");

const PORT = process.env.PORT || 4000;

app.use(express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/api", allFetchRoutes);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sy6pf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
      () => {
        DB("Database started");
      }
    );
    app.listen(PORT, () => {
      SYS("Server started on port " + PORT);
    });
  } catch (error) {
    ERROR(error);
  }
}

start();
