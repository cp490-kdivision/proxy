'use strict';


/**
 * Retrieve all items
 *
 * game_id String The id of the game to edit
 * returns ArrayOfItems
 **/
exports.gameGame_idItemGET = function(game_id) {
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
 * Remove item
 *
 * game_id String The id of the game to edit
 * item_id String Item ID
 * no response value expected for this operation
 **/
exports.gameGame_idItemItem_idDELETE = function(game_id,item_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve item details
 *
 * game_id String The id of the game to edit
 * item_id String Item ID
 * returns ItemDetail
 **/
exports.gameGame_idItemItem_idGET = function(game_id,item_id) {
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
 * Update item details
 *
 * body ItemSubmit Settable Item properties
 * game_id String The id of the game to edit
 * item_id String Item ID
 * returns ItemDetail
 **/
exports.gameGame_idItemItem_idPUT = function(body,game_id,item_id) {
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
 * Add a new item to a game
 *
 * body ItemSubmit Settable Item properties
 * game_id String The id of the game to edit
 * returns ItemDetail
 **/
exports.gameGame_idItemPOST = function(body,game_id) {
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

