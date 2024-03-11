const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const ReflectRoutes = require('./EmailServers/Reflect');

const app = express();
const PORT = process.env.PORT || 8080 ;
const allowedOrigins = ["https://thereflectclinic.com/",'http://localhost:3000'];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors({ origin: allowedOrigins}));
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Server Successfully Running")
})
  
app.use("/reflect",ReflectRoutes);


app.listen(PORT,()=>{
    console.log("server running ON port ",PORT);
})