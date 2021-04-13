'use strict';

var utils = require('../utils/writer.js');
var Player = require('../service/PlayerService');

module.exports.playerGET = function playerGET (req, res, next) {
  Player.playerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerPOST = function playerPOST (req, res, next, body) {
  Player.playerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerPlayer_idDELETE = function playerPlayer_idDELETE (req, res, next, player_id) {
  Player.playerPlayer_idDELETE(player_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerPlayer_idGET = function playerPlayer_idGET (req, res, next, player_id) {
  Player.playerPlayer_idGET(player_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerPlayer_idPUT = function playerPlayer_idPUT (req, res, next, body, player_id) {
  Player.playerPlayer_idPUT(body, player_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
