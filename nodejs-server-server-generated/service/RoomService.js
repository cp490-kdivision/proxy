'use strict';


/**
 * Retrieve all rooms
 *
 * game_id String The id of the game to edit
 * returns ArrayOfRooms
 **/
exports.gameGame_idRoomGET = function(game_id) {
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
 * Add a new room to a game
 *
 * body RoomSubmit Settable Room properties
 * game_id String The id of the game to edit
 * returns RoomDetail
 **/
exports.gameGame_idRoomPOST = function(body,game_id) {
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
 * Remove room
 *
 * game_id String The id of the game to edit
 * room_id String UUID of a room
 * no response value expected for this operation
 **/
exports.gameGame_idRoomRoom_idDELETE = function(game_id,room_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve room details
 *
 * game_id String The id of the game to edit
 * room_id String UUID of a room
 * returns RoomDetail
 **/
exports.gameGame_idRoomRoom_idGET = function(game_id,room_id) {
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
 * Update room details
 *
 * body RoomSubmit Settable Room properties
 * game_id String The id of the game to edit
 * room_id String UUID of a room
 * returns RoomDetail
 **/
exports.gameGame_idRoomRoom_idPUT = function(body,game_id,room_id) {
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

