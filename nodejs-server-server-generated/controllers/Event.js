'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.gameGame_idEventEvent_idDELETE = function gameGame_idEventEvent_idDELETE (req, res, next, game_id, event_id) {
  Event.gameGame_idEventEvent_idDELETE(game_id, event_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idEventEvent_idGET = function gameGame_idEventEvent_idGET (req, res, next, game_id, event_id) {
  Event.gameGame_idEventEvent_idGET(game_id, event_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idEventEvent_idPUT = function gameGame_idEventEvent_idPUT (req, res, next, body, game_id, event_id) {
  Event.gameGame_idEventEvent_idPUT(body, game_id, event_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idEventGET = function gameGame_idEventGET (req, res, next, game_id) {
  Event.gameGame_idEventGET(game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idEventPOST = function gameGame_idEventPOST (req, res, next, body, game_id) {
  Event.gameGame_idEventPOST(body, game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
