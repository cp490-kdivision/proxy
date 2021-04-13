'use strict';

var utils = require('../utils/writer.js');
var Turn = require('../service/TurnService');

module.exports.gameGame_idCharacterCharacter_idTurnPOST = function gameGame_idCharacterCharacter_idTurnPOST (req, res, next, body, game_id, character_id) {
  Turn.gameGame_idCharacterCharacter_idTurnPOST(body, game_id, character_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
