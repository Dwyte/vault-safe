import React from "react";

const UserForm = ({
  submitUserForm,
  userName,
  setUserName,
  password,
  setPassword,
  submitLabel
}) => {
  return (
    <React.Fragment>
      <form onSubmit={submitUserForm}>
        <input
          type="text"
          className="input mb"
          placeholder="Username"
          value={userName}
          minLength="4"
          onChange={e => setUserName(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          className="input mb"
          placeholder="Password"
          minLength="4"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <input className="submit" type="submit" value={submitLabel} />
      </form>
    </React.Fragment>
  );
};

export default UserForm;
