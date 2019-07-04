import React, { useState } from "react";
import { getVault } from "../services/vaultServices";
import CryptoJS from "crypto-js";
import Link from "./common/link";
import UserForm from "./common/userForm";
const { SHA256 } = CryptoJS;

const Login = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitUserForm = async e => {
    e.preventDefault();

    const vaultKey = SHA256(userName + password).toString();
    const auth = SHA256(vaultKey + password).toString();

    try {
      const { data: {token, vault} } = await getVault(auth);

      saveVault({ auth, vaultKey, vault });
      localStorage.setItem('token', token);

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
    <React.Fragment>
      <UserForm 
        submitUserForm={submitUserForm}
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        submitLabel="Open Vault"
      />
       <Link href="/register" label="Don't have a vault yet?" />
    </React.Fragment>
  );
};

export default Login;
