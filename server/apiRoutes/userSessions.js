'use strict'

const router = require('express').Router();
const { Sessions } = require('../models');


router.post('/', async function(req, res) { // Create new session
    try { // Error handling
        const newSession = await Sessions.create(req.body); // Create a new session with the data in the request
        res.status(200).json(newSession); 
    }
    catch(err) { // If it errors, respond with an error
        res.status(500).json(err);
    } 
});



module.exports = router;