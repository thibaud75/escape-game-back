const express = require("express");
const router = express.Router();

const gamesCtrl = require("../controllers/games")

router.get("/games",gamesCtrl.getAllGames)
router.get("/games/:id",gamesCtrl.getOneGame)
router.post('/games/booking',gamesCtrl.bookingGame)