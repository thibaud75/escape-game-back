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

exports.closeGame = (req, res, next) => {
  Games.findOne({ id: req.params.id })
    .then((game) => {
      if (game) {
        if (game.available === true) game.available = false;
        else game.available = true;
        console.log(game);
        return game.save();
      } else {
        throw new Error("Game not found");
      }
    })
    .then((updatedGame) => {
      res.status(200).json(updatedGame);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
