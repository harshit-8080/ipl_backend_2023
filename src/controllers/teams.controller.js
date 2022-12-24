const { Team } = require("../models/index");

// api to create team
exports.createTeam = async (req, res) => {
  try {
    const team = {
      name: req.body.name,
      city: req.body.city,
      teamColour: req.body.teamColour,
      owner: req.body.owner,
      head: req.body.head,
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
