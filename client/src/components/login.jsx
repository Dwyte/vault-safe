import React, { useState } from "react";
import { getVault } from "../services/vaultServices";
import Link from "./common/link";
import UserForm from "./common/userForm";
import pbkdf2 from "pbkdf2";

const PBKDF2 = (data, salt = "$2b$31$ZVHSM/d7RoeuOkx3IQc0iu") => {
  const hash = pbkdf2.pbkdf2Sync(data, salt, 5000, 64, "sha512");

  return hash.toString("hex");
};

const Login = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitUserForm = async e => {
    e.preventDefault();

    const vaultKey = PBKDF2(userName + password).toString();
    const auth = PBKDF2(vaultKey + password).toString();

    try {
      const {
        data: { token, vault }
      } = await getVault(auth);

      saveVault({ auth, vaultKey, vault });
      localStorage.setItem("token", token);

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
