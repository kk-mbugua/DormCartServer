const mongoose = require("mongoose");

class Database {
  user_name = "test_admin_1"
  password = "t3mp0r4ry"
  local_database_url = "mongodb://localhost/test_v2";
  cloud_database_url = `mongodb+srv://${this.user_name}:${this.password}@cluster0-omt1j.mongodb.net/test?retryWrites=true&w=majority`;
  constructor() {
    this.connect_databse();
  }

  connect_databse() {
    mongoose
      .connect(this.cloud_database_url, {useNewUrlParser: true, useUnifiedTopology: true})
      .catch((error) => {
        console.error(error);
      });

  }
}

module.exports = new Database();
