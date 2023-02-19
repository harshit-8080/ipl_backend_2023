const { Team } = require("../models/index");

// api to create team
exports.createTeam = async (req, res) => {
  try {
    const team = {
      Name: req.body.Name,
      location: req.body.location,
      owner: req.body.owner,
      numberofwins: req.body.numberofwins,
      foundingyear: req.body.foundingyear,
      dresscolor: req.body.dresscolor,
      sponser: req.body.sponser,
      captain: req.body.captain,
      headcoach: req.body.headcoach,
      battingcoach: req.body.battingcoach,
      bowlingcoach: req.body.bowlingcoach
    };

    const result = await Team.create(team);

    return res.status(201).json({
      msg: result,
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};
