'use strict';

var utils = require('../utils/writer.js');
var Location = require('../service/LocationService');

module.exports.gameGame_idLocationGET = function gameGame_idLocationGET (req, res, next, game_id) {
  Location.gameGame_idLocationGET(game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idLocationLocation_idDELETE = function gameGame_idLocationLocation_idDELETE (req, res, next, game_id, location_id) {
  Location.gameGame_idLocationLocation_idDELETE(game_id, location_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idLocationLocation_idGET = function gameGame_idLocationLocation_idGET (req, res, next, game_id, location_id) {
  Location.gameGame_idLocationLocation_idGET(game_id, location_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idLocationLocation_idPUT = function gameGame_idLocationLocation_idPUT (req, res, next, body, game_id, location_id) {
  Location.gameGame_idLocationLocation_idPUT(body, game_id, location_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idLocationPOST = function gameGame_idLocationPOST (req, res, next, body, game_id) {
  Location.gameGame_idLocationPOST(body, game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
