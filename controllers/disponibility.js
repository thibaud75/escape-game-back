const Disponibility = require("../models/Disponibility");

exports.reserveForm = (req, res, next) => {
  console.log(req.body.dispo);
  console.log(req.auth);
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

exports.getDates = (req, res, next) => {
  Disponibility.find({ gameId: req.params.id })
    .then((dispo) => {
      res.status(200).json(dispo);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllDispo = (req, res, next) => {
  Disponibility.find()
    .then((dispo) => {
      res.status(200).json(dispo);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneDispo = (req, res, next) => {
  Disponibility.findOne({
    id: req.params.id,
  })
    .then((dispo) => {
      res.status(200).json(dispo);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
