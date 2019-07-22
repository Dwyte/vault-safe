const express = require("express");
const router = express.Router();

const { Vault, validate, generateToken } = require("../models/vault");

const auth = require("../middleware/auth");

router.get("/:userHash", async (req, res) => {
  const { userHash } = req.params;

  const vault = await Vault.findOne({ userHash });

  res.send(Boolean(vault));
});

router.get("/get/:auth", async (req, res) => {
  const { auth } = req.params;
  const _vault = await Vault.findOne({ auth });

  if (!_vault)
    return res.status(404).send("Incorrect credentials, vault not found.");

  const token = generateToken(auth);

  const { vault } = _vault;

  res.send({ token, vault });
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  let vault = new Vault(req.body);
  vault = await vault.save();

  res.status(201).send(vault);
});

router.put("/", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  let vault = await Vault.findOneAndUpdate({ auth: req.auth }, req.body);
  if (!vault) return res.status(404).send("Vault not found");

  vault = await vault.save();
  res.status(201).send(vault);
});

router.delete("/", [auth], async (req, res) => {
  const { auth } = req;

  let vault = await Vault.findOneAndDelete({ auth });
  if (!vault) return res.status(404).send("Vault not found");

  res.status(200).send(vault);
});

module.exports = router;
