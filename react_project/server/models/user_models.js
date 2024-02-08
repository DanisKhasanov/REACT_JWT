/* Здесь хранится модель которая будет отправляться в сервер для аутентификации 
и после успешной аутентификации пользователя ,  сервер может генерировать токены. 

токен может содержать информацию о том, какие разрешения у пользователя, и сервер может использовать 
эту информацию при принятии решения о том, имеет ли пользователь право на выполнение определенного действия.*/

const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false }, 
  activationLink: { type: String },
});

module.exports = model("User", UserSchema);
