'use strict'

const router = require('express').Router();
const { Students } = require('../models');


router.post('/', async function(req, res) { // Create new student
    try { // Error handling
        
        
    }
    catch(err) { // If it errors, respond with an error
        
    } 
});

router.get('/', async function(req, res) { // Retrieve all students
    try {
        
    }
    catch(err) {
        
    }
    
});

router.get('/:id', async function(req, res) { // Retrieve a specific student
    try {
        const { id } = req.params;
        
    } 
    catch (error) {
        
    }
    
});

router.put('/:id', async function(req, res) { // Update a student
    try {
        
    } 
    catch (error) {
        
    }
    
});

router.delete('/:id', async function(req, res) { // Delete a student
    try {
        const { id } = req.params;
    }
    catch(err) {
        
    }
});

module.exports = router;