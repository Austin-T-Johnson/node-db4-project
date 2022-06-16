const db = require('../data/db-config');

function get() {
    return db('recipes');
}

function getRecipeById(recipe_id) {
    
}

module.exports = {
    get,
    getRecipeById
}