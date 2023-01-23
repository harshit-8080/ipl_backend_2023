require('dotenv').config();
const express = require("express");
const { TeamRouter } = require("./src/routes/teams.route");
const { UserRouter } = require("./src/routes/user.route");

// this function helps us to listen and start the server. 
const setupAndStartServer = async function () {
  const app = express();

  app.use(express.json());
  app.use(TeamRouter);
  app.use(UserRouter);

  const PORT = process.env.PORT;
  app.listen(PORT, (req, res) => {
    console.log(`server started at 3000`);
  })
};

//here we are calling
setupAndStartServer();
