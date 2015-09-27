var Class = require("./class");

// @class BaseAI: the base functions all AIs should do
var BaseAI = Class({
    init: function(game) {
        this.game = game;
    },

    getName: function() {
        return "JavaScript Player"; // intended to be overridden by the AI class
    },

    start: function() {
        // intended to be overridden by the AI class
    },

    gameUpdated: function() {
        // intended to be overridden by the AI class
    },

    invalid: function(message, data) {
        console.error("AI was told this is invalid", message, data);
    },

    ended: function(won, reason) {
        // intended to be overridden by the AI class
    },
});

module.exports = BaseAI;
