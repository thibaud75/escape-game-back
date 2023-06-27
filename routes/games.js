const express = require("express");
const router = express.Router();

const gamesCtrl = require("../controllers/games");

router.get("/", gamesCtrl.getAllGames);
router.get("/:id", gamesCtrl.getOneGame)
// router.post('/:id/booking', gamesCtrl.bookingGame)

module.exports = router;