/**С помощью контроллеров ты можешь реализовать процессы аутентификации (вход в систему)
 * и авторизации (контроль доступа к ресурсам). Это позволяет удостовериться, что пользователи
 * могут получить доступ только к тем данным и функциям, которые им разрешены. */

const userService = require("../service/user_service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api_error");
// const userModel = require("../models/user-model");
// const tokenService = require("../service/token-service");

class UserConrtoller {
  async registration(req, res, next) {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return next(ApiError.BadRequest("Ошибка при валидации", error.array()));
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {
      next(error);
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json(["123", "456"]);
    } catch (e) {
      next(error);
    }
  }
}

module.exports = new UserConrtoller();
