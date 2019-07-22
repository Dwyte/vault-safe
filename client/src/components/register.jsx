import React, { useState } from "react";
import CryptoJS from "crypto-js";
import nanoid from "nanoid";
import { postVault, validateUserHash } from "../services/vaultServices";
import Link from "./common/link";
import pbkdf2 from "pbkdf2";
import UserForm from "./common/userForm";
const { AES } = CryptoJS;

const PBKDF2 = (data, salt = "$2b$31$ZVHSM/d7RoeuOkx3IQc0iu") => {
  const hash = pbkdf2.pbkdf2Sync(data, salt, 5000, 64, "sha512");

  return hash.toString('hex');
};

const Register = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitUserForm = async e => {
    e.preventDefault();

    const userHash = PBKDF2(userName).toString();
    const { data: alreadyExists } = await validateUserHash(userHash);
    if (alreadyExists) return alert("Vault with username already exists.");

    const vaultKey = PBKDF2(userName + password).toString();
    const auth = PBKDF2(vaultKey + password).toString();

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
    <React.Fragment>
      <UserForm
        submitUserForm={submitUserForm}
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        submitLabel="Create Vault"
      />
      <Link href="/login" label="Already have a vault?" />
    </React.Fragment>
  );
};

export default Register;
