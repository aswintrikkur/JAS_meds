const sendOtpToAdmin = async (user,otp) => {

    const accountSid = process.env.ACCOUNTSID;
    const authToken = process.env.AUTHTOKEN;
    const client = require('twilio')(accountSid, authToken);

    try {
        const userDetails = JSON.stringify(user);


        const message = await client.messages.create({
            // from: 'whatsapp:+14155238886',     //*for whatsapp messages
            // to: 'whatsapp:+917559853058',
            // body:'Welcome Aswikumar.',
            from: '+12692056828',            //*for text messages
            to: '+917559853058',
            body: ` ${userDetails} tries create an account in JAS_Meds app. 
            OTP for registration is  ${otp} `,
        });
        // console.log(message);
        return { message };
 
    } catch (error) {
        // You can implement your fallback code here
        console.log(error);
    }

}

// otp generation and verification
function OTP() {
    let value;
    this.generate= function(){
        value= Math.floor(Math.random()*1000000);

        // setTimeout(() => {
        //     value= 'otp expired';
        // }, 5000);
        return value
    };
    this.verify=function(inputVal){
        if(value === inputVal){
            return true;
        }
        return false;
    }
}



module.exports = { sendOtpToAdmin , OTP }