'use strict'

const router = require('express').Router();
const { Students } = require('../models');


router.post('/', async function(req, res) { // Create new student
    try { // Error handling
        const newStudent = await Students.create(req.body); // Create a new student with the data in the request
        res.status(200).json(newStudent); 
    }
    catch(err) { // If it errors, respond with an error
        res.status(500).json(err);
    } 
});

router.get('/', async function(req, res) { // Retrieve all students
    try {
        const students = await Students.findAll();
        res.status(200).json(students);
    }
    catch(err) {
        res.status(500).json(err);
    }
    
});

router.get('/:id', async function(req, res) { // Retrieve a specific student
    try {
        const { id } = req.params;
        const foundStudent = await Students.findOne({ where: { id } });
        res.status(200).json(foundStudent);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    
});

router.put('/:id', async function(req, res) { // Update a student
    try {
        const updatedStudent = await Students.update(
            req.body,
            { where: { id } },
        );
        res.status(200).json(updatedStudent);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    
});

router.delete('/:id', async function(req, res) { // Delete a student
    try {
        const { id } = req.params;
        await Students.destroy({
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