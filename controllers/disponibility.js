const Disponibility = require("../models/Disponibility");

exports.reserveForm = (req, res, next) => {
  console.log(req.body.dispo);
  const dispo = new Disponibility(req.body.dispo);

  dispo
    .save()
    .then(() => {
      res.status(201).json({ message: "Date réservée", dispo });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.history = (req, res, next) => {
  Disponibility.find({ userId: req.params.id })
    .then((dispo) => {
      res.status(200).json(dispo);
      console.log(dispo);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
