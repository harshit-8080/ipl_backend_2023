const {TWILIO_SERVICE_SID , TWILIO_ACCOUNT_SID , TWILIO_AUTH_TOKEN} = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

exports.generateOTP = () => {

    const otp = Math.floor(10000 + Math.random() * 900000)
    return otp;
}

exports.sendOTP = async(otp) => {
    client.messages.create({
      body: otp,
      to:'+91 8102441352',    
      from: '+19896569746'
    })
}

exports.expiry_time = () => {

  const expiry_time = AddMinutesToDate(new Date() , 5);
  return expiry_time;

}

function AddMinutesToDate(date,minutes) {
  return new Date(date.getTime() + minutes*60000);
}