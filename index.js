require('dotenv').config();
const path = require('path');
const sgMail = require('@sendgrid/mail');
const express = require("express");

const homeroute = require("./routes/Home.js");
const loginroute = require("./routes/login");

const app = express();

SVGAnimateMotionElement.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeroute);
app.use("/", loginroute);
app.listen(3000, () => {
  console.log("Server is Running on 3000");
});
