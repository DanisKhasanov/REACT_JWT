/**"роутер" (или маршрутизатор) — это механизм веб-приложении, который отвечает за 
  обработку запросов к разным маршрутам и вызов соответствующих функций или компонентов для 
  отображения нужной информации. 
  
 Роутинг позволяет определить, как приложение должно обрабатывать запросы пользователя 
 в зависимости от URL.*/

const Router = require("express").Router;
const UserConrtoller = require("../controllers/user_controller");
const router = new Router();
const {body} = require("express-validator");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  UserConrtoller.registration
);
router.post("/login", UserConrtoller.login);
router.post("/logout", UserConrtoller.logout);
router.get("/activate/:link", UserConrtoller.activate);
router.get("/refresh", UserConrtoller.refresh);
router.get("/users", UserConrtoller.getUsers);

module.exports = router;
