const { player } = require("../models/index");

//Player Created
exports.createPlayer = async (req, res) => {
    try {
        const Player = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contact: req.body.contact,
            email: req.body.email,
            match: req.body.match,
            score: req.body.score,
            highestscore: req.body.highestscore,
            playertype: req.body.playertype,
            captain: req.body.captain,
            vicecaptain: req.body.vicecaptain,
            nationalityCountry: req.body.nationalityCountry,
            bidprice: req.body.bidprice,
            teamID: req.body.teamID
        };

        const result = await player.create(Player);

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