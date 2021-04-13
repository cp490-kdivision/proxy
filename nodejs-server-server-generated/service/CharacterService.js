'use strict';


/**
 * Create a new player character
 *
 * body CharacterSubmit Settable Player Character properties
 * game_id String The id of the game to edit
 * player_id String Player ID
 * returns CharacterDetail
 **/
exports.gameGame_idPlayerPlayer_idCharacterPOST = function(body,game_id,player_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove player character
 *
 * player_id String Player ID
 * character_id String Player Character ID
 * no response value expected for this operation
 **/
exports.playerPlayer_idCharacterCharacter_idDELETE = function(player_id,character_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve player character details
 *
 * player_id String Player ID
 * character_id String Player Character ID
 * returns CharacterDetail
 **/
exports.playerPlayer_idCharacterCharacter_idGET = function(player_id,character_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a list of player characters
 *
 * player_id String Player ID
 * returns ArrayOfCharacters
 **/
exports.playerPlayer_idCharacterGET = function(player_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

