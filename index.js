const express = require("express");
const app = express();
const log = require("debug")("app:Startup");
const config = require("config");

// Middlewares
const morgan = require("morgan");
const cors = require("cors");
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

// Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Dwyte:rjw2N6pRXkFvbZsC@cs21-2evw6.mongodb.net/test?retryWrites=true&w=majority" ||
      config.get("dbURL"),
    {
      useNewUrlParser: true
    }
  )
  .then(() => log("Connected to MongoDB"))
  .catch(e => log(e));

const vault = require("./routes/vaults");
app.use("/api/vaults", vault)

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });

  console.log("_");
}

const port = process.env.PORT || 4200;
app.listen(port, () => log(`Connected to port ${port}`));
