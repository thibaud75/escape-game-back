const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const adminMiddleware = require("../middleware/adminMiddleware");

const disponibilityCtrl = require("../controllers/disponibility");

router.post("/reserveform", auth, disponibilityCtrl.reserveForm);
router.post(
  "/reserveformadmin",
  adminMiddleware,
  disponibilityCtrl.reserveFormAdmin
);
router.get("/getonedispo/:id", auth, disponibilityCtrl.getOneDispo);
router.delete(
  "/deleteReserv/:id",
  adminMiddleware,
  disponibilityCtrl.deleteReserv
);
router.get("/history/:id", disponibilityCtrl.history);
router.get("/getdates/:id", disponibilityCtrl.getDates);
router.get("/getalldispo", disponibilityCtrl.getAllDispo);
router.delete("/deleteReservUser/:id", auth, disponibilityCtrl.deleteReserv);

module.exports = router;
