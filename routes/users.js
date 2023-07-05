const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/users");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/infos/:id", userCtrl.getUserInfos);
router.get("/admin", adminMiddleware, userCtrl.onlyAdmin);

module.exports = router;
