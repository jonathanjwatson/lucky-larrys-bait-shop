const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    console.log(hashedPassword);
    const newUser = {
      email: req.body.email,
      password: hashedPassword,
    };
    User.create(newUser)
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email.toLowerCase() }).then((foundUser) => {
    console.log(foundUser);
    bcrypt.compare(req.body.password, foundUser.password).then((result) => {
      console.log(result);
      if (result) {
        res.json({
          // TODO: Update token with JWT
          token: "banana!",
        });
      } else {
        res.status(401).end();
      }
    });
  });
});

module.exports = router;
