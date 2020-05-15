"use strict";
const User = use("App/Models/User");
const Database = use("Database");
const Env = use("Env");

class HomeController {
  async homeView({ view }) {
    const users = await Database.select(
      "firstname",
      "lastname",
      "email",
      "phonenumber"
    ).from("users");
    return view.render("indexView", { users: users });
  }
  saveUser() {
    return console.log("ddddd");
  }
}

module.exports = HomeController;
