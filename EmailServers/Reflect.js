const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
  }); 

router.post('/sendemail',(req,res)=>{
    let mailOptions = {
        from: process.env.email,
        to: process.env.Toemail,
        subject: `New Appointment from ${req.body.name}`,
        html: ` <h1>Contact Details</h1>
                <div style="border: 2px solid; padding: 10px;">
                <p>Name : ${req.body.name}</p>
                <p>Mobile no:${req.body.phoneNumber}</p>
                <p>Time Slot:${req.body.timeSlot}</p>
                </div>
              `
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          return res.status(403).json({ message:"Email Not send",isEmail:false })

        } 
      }); 
      res.status(201).json({ message:"Email Send Successfully",isEmail:true })
     })




module.exports = router
