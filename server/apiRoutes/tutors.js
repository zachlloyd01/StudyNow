'use strict'

const router = require('express').Router();
const { Tutors } = require('../models');


router.post('/', async function(req, res) { // Create new tutor
    try { // Error handling
        const newTutor = await Tutors.create(req.body); // Create a new tutor with the data in the request
        res.status(200).json(newTutor); 
    }
    catch(err) { // If it errors, respond with an error
        res.status(500).json(err);
    } 
});

router.get('/', async function(req, res) { // Retrieve all tutors
    try {
        const tutors = await Tutors.findAll();
        res.status(200).json(tutors);
    }
    catch(err) {
        res.status(500).json(err);
    }
    
});

router.get('/:id', async function(req, res) { // Retrieve a specific tutor
    try {
        const { id } = req.params;
        const foundTutor = await Tutors.findOne({ where: { id } });
        res.status(200).json(foundTutor);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    
});

router.put('/:id', async function(req, res) { // Update a tutor
    try {
        const updatedTutor = await Tutors.update(
            req.body,
            { where: { id } },
        );
        res.status(200).json(updatedTutor);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    
});

router.delete('/:id', async function(req, res) { // Delete a tutor
    try {
        const { id } = req.params;
        await Tutors.destroy({
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