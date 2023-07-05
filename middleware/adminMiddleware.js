const jwt = require("jsonwebtoken");
const User = require("../models/Users");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    console.log(userId);

    User.findById(userId).then((user) => {
      if (user && user.role === "admin") {
        req.auth = {
          userId: userId,
        };
        next();
      } else {
        console.log(user);
        res
          .status(403)
          .json({ message: "Accès interdit. Rôle administrateur requis." });
      }
    });
  } catch (error) {
    res.status(401).json({ error });
  }
};
