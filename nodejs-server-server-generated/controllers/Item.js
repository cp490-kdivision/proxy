'use strict';

var utils = require('../utils/writer.js');
var Item = require('../service/ItemService');

module.exports.gameGame_idItemGET = function gameGame_idItemGET (req, res, next, game_id) {
  Item.gameGame_idItemGET(game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idItemItem_idDELETE = function gameGame_idItemItem_idDELETE (req, res, next, game_id, item_id) {
  Item.gameGame_idItemItem_idDELETE(game_id, item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idItemItem_idGET = function gameGame_idItemItem_idGET (req, res, next, game_id, item_id) {
  Item.gameGame_idItemItem_idGET(game_id, item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idItemItem_idPUT = function gameGame_idItemItem_idPUT (req, res, next, body, game_id, item_id) {
  Item.gameGame_idItemItem_idPUT(body, game_id, item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameGame_idItemPOST = function gameGame_idItemPOST (req, res, next, body, game_id) {
  Item.gameGame_idItemPOST(body, game_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
