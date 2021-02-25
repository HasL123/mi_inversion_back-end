const joi = require("joi");

const plan = joi.object({
  id: joi.number(),
  nombre_del_plan: joi.string().min(6).max(25).required(),
  inversion_minima: joi.number().min(1).required(),
  inversion_maxima: joi.number().min(1).required(),
  tasa_mensual: joi.number().min(1).max(100).required(),
  duracion_del_plan: joi.number().min(1).required(),
  token: joi.string(),
});

const usuario = joi.object({
  user: joi.string().min(4).max(25).alphanum().required(),
  password: joi.string().min(4).max(15).alphanum().required(),
});
module.exports = { plan, usuario };
