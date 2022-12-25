const express = require("express");
const { TeamRouter } = require("./src/routes/teams.route");
const { UserRouter } = require("./src/routes/user.route");

// this function helps us to listen and start the server. 
const setupAndStartServer = async function () {
  const app = express();

  // app.get("/",(req,res)=>{

  //     console.log("Request = ",req);
  //     console.log("Response = ",res);

  //     return res.status(200).json({
  //         "MSG":"Response from api version 2.0"
  //     })
  // })

  // app.get("/home",(req,res)=>{

  //     return res.status(200).json({
  //         "MSG":"home api called"
  //     })
  // })
  // app.get("/contact/harshit",(req,res)=>{

  //     return res.status(200).json({
  //         "MSG":"contact api called"
  //     })
  // })

  app.use(express.json());
  app.use(TeamRouter);
  app.use(UserRouter);

  app.listen(3000, () => {
    console.log("Server started at 3000");
  });
};

//here we are calling
setupAndStartServer();
