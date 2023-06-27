const Games = require('../models/Games');

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

// exports.getOnegame = ((req, res, next) => {
//     Games.find()
// })