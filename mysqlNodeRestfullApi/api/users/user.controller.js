const { create } = require("./user.service");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: 0,
          message: "Connection failed",
        });
      }
      return res.status(200).json({
        status: 1,
        message: results,
      });
    });
  },
};
