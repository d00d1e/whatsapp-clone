import React from "react";
import { Button } from "@material-ui/core";

import { auth, provider } from "../../firebase.config";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

import "./Login.css";

export default function Login() {
  const [{}, dispatch] = useStateValue();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign In to WhatsApp</h1>
        </div>

        <Button onClick={handleSignIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}
