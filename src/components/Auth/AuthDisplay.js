import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../../redux/authSlice";
import classes from "./AuthDisplay.module.css";
import image from "../../assets/rakushki.jpg";

export default function AuthDisplay() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );
  }

  if (localId !== null) {
    navigate("/");
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  return (
    <div className={classes.Auth}>
      <img src={image} alt="Auth" />
      <form onSubmit={onAuthStart}>
        <h1>Sign in</h1>

        {errorOutput}
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>

        <button>Sign in</button>
        <button>Sign up</button>
      </form>
    </div>
  );
}
