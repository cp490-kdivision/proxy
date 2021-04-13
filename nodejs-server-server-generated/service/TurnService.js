'use strict';


/**
 * Submit player turn
 *
 * body TurnSubmit Turn submission
 * game_id String The id of the game to edit
 * character_id String Player Character ID
 * returns TurnDetail
 **/
exports.gameGame_idCharacterCharacter_idTurnPOST = function(body,game_id,character_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "text" : "text",
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

