'use strict'

const router = require('express').Router();
const { Sessions } = require('../models');


router.post('/', async function(req, res) { // Create new session
    try { // Error handling
        
        
    }
    catch(err) { // If it errors, respond with an error
        
    } 
});

router.get('/', async function(req, res) { // Retrieve all sessions
    try {
        
    }
    catch(err) {
        
    }
    
});

router.get('/:id', async function(req, res) { // Retrieve a specific session
    try {
        const { id } = req.params;
        
    } 
    catch (error) {
        
    }
    
});

router.put('/:id', async function(req, res) { // Update a session
    try {
        
    } 
    catch (error) {
        
    }
    
});

router.delete('/:id', async function(req, res) { // Delete a session
    try {
        const { id } = req.params;
    }
    catch(err) {
        
    }
});

module.exports = router;