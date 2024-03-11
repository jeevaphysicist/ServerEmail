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
  // console.log("req.body",req.body)
    let mailOptions = {
        from: process.env.email,
        to: process.env.Toemail,
        subject: `New Appointment from ${req.body.name}`,
        html: `<h1>New Appointment</h1>
        <div style="border: 2px solid #3498db; border-radius: 10px; padding: 20px; background-color: #f0f0f0; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 18px; color: #333; margin: 0; padding-bottom: 10px;">Name: ${req.body.name}</p>
            <p style="font-size: 18px; color: #333; margin: 0; padding-bottom: 10px;">Mobile no: ${req.body.phoneNumber}</p>
            <p style="font-size: 18px; color: #333; margin: 0;">Time Slot: ${req.body.timeSlot}</p>
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
