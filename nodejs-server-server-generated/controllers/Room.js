'use strict';

var utils = require('../utils/writer.js');
var Room = require('../service/RoomService');

module.exports.gameGame_idRoomGET = function gameGame_idRoomGET (req, res, next, game_id) {
  Room.gameGame_idRoomGET(game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idRoomPOST = function gameGame_idRoomPOST (req, res, next, body, game_id) {
  Room.gameGame_idRoomPOST(body, game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idRoomRoom_idDELETE = function gameGame_idRoomRoom_idDELETE (req, res, next, game_id, room_id) {
  Room.gameGame_idRoomRoom_idDELETE(game_id, room_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idRoomRoom_idGET = function gameGame_idRoomRoom_idGET (req, res, next, game_id, room_id) {
  Room.gameGame_idRoomRoom_idGET(game_id, room_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idRoomRoom_idPUT = function gameGame_idRoomRoom_idPUT (req, res, next, body, game_id, room_id) {
  Room.gameGame_idRoomRoom_idPUT(body, game_id, room_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
