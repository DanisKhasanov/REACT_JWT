import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import "./LoginForm.css"; // Подключаем файл стилей

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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

      <input
        className="login-input"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button className="login-button" onClick={() => store.login(email, password)}>
        Логин
      </button>
      <button className="registration-button" onClick={() => store.registration(email, password)}>
        Регистрация
      </button>
    </div>
  );
};

export default LoginForm;
