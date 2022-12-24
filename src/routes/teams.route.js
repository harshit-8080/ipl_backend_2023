const express = require("express");
const TeamController = require("../controllers/teams.controller.js");

const TeamRouter = express.Router();

TeamRouter.post("/team", TeamController.createTeam);

module.exports = {
  TeamRouter,
};
