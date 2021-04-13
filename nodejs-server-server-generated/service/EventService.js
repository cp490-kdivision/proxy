'use strict';


/**
 * Remove event
 *
 * game_id String The id of the game to edit
 * event_id String Event ID
 * no response value expected for this operation
 **/
exports.gameGame_idEventEvent_idDELETE = function(game_id,event_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve event details
 *
 * game_id String The id of the game to edit
 * event_id String Event ID
 * returns inline_response_201
 **/
exports.gameGame_idEventEvent_idGET = function(game_id,event_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "conditions" : [ {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  }, {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  } ],
  "command" : "command"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update event parameters
 *
 * body EventSubmit Turn submission
 * game_id String The id of the game to edit
 * event_id String Event ID
 * returns inline_response_201
 **/
exports.gameGame_idEventEvent_idPUT = function(body,game_id,event_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "conditions" : [ {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  }, {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  } ],
  "command" : "command"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a list of events
 *
 * game_id String The id of the game to edit
 * returns ArrayOfEvents
 **/
exports.gameGame_idEventGET = function(game_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "id",
  "conditions" : [ {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  }, {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  } ],
  "command" : "command"
}, {
  "id" : "id",
  "conditions" : [ {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  }, {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  } ],
  "command" : "command"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new event
 *
 * body EventSubmit Turn submission
 * game_id String The id of the game to edit
 * returns inline_response_201
 **/
exports.gameGame_idEventPOST = function(body,game_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "conditions" : [ {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  }, {
    "primitive" : "primitive",
    "arguments" : [ "arguments", "arguments" ],
    "id" : "id"
  } ],
  "command" : "command"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

