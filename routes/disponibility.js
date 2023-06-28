const express = require("express");
const router = express.Router();

const disponibilityCtrl = require("../controllers/disponibility");

router.post("/reserveForm", disponibilityCtrl.reserveForm);

module.exports = router;
