require('dotenv').config();
const express = require("express");
const { TeamRouter } = require("./src/routes/teams.route");
const { UserRouter } = require("./src/routes/user.route");
const { PlayerRouter } = require("./src/routes/player.route");

// this function helps us to listen and start the server. 
const setupAndStartServer = async function () {
  const app = express();

  app.use(express.json());
  app.use(TeamRouter);
  app.use(UserRouter);
  app.use(PlayerRouter);

  const PORT = process.env.PORT;
  app.listen(PORT, (req, res) => {
    console.log(`server started at 3000`);
  })
};

//here we are calling
setupAndStartServer();
