const { User } = require("../models/index");

exports.createUser = async (req,res) => {

    try {
        const user = {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        };
    
        const result = await User.create(user);
    
        return res.status(201).json({
          sucess:true,  
          response: result,
        });

      } catch (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Internal server error",
        });
      }
}

exports.getAllUser = async (req, res) => {

    try {

        const result = await User.findAll({
            attributes:["id","name","email"]
        });
    
        return res.status(201).json({
          sucess:true,  
          response: result,
        });

      } catch (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Internal server error",
        });
      }
}

exports.signin = async (req,res) => {

    try {

        // write logic to sign in user

      } catch (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Internal server error",
        });
      }

}