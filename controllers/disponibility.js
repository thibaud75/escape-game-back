const Disponibility = require("../models/Disponibility");

exports.reserveForm = async (req, res, next) => {
  console.log(req.body.dispo);
  console.log(req.auth);

  try {
    const existingDisponibility = await Disponibility.findOne({
      gameId: req.body.dispo.gameId,
      "disponibility.date": req.body.dispo.disponibility[0].date,
    });

    if (existingDisponibility) {
      res
        .status(404)
        .json(
          "L'escape game est déjà reservé pour cette horaire! Veuillez choisir un autre horraire disponible! "
        );
    } else {
      const dispo = new Disponibility(req.body.dispo);
      await dispo.save();
      res.status(201).json({ message: "Date réservée", dispo });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
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

exports.deleteReserv = (req, res, next) => {
  Disponibility.findOne({ id: req.params.id })
    .then((dispo) => {
      if (dispo) {
        Disponibility.deleteOne({ id: req.params.id })
          .then(() => {
            res
              .status(200)
              .json({ message: "Réservation supprimée avec succès" });
          })
          .catch((error) => {
            res.status(500).json({ error: error });
          });
      } else {
        res.status(404).json({ message: "Réservation introuvable" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
