const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const router = express.Router();
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.use(express.static("public"));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
