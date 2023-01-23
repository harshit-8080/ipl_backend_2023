require("dotenv").config();

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;

module.exports = {
    TWILIO_SERVICE_SID ,
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
}