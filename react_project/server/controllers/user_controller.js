/**С помощью контроллеров ты можешь реализовать процессы аутентификации (вход в систему)
 * и авторизации (контроль доступа к ресурсам). Это позволяет удостовериться, что пользователи
 * могут получить доступ только к тем данным и функциям, которые им разрешены. */

class UserConrtoller {
  async registration(req, res, next) {
    try {
    } catch (e) {}
  }

  async login(req, res, next) {
    try {
    } catch (e) {}
  }

  async logout(req, res, next) {
    try {
    } catch (e) {}
  }

  async activate(req, res, next) {
    try {
    } catch (e) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json(["123", "456"]);
    } catch (e) {}
  }
}

module.exports = new UserConrtoller ();
