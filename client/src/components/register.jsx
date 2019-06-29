import React, { useState } from "react";
import CryptoJS from "crypto-js";
import nanoid from "nanoid";
import { postVault, validateUserHash } from "../services/vaultServices";
import Link from "./common/link";
const { SHA256, AES } = CryptoJS;

const Register = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const userHash = SHA256(userName).toString();
    const { data: alreadyExists } = await validateUserHash(userHash);
    if (alreadyExists) return alert("Vault with username already exists.");

    const vaultKey = SHA256(userName + password).toString();
    const auth = SHA256(vaultKey + password).toString();
    const vault = AES.encrypt(
      JSON.stringify([
        { _id: nanoid(8), title: "Welcome to VaultSafe" },
        { _id: nanoid(8), title: "Your secrets are safe on the cloud!" }
      ]),
      vaultKey
    ).toString();

    const data = {
      userHash,
      auth,
      vault
    };

    try {
      await postVault(data);
      alert("Vault created");
      props.history.push("/login");
    } catch (ex) {
      alert(ex);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input mb"
        placeholder="Username"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        autoFocus
      />

      <input
        type="password"
        className="input mb"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <input className="submit" type="submit" value="Create Vault" />
      <Link href="/register" label="Already have a vault?" />
    </form>
  );
};

export default Register;
