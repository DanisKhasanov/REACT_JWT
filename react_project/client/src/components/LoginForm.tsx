// LoginForm.tsx
import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import "./LoginForm.css";
import { observer } from "mobx-react-lite";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa"; // Импортируем иконки

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { store } = useContext(Context);

  return (
    <div className="login-form-container">
      <input
        className="login-input"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />

      <div className="password-input-container">
        <input
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <div
          className="eye-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </div>
      </div>

      <button
        className="login-button"
        onClick={() => store.login(email, password)}
      >
        Войти
      </button>
      <button
        className="registration-button"
        onClick={() => store.registration(email, password)}
      >
        Регистрация
      </button>
    </div>
  );
};

export default observer(LoginForm);
