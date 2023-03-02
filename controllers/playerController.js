const Players = require("../models/player");

const clubs = [
  { id: "1", name: "Barcelona" },
  { id: "2", name: "Real Madrid" },
  { id: "3", name: "PSG" },
  { id: "4", name: "Man United" },
  { id: "5", name: "Asernal" },
  { id: "6", name: "Man City" },
  { id: "7", name: "Everton" },
];

const positions = [
  { id: "1", name: "Goalkeeper" },
  { id: "2", name: "Defender" },
  { id: "3", name: "Centreback" },
  { id: "4", name: "Sweeper" },
  { id: "5", name: "Fullback" },
  { id: "6", name: "Wingback" },
  { id: "7", name: "Midfielder" },
  { id: "8", name: "Central midfielder" },
  { id: "9", name: "Defensive midfielder" },
  { id: "10", name: "Attacking midfielder" },
  { id: "10", name: "Wide midfielder" },
  { id: "10", name: "Striker" },
];

class playerController {
  index(req, res, next) {
    Players.find({})
      .then((players) => {
        res.render("players", {
          title: "The list of Players",
          players: players,
          positions: positions,
          clubs: clubs,
        });
      })
      .catch(next);
  }
  getPlayer(req, res, next) {
    Players.findById(req.params.id)
      .then((player) => {
        res.render("getPlayer", {
          title: "The Player",
          player: player,
          positions: positions,
          clubs: clubs,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const player = new Players(req.body);
    player
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {
        res.render("error-custom");
      });
  }
  update(req, res, next) {
    Players.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        console.log(err);
        res.render("error-custom");
      } else {
        res.redirect("/");
      }
    });
  }
  delete(req, res, next) {
    Players.findByIdAndRemove(req.params.id, function (err, player) {
      if (err) throw err;
      console.log("Success");
    });
    res.redirect("/");
  }
}
module.exports = new playerController();
