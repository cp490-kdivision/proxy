'use strict';

var utils = require('../utils/writer.js');
var Game = require('../service/GameService');

module.exports.gameGET = function gameGET (req, res, next) {
  Game.gameGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idDELETE = function gameGame_idDELETE (req, res, next, game_id) {
  Game.gameGame_idDELETE(game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idGET = function gameGame_idGET (req, res, next, game_id) {
  Game.gameGame_idGET(game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idPUT = function gameGame_idPUT (req, res, next, body, game_id) {
  Game.gameGame_idPUT(body, game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gamePOST = function gamePOST (req, res, next, body) {
  Game.gamePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
