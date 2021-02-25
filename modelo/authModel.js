const request = require("../connection");
const authModel = {};

authModel.auth = (values, res) => {
  return new Promise((resolve, reject) => {
    request.query(`USP_CON_Usuarios ${values.user}`, (err, recordset) => {
      if (err) {
        reject([500, `Error in add` + err]);
      }
      resolve(recordset.recordset[0]);
    });
  });
};

module.exports = authModel;
