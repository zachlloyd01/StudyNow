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

router.get('/', async function(req, res) { // Retrieve all sessions
    try {
        const sessions = await Sessions.findAll();
        res.status(200).json(sessions);
    }
    catch(err) {
        res.status(500).json(err);
    }
    
});

router.get('/:id', async function(req, res) { // Retrieve a specific session
    try {
        const { id } = req.params;
        const foundSession = await Sessions.findOne({ where: { id } });
        res.status(200).json(foundSession);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    
});

router.put('/:id', async function(req, res) { // Update a session
    try {
        const updatedSession = await Sessions.update(
            req.body,
            { where: { id } },
        );
        res.status(200).json(updatedSession);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    
});

router.delete('/:id', async function(req, res) { // Delete a session
    try {
        const { id } = req.params;
        await Sessions.destroy({
            where: {
                id
            }
        });
        res.status(202).json('')
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;