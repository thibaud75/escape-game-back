const bcrypt = require("bcrypt");

// const jwt = require("jsonwebtoken");

const User = require("../models/Users");

// SIGNUP
exports.signup = (req, res, next) => {
  // Si le password existe dans le body
  if (req.body.password) {
    // utilisation de bcrypt pour hasher le password
    bcrypt
      .hash(req.body.password, 10)
      // Je passe le body de la requete dans un objet + le password hash
      .then((hash) => {
        const user = new User({
          email: req.body.email,
          password: hash,
          name: req.body.name,
          lastname: req.body.lastname,
        });
        user
          .save()
          .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
          .catch((error) => res.status(400).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
    // Si le password n'existe pas
  } else {
    res.status(500).json({ error: "Le mot de passe n'est pas fourni" });
  }
};

// LOGIN
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Paire login/mot de passe incorrecte" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Paire login/mot de passe incorrecte" });
          }
          res.status(200).json({ userId: user._id });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
