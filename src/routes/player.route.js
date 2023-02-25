const express = require("express");
const PlayerController = require("../controllers/player.controller.js");

const PlayerRouter = express.Router();

PlayerRouter.post("/player", PlayerController.createPlayer)

PlayerRouter.get("/allPlayers", PlayerController.allPlayers)

PlayerRouter.post("/updateDetails", PlayerController.UpdatePlayer)

module.exports = {
  PlayerRouter,
};
