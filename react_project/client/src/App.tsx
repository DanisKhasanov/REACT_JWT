import React, { FC } from "react";
import LoginForm from "./components/LoginForm";
 
const App: FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Добро пожаловать в мой сайт</h1>
      <p>Пожалуйста, войдите или зарегистрируйтесь:</p>
      <LoginForm />
    </div>
  );
};

export default App;
