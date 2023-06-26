const express = require("express");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Thibaud1:Hydres91@cluster0.8ajfx8o.mongodb.net/Escape-game?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use(express.json());

// app.use("/images", express.static(path.join(__dirname, "images")));
// app.use("/api/auth", userRoutes);
// app.use("/api/post", postRoutes);

module.exports = app;
