const User = require("../models/User");

exports.register = (req, res) => {
  const { msisdn, token } = req.body;

  // Check msisdn exists in database
  User.findOne({ msisdn }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: `Mobile number ${msisdn} is already taken`,
      });
    }

    const newUser = new User({ msisdn, token });

    newUser.save((err, result) => {
      if (err) {
        return res.status(401).json({
          error: "Error saving user in database.",
        });
      }
      return res.status(200).json({ message: "Registration success!" });
    });
  });
};
