/* Определена модель данных для токенов.
 *
 * когда пользователь входит в систему, ему выдается токен, 
 * который используется для подтверждения его личности в последующих запросах.
 */

const { Schema, model } = require("mongoose");

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" }, 
  refreshToken: { type: String, required: true },  
});

module.exports = model("Token", TokenSchema);
