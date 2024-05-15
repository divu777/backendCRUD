const jwt = require("jsonwebtoken");
const secret = "dfgdhthrthhyhtytj"; // Replace with your own secret key

exports.generateToken = (username) => {
  const payload = { username };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secret);
};
