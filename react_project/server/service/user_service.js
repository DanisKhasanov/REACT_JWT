const user_models = require("../models/user_models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mail_service = require("./mail_service");
const token_service = require("./token_service");
const user_dto = require("../dtos/user_dto");

class UserService {
  async registation(email, password) {
    const condidate = await user_models.findOne(email); // проверяем на наличии такой же почты

    if (condidate != 0) {
      throw new Error("Пользователь с таким почтовым адресом уже существует");
    }

    const hash_pass = await bcrypt.hash(password, 3); //создаем хешированый пароль
    const activ_link = uuid.v4(); // создаем рандомную строку чтобы активировать аккаунт и подтверждить пароль

    const user = await user_models.create({
      email,
      password: hash_pass,
      activ_link,
    }); // создаем аккаунт модель пользователя

    await mail_service.send_activ_mail(
      email,
      `${process.env.API_URL}/api/activate${activ_link}`
    );
      const userDto = new 
    const tokens = token_service.generat_token();
  }
}

module.exports = new UserService();
