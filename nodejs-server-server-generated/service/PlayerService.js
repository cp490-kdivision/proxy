'use strict';


/**
 * Retrieve a list of players
 *
 * returns ArrayOfPlayers
 **/
exports.playerGET = function() {
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
 * Create a new player
 *
 * body PlayerSubmit Settable Player properties
 * returns PlayerDetail
 **/
exports.playerPOST = function(body) {
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
 * Remove player
 *
 * player_id String Player ID
 * no response value expected for this operation
 **/
exports.playerPlayer_idDELETE = function(player_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve player details
 *
 * player_id String Player ID
 * returns PlayerDetail
 **/
exports.playerPlayer_idGET = function(player_id) {
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
 * Update player parameters
 *
 * body PlayerSubmit Settable Player properties
 * player_id String Player ID
 * returns PlayerDetail
 **/
exports.playerPlayer_idPUT = function(body,player_id) {
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

