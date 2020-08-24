const express = require("express");
const mongoose = require("mongoose");
const { SYS, DB, ERROR } = require("./systemLog");

const app = express();

// ROUTE'S
const allFetchRoutes = require("./routes/alFetch");

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api", allFetchRoutes);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://hwndrer:Mike123a@cluster0.sy6pf.mongodb.net/Cluster0?retryWrites=true&w=majority",
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
