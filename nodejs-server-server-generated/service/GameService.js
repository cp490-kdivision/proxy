'use strict';


/**
 * Retrieve a list of games
 *
 * returns ArrayOfGames
 **/
exports.gameGET = function() {
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


/**
 * Remove game
 *
 * game_id String The id of the game to edit
 * no response value expected for this operation
 **/
exports.gameGame_idDELETE = function(game_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve game details
 *
 * game_id String The id of the game to edit
 * returns GameDetail
 **/
exports.gameGame_idGET = function(game_id) {
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
 * Update game parameters
 *
 * body GameSubmit Game properties
 * game_id String The id of the game to edit
 * returns GameDetail
 **/
exports.gameGame_idPUT = function(body,game_id) {
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
 * Create a new game
 *
 * body GameSubmit Game properties
 * returns GameDetail
 **/
exports.gamePOST = function(body) {
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

