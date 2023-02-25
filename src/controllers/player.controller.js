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

exports.allPlayers = async (req, res) => {
    try {
        const result = await player.findAll()

        return res.status(201).json({
            sucess: true,
            response: result,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal server error",
        });
    }
};

exports.UpdatePlayer = async (req, res) => {
    try {
        const Player = {
            email: req.body.email
        }
        const checkPlayer = await player.findOne({
            where:
            {
                email: Player.email
            }
        })

        if (checkPlayer) {
            checkPlayer.contact = req.body.contact,
                checkPlayer.match = req.body.match,
                checkPlayer.score = req.body.score,
                checkPlayer.highestscore = req.body.highestscore,
                checkPlayer.playertype = req.body.playertype,
                checkPlayer.captain = req.body.captain,
                checkPlayer.vicecaptain = req.body.vicecaptain,
                checkPlayer.bidprice = req.body.bidprice,
                checkPlayer.teamID = req.body.teamID

            const result = await checkPlayer.save();
            return res.status(200).json({
                "result": result
            })
        }
        else {
            return res.status(200).json({
                "msg": "User Not Found"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal server error",
        });
    }
}