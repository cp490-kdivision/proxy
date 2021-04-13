'use strict';

var utils = require('../utils/writer.js');
var Character = require('../service/CharacterService');

module.exports.gameGame_idPlayerPlayer_idCharacterPOST = function gameGame_idPlayerPlayer_idCharacterPOST (req, res, next, body, game_id, player_id) {
  Character.gameGame_idPlayerPlayer_idCharacterPOST(body, game_id, player_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerPlayer_idCharacterCharacter_idDELETE = function playerPlayer_idCharacterCharacter_idDELETE (req, res, next, player_id, character_id) {
  Character.playerPlayer_idCharacterCharacter_idDELETE(player_id, character_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerPlayer_idCharacterCharacter_idGET = function playerPlayer_idCharacterCharacter_idGET (req, res, next, player_id, character_id) {
  Character.playerPlayer_idCharacterCharacter_idGET(player_id, character_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerPlayer_idCharacterGET = function playerPlayer_idCharacterGET (req, res, next, player_id) {
  Character.playerPlayer_idCharacterGET(player_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
