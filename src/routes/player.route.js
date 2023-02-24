const express = require("express");
const PlayerController = require("../controllers/player.controller.js");

const PlayerRouter = express.Router();

PlayerRouter.post("/player", PlayerController.createPlayer)

module.exports = {
  PlayerRouter,
};
