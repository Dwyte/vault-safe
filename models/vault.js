const mongoose = require("mongoose");
const Joi = require("joi");

const vaultSchema = mongoose.Schema({
  userHash: {
    type: String,
    minLength: 64,
    maxLength: 64,
    require: true
  },
  auth: {
    type: String,
    minLength: 64,
    maxLength: 64,
    require: true
  },
  vault: {
    type: String,
    minLength: 44,
    maxLength: 44,
    require: true
  }
});

const Vault = mongoose.model("Vault", vaultSchema);

const validate = vault => {
  const schema = {
    userHash: Joi.string()
      .length(64)
      .required(),
    auth: Joi.string()
      .length(64)
      .required(),
    vault: Joi.string()
      .length(44)
      .required()
  };

  return Joi.validate(vault, schema);
};

module.exports = {
  Vault,
  validate
};
