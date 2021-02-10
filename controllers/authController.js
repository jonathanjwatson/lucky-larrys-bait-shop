const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    console.log(hashedPassword);
    const newUser = {
      email: req.body.email,
      password: hashedPassword,
    };
    User.create(newUser)
      .then((newUser) => {
        // TODO: Send back token.
        const token = jwt.sign(
          { _id: newUser._id },
          process.env.JWT_SIGNATURE,
          {
            expiresIn: 60 * 60,
          }
        );
        console.log(token);
        res.json({
          token: token,
        });
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
        const token = jwt.sign(
          { _id: foundUser._id },
          process.env.JWT_SIGNATURE,
          {
            expiresIn: 60 * 60,
          }
        );
        console.log(token);
        res.json({
          token: token,
        });
      } else {
        res.status(401).end();
      }
    });
  });
});

module.exports = router;
