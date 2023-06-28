const express = require("express");
const router = express.Router();

const disponibilityCtrl = require("../controllers/disponibility");

router.post("/reserveform", disponibilityCtrl.reserveForm);

module.exports = router;
