import React, { useEffect, useState } from "react";
import facade from "../utils/loginFacade";

export default function LoggedIn({ setLoggedIn, displayName, logOut }) {
  const logout = () => {
    facade.logout();
    logOut();
  };

  return (
    <div>
      <div className="loggedin">
        <div className="username-header">
          <p>{displayName}</p>
        </div>
        <div className="button-header">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
