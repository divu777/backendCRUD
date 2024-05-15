const User = require("../models/User.js");
const jwtUtils = require("../utils/jwt.js");

exports.register = (req, res) => {
  const { username, password } = req.body;
  const user = new User(username, password);
  User.users.push(user);
  res.status(201).json({ message: "User registered successfully" });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = User.users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwtUtils.generateToken(user.username);
  res.status(200).json({ token });
};
