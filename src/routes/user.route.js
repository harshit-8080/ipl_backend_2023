const express = require("express");
const {auth} = require("../middlewares/token");
const UserController = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/user", UserController.createUser);

UserRouter.get("/users", auth ,UserController.getAllUser);

UserRouter.post("/signin", UserController.signin);

UserRouter.post("/verifyotp",UserController.verifyOtp);

module.exports = {
    UserRouter,
};
