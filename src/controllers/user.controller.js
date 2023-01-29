const { User } = require("../models/index");
const tokenHelper = require("../utils/tokenhelper");
const otpHelper = require("../utils/otpHelper");
const bcrypt = require('bcrypt');


exports.createUser = async (req, res) => {

  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      verified: false
    };
    const otp = otpHelper.generateOTP();
    user.otp = otp
    const otp_expiry = otpHelper.expiry_time();
    user.otp_expiry = otp_expiry

    const result = await User.create(user);
    await result.save();
    console.log(result)
    await otpHelper.sendOTP(otp)
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
}

exports.getAllUser = async (req, res) => {

  try {

    const result = await User.findAll({
      attributes: ["id", "name", "email"]
    });

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
}

exports.signin = async (req, res) => {

  try {

    // write logic to sign in user
    const user = {
      email: req.body.email,
      password: req.body.password
    }
    const checkUser = await User.findOne({
      where:
      {
        email: user.email
      }
    })
    if (!checkUser) {
      return res.status(200).json({
        "msg": "Invalid Email"
      })
    }
    if (checkUser) {
      const checkPassword = await bcrypt.compare(user.password, checkUser.password);

      const token = tokenHelper.createToken(checkUser.email);
      if (checkPassword) {
        return res.status(200).json({
          "msg": 'Login Sucessfull ',
          "token": token
        })
      }
      else {
        return res.status(200).json({
          "msg": 'Password Invalid'
        })
      }
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }

}

exports.verifyOtp = async (req, res) => {
  try {
    const checkUser = await User.findOne({
      where:
      {
        email: req.body.email
      }
    })
    if (checkUser) {

      if (!checkUser.verifed) {

        const otp = req.body.otp;
        if (otp == checkUser.otp && new Date() < checkUser.otp_expiry) {
          checkUser.verifed = true;
          await checkUser.save();
          return res.status(201).json({
            "response": "User verified",
            "user": checkUser
          })
        } else {
          return res.status(201).json({
            "response": "otp wrong or expired"
          })
        }
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
}

