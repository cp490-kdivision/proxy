'use strict';


/**
 * Retrieve a list of locations
 *
 * game_id String The id of the game to edit
 * returns ArrayOfLocation
 **/
exports.gameGame_idLocationGET = function(game_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "id"
}, {
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove location
 *
 * game_id String The id of the game to edit
 * location_id String The id of the location
 * no response value expected for this operation
 **/
exports.gameGame_idLocationLocation_idDELETE = function(game_id,location_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve location details
 *
 * game_id String The id of the game to edit
 * location_id String The id of the location
 * returns LocationDetail
 **/
exports.gameGame_idLocationLocation_idGET = function(game_id,location_id) {
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
 * Update location details
 *
 * body LocationSubmit Location properties
 * game_id String The id of the game to edit
 * location_id String The id of the location
 * returns LocationDetail
 **/
exports.gameGame_idLocationLocation_idPUT = function(body,game_id,location_id) {
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
 * Create a new location
 *
 * body LocationSubmit Location properties
 * game_id String The id of the game to edit
 * returns LocationDetail
 **/
exports.gameGame_idLocationPOST = function(body,game_id) {
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

