import React, { useState } from "react";
import { getVault } from "../services/vaultServices";
import CryptoJS from "crypto-js";
import Link from "./common/link";
const { SHA256 } = CryptoJS;

const Login = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const vaultKey = SHA256(userName + password).toString();
    const auth = SHA256(vaultKey + password).toString();

    try {
      const { data: vaultAccount } = await getVault(auth);
      const { vault } = vaultAccount;

      saveVault({ auth, vaultKey, vault });

      window.location.replace("/vault");
    } catch (ex) {
      alert("Vault not found");
    }
  };

  const saveVault = vault => {
    vault = JSON.stringify(vault);

    localStorage.setItem("currentVault", vault);
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

      <input className="submit" type="submit" value="Open Vault" />

      <Link href="/register" label="Don't have a vault yet?" />
    </form>
  );
};

export default Login;
