import React, { FC, useContext, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from "./index";
import { observer } from "mobx-react-lite";

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      store.checkAuth(); // Проверяем авторизацию при загрузке компонента
    }
  }, []);

  if (store.isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Проверка авторизации...</h1>
      
      </div>
    );
  }


  // Если пользователь не авторизован, показываем форму входа
  if (!store.isAuth) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Добро пожаловать!</h1>
        <p>Пожалуйста, войдите или зарегистрируйтесь:</p>
        <LoginForm />
      </div>
    );
  }

  // Если пользователь авторизован, показываем информацию и кнопку выхода
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Пользователь авторизован</h1>
      {store.user && <p>Email: {store.user.email}</p>}
      <button onClick={() => store.logout()}>Выйти</button>
    </div>
  );

};

export default observer(App);
