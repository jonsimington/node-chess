// Generated by Creer at 06:57PM on October 26, 2015 UTC, git hash: '1b69e788060071d644dd7b8745dca107577844e1'
// This is a simple class to represent the PoliceDepartment object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var Building = require("./building");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * PoliceDepartment - Used to keep cities under control and raid Warehouses.
 * @class
 */
var PoliceDepartment = Class(Building, {
    /// initializes a PoliceDepartment with basic logic as provided by the Creer code generator
    init: function() {
        Building.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Bribe the police to raid a Warehouse, dealing damage equal based on the Warehouse's current exposure, and then resetting it to 0.
     *
     * @param {Warehouse} warehouse - The warehouse you want to raid.
     * @returns {number} The amount of damage dealt to the warehouse, or -1 if there was an error.
     */
    raid: function(warehouse) {
        return client.runOnServer(this, "raid", {
            warehouse: warehouse,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = PoliceDepartment;
