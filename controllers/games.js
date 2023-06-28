const Games = require("../models/Games");

exports.getAllGames = (req, res, next) => {
  Games.find()
    .then((games) => {
      res.status(200).json(games);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneGame = (req, res, next) => {
  Games.findOne({ id: req.params.id })
    .then((games) => {
      res.status(200).json(games);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.saveDate = (req, res) => {
  const { dates } = req.body;

  // Vérifiez si les données requises sont présentes
  if (!dates || !Array.isArray(dates)) {
    return res.status(400).json({ message: "Données manquantes ou invalides" });
  }

  // Créez un nouvel objet Games avec les dates fournies
  const myData = new Games({ disponibility: dates });

  // Enregistrez l'objet dans la base de données
  myData
    .save()
    .then(() => {
      res.status(200).json({ message: "Données enregistrées avec succès" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          message: "Erreur lors de l'enregistrement des données",
          error,
        });
    });
};
