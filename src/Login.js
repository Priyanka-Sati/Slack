import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {

    const [ state, dispatch] = useStateValue()

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        })

      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt=""
        />

        <h1>Sign in to Slack a Messaging App</h1>
        <p>Made By Priyanka Sati</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
