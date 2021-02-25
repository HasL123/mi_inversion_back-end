const express = require("express");
const jwt = require("jsonwebtoken");

const rutasProtegidas = (req, res, next) => {
  const token = req.body.token;
  if (token) {
    jwt.verify(token, "shhhhh", (err, decoded) => {
      if (err) {
        return res.status(401).send({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      mensaje: "Token no proveída.",
    });
  }
};
module.exports = rutasProtegidas;
