const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const disponibilityCtrl = require("../controllers/disponibility");

router.post("/reserveform", auth, disponibilityCtrl.reserveForm);
router.get("/getonedispo/:id", auth, disponibilityCtrl.getOneDispo);
router.get("/history/:id", disponibilityCtrl.history);
router.get("/getdates/:id", disponibilityCtrl.getDates);
router.get("/getalldispo", disponibilityCtrl.getAllDispo);

module.exports = router;
