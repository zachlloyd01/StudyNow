'use strict'

const router = require('express').Router();
const { Tutors } = require('../models');

router.post('/', async function(req, res) { // Create new tutor
    try { // Error handling
        
        
    }
    catch(err) { // If it errors, respond with an error
        
    } 
});

router.get('/', async function(req, res) { // Retrieve all tutors
    try {
        
    }
    catch(err) {
        
    }
    
});

router.get('/:id', async function(req, res) { // Retrieve a specific tutor
    try {
        const { id } = req.params;
        
    } 
    catch (error) {
        
    }
    
});

router.put('/:id', async function(req, res) { // Update a tutor
    try {
        
    } 
    catch (error) {
        
    }
    
});

router.delete('/:id', async function(req, res) { // Delete a tutor
    try {
        const { id } = req.params;
    }
    catch(err) {
        
    }
});

module.exports = router;