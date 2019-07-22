const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const vaultSchema = mongoose.Schema({
  userHash: {
    type: String
  },
  auth: {
    type: String,
    require: true
  },
  vault: {
    type: String,
    minLength: 44,
    require: true
  }
});

const Vault = mongoose.model("Vault", vaultSchema);

const generateToken = auth => {
  return jwt.sign({ auth }, config.get("jwtKey"));
};

const validate = vault => {
  const schema = {
    userHash: Joi.string(),
    auth: Joi.string().required(),
    vault: Joi.string()
      .min(44)
      .required()
  };

  return Joi.validate(vault, schema);
};

module.exports = {
  Vault,
  validate,
  generateToken
};
