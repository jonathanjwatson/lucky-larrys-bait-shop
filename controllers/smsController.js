const express = require("express");

const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

router.get("/test", (req, res) => {
  client.messages
    .create({
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
      from: process.env.FROM_PHONE,
      to: process.env.TO_PHONE,
    })
    .then((message) => {
      res.json(message);
    });
});

router.post("/order", (req, res) => {
  const { product, phone } = req.body;
  client.messages
    .create({
      body: `A customer at ${phone} is requesting ${product}.`,
      from: process.env.FROM_PHONE,
      to: process.env.TO_PHONE,
    })
    .then((message) => {
      res.json(message);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
