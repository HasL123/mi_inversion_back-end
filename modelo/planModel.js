const request = require("../connection");
const planModelo = {};

planModelo.add = (values, res) => {
  return new Promise((resolve, reject) => {
    const {
      nombre_del_plan,
      inversion_minima,
      inversion_maxima,
      tasa_mensual,
      duracion_del_plan,
    } = values;
    request.query(
      `EXEC USP_IUD_Planes I, [${nombre_del_plan}], ${inversion_minima}, ${inversion_maxima}, ${tasa_mensual}, ${duracion_del_plan}`,
      (err, recordset) => {
        if (err) {
          reject([500, `Error in add` + err]);
        }
        resolve([200, "ok"]);
      }
    );
  });
};
planModelo.update = (values, res) => {
  return new Promise((resolve, reject) => {
    const {
      nombre_del_plan,
      inversion_minima,
      inversion_maxima,
      tasa_mensual,
      duracion_del_plan,
      id,
    } = values;
    request.query(
      `EXEC USP_IUD_Planes 'U',[${nombre_del_plan}], ${inversion_minima}, ${inversion_maxima}, ${tasa_mensual}, ${duracion_del_plan}, ${id}`,
      (err, recordset) => {
        if (err) {
          reject([500, `Error in update` + err]);
        }
        resolve([200, "ok"]);
      }
    );
  });
};
planModelo.byId = (values, res) => {
  return new Promise((resolve, reject) => {
    request.query(`USP_Plan_By_Id ${values.id}`, (err, recordset) => {
      if (err) {
        reject([500, `Error in id` + err]);
      }
      resolve(recordset.recordset);
    });
  });
};
planModelo.show = (values, res) => {
  return new Promise((resolve, reject) => {
    request.query("SELECT * FROM Planes", (err, recordset) => {
      if (err) {
        reject([500, `Error in show` + err]);
      }
      resolve(recordset.recordset);
    });
  });
};
planModelo.delete = (values, res) => {
  return new Promise((resolve, reject) => {
    request.query(`USP_DEL_Planes ${values.id} `, (err, recordset) => {
      if (err) {
        reject([500, `Error in delete` + err]);
      }
      resolve([200, "ok"]);
    });
  });
};

module.exports = planModelo;
