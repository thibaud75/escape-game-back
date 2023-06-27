const express = require("express");

const mongoose = require("mongoose");

const app = express();

// ROUTES

const usersRoutes = require("./routes/users");
const gamesRoutes = require("./routes/games")

const cors = require("cors");

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(3000, () => {
  mongoose
    .connect(
      "mongodb+srv://Thibaud1:Hydres91@cluster0.8ajfx8o.mongodb.net/Escape-game?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )

    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error) => console.log("Connexion à MongoDB échouée !", error));
  console.log("Server started on port 3000");
});

app.use("/auth", usersRoutes);
app.use("/games", gamesRoutes);
