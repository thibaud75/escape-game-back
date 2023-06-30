const express = require("express");
const router = express.Router();

const disponibilityCtrl = require("../controllers/disponibility");

router.post("/reserveform", disponibilityCtrl.reserveForm);
router.get("/history/:id", disponibilityCtrl.history);
router.get("/getdates/:id", disponibilityCtrl.getDates);
router.get("/getalldispo", disponibilityCtrl.getAllDispo)


module.exports = router;
