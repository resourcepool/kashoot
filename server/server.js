const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Logger = require('./lib/log/Logger');

require('./index');

Logger.info('Starting takahoot server');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ----------- game pin

let game = null;
app.post('/game', function (req, res) {
  game = req.body;
  game.id = 1;
  res.send({game});
});
app.get('/game', function (req, res) {
  console.log('start the game');
  res.send({game});
});

// ----------- players

let players = [];
app.post('/players', function (req, res) {
  const player = req.body;
  player.id = players.length > 0 ? players[players.length - 1 ].id + 1 : 1;
  players.push(player);
  res.json({player});
});
app.get('/players', function (req, res) {
  res.json({players});
});
app.delete('/players/:id', function (req, res) {
  const id = req.params.id;
  players = players.filter(player => player.id !== id);
  res.send({id});
});


app.listen(3000);
