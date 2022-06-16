const express = require('express');
const router = express.Router();
const Recipes = require('./model');


router.get('/recipes', (req, res, next) => {
    Recipes.get()
    .then(r => {
        res.json(r)
    })
})

module.exports = router;