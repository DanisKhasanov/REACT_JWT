import React, { FC, useContext, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import ErrorModal from "./components/ErrorMassage";

const App: FC = () => {
  const { store } = useContext(Context);

  const closeModal = () => {
    store.setError(null); // Закрываем модальное окно и очищаем ошибку
  };

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

  return (
    <div className="app-container">
      {store.error && <ErrorModal message={store.error} onClose={closeModal} />}

      {!store.isAuth ? (
        <LoginForm />
      ) : (
        <div className="app-container-check">
          <h1>Пользователь авторизован</h1>
          {store.user && <p>Email: {store.user.email}</p>}
          <button className="logout-button" onClick={() => store.logout()}>
            Exit
          </button>
        </div>
      )}
    </div>
  );
};

export default observer(App);
