// LoginForm.tsx
import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import "./LoginForm.css";
import { observer } from "mobx-react-lite";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isTypingPassword, setIsTypingPassword] = useState<boolean>(false);
  const { store } = useContext(Context);

  const getPasswordStrength = (password: string): number => {
    return (Math.min(password.length, 6) / 6) * 100;
  };

  const passwordStrength = getPasswordStrength(password);

  let passwordClass = "password-weak";
  if (password.length >= 3 && password.length <= 4) {
    passwordClass = "password-medium";
  } else if (password.length >= 5 && password.length <= 6) {
    passwordClass = "password-strong";
  }

  return (
    <div className="login-form-container">
      <h2>Hi, my friend </h2>
      <input
        className="login-input"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />

      <div className="password-container">
        <input
          className="login-input"
          onChange={(e) => {
            setPassword(e.target.value);
            setIsTypingPassword(true);
          }}
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        {}
        {isTypingPassword && (
          <div className="password-strength-meter">
            <div
              className={`password-strength-indicator ${passwordClass}`}
              style={{ width: `${passwordStrength}%` }}
            />
          </div>
        )}
      </div>

      <div className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
      </div>

      <button
        className="login-button"
        onClick={() => store.login(email, password)}
      >
        Login
      </button>
      <button
        className="registration-button"
        onClick={() => store.registration(email, password)}
      >
        Registration
      </button>
    </div>
  );
};

export default observer(LoginForm);
