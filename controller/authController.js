const request = require("../connection");
var jwt = require("jsonwebtoken");
const authModel = require("../modelo/authModel");
const { usuario } = require("../utils/validation/validation");
const authController = {};

authController.login = async (req, res) => {
  const validado = usuario.validate(req.body);
  if (validado.error) return res.json({ validado: validado.error.message });
  try {
    const result = await authModel.auth(req.body);
    if (!result || result.password != req.body.password) {
      return res
        .status(401)
        .json({ error: "Usuario y/o Contraseña incorrecto" });
    }
    var token = jwt.sign({ id: result.id, user: result.user }, "shhhhh");
    res.json({
      token,
      auth: { id: result.id, user: result.user },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = authController;
