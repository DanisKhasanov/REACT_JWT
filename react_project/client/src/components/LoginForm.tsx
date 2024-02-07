// LoginForm.tsx
import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import "./LoginForm.css";
import { observer } from "mobx-react-lite";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"; // Импортируем иконки

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isTypingPassword, setIsTypingPassword] = useState<boolean>(false); // Состояние для отслеживания ввода пароля
  const { store } = useContext(Context);

  const getPasswordStrength = (password: string): number => {
    // Просто для примера, можно заменить на более сложный алгоритм
    return Math.min(password.length, 6) / 6 * 100; // Приводим к процентам от 0 до 100
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
            setIsTypingPassword(true); // Устанавливаем флаг в true при вводе пароля
          }}
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        {/* Показываем ползунок силы пароля только при вводе пароля */}
        {isTypingPassword && (
          <div className="password-strength-meter">
            <div
              className={`password-strength-indicator ${passwordClass}`}
              style={{ width: `${passwordStrength}%` }} // Изменяем ширину в зависимости от силы пароля
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
