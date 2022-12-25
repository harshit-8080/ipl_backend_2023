const express = require("express");
const UserController = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/user", UserController.createUser);

UserRouter.get("/users", UserController.getAllUser);

UserRouter.post("/signin", UserController.signin);

module.exports = {
    UserRouter,
};
