class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

User.users = [];

module.exports = User;
