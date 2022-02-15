require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const Player = require("./models/player");
const multerSettings = require("./multer");
var cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));
app.use("/public", express.static(__dirname + "/public/"));

const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qmdzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(4000))
  .catch((err) => console.log(err));

app.get("/females", (req, res, next) => {
  Player.find()
    .select("name gender _id image")
    .exec()
    .then((docs) => {
      const females = docs.filter((doc) => doc.gender === "Female");
      const response = {
        count: females.length,
        players: females.map((doc) => {
          return {
            name: doc.name,
            gender: doc.gender,
            image: doc.image,
            _id: doc._id,
          };
        }),
      };
      if (docs.length >= 0) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "No entries found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

app.get("/males", (req, res, next) => {
  Player.find()
    .select("name gender _id image")
    .exec()
    .then((docs) => {
      const males = docs.filter((doc) => doc.gender === "Male");
      const response = {
        count: males.length,
        players: males.map((doc) => {
          return {
            name: doc.name,
            gender: doc.gender,
            image: doc.image,
            _id: doc._id,
          };
        }),
      };
      if (docs.length >= 0) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "No entries found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

app.post("/", multerSettings.upload.single("image"), (req, res, next) => {
  console.log(req.file);
  req.body.image = [];
  req.body.image.push(req.file);
  const player = new Player({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    gender: req.body.gender,
    image: req.body.image,
  });
  player
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created player successfully",
        createdPlayer: {
          name: result.name,
          gender: result.gender,
          image: result.image,
          _id: result._id,
          request: {
            type: "GET",
            url: "http://localhost:3000/players/" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
