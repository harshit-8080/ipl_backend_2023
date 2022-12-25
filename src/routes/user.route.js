const express = require("express");
const UserController = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/user", UserController.createUser);

module.exports = {
    UserRouter,
};
