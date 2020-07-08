import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h1>I already have an account.</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="button">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIN>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
