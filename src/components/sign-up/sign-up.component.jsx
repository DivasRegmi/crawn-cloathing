import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

function SignUP() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      createUserProfileDocument(user, {displayName});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <h1>I already have an account.</h1>
      <span>Sign in with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          label="User name"
          type="text"
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <FormInput
          name="confirmPassword"
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <CustomButton type="submit" >Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUP;
