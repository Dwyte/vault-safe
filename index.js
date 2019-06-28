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
  .connect(process.env.MONGODB_URI || config.get("dbURL"), { useNewUrlParser: true })
  .then(() => log("Connected to MongoDB"))
  .catch(e => log(e));

const { Vault, validate } = require("./models/vault");

app.get("/api/vaults/:userHash", async (req, res) => {
  const { userHash } = req.params;
  const vault = await Vault.findOne({ userHash });
  res.send(Boolean(vault));
});

app.get("/api/vaults/get/:auth", async (req, res) => {
  const { auth } = req.params;
  const vault = await Vault.findOne({ auth });

  if (!vault)
    return res.status(404).send("Incorrect credentials, vault not found.");

  res.send(vault);
});

app.post("/api/vaults", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  let vault = new Vault(req.body);
  vault = await vault.save();

  res.status(201).send(vault);
});

app.put("/api/vaults/:auth", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  let vault = await Vault.findOneAndUpdate({ auth: req.params.auth }, req.body);
  if(!vault) return res.status(404).send("Vault not found");
  

  vault = await vault.save();
  res.status(201).send(vault);
});

const port = process.env.PORT || 3000;
app.listen(port, () => log(`Connected to port ${port}`));


