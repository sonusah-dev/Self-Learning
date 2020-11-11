const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `INSERT INTO registration(name,email,gender,phone,password)
            VALUES(?,?,?,?,?)`,
      [data.name, data.email, data.gender, data.phone, data.password],
      (err, results, fields) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },
};
