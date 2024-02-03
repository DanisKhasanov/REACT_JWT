/* Определена модель данных для токенов.
 *
 * Например, в вашем приложении, когда пользователь входит в систему, ему выдается токен, 
 * который используется для подтверждения его личности в последующих запросах.
 */

const { Schema, model } = require("mongoose");

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" }, //(связь с моделью пользователя).
  refreshToken: { type: String, required: true }, // токен обновления, который может использоваться 
  //для обновления основного токена.
});

module.exports = model("Token", TokenSchema);
