const jwt = require("jsonwebtoken");
const token_model = require("../models/token_models");

class TokenService {
  generat_token(data_user) {
    const accsess_token = jwt.sign(data_user, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30min",
    });
    const refresh_token = jwt.sign(data_user, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });

    return {
      accsess_token,
      refresh_token,
    };
  }

  async save_token(user_id, refresh_token) {
    const data_token = await token_model.findOne({ user: user_id });

    if (data_token) {
      data_token.refreshToken = refresh_token;
      return data_token.save();
    }
    const token = await token_model.create({ user: user_id, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
