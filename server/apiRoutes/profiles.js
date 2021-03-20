'use strict'

const router = require('express').Router();
const { Profiles } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async function(req, res) { // Create new profile
    try { // Error handling
        const storePassword = await bcrypt.hash(req.body.password, 10);
    
        const newProfile = await Profiles.create({
            name: req.body.name,
            email: req.body.email,
            password: storePassword,
        });

        res.status(200).json({id: newProfile.id, email: newProfile.email, name: newProfile.name});
    }
    catch(err) { // If it errors, respond with an error
        console.log(err);
        res.status(500).json(err);
    }
    
});

router.get('/', async function(req, res) { // Retrieve all profiles
    try {
        const profiles = await Profiles.scope('withoutPassword').findAll();
        res.status(200).json(profiles);
    }
    catch(err) {
        res.status(500).json(err);
    }
    
});

router.get('/:id', async function(req, res) { // Retrieve a specific profile
    const { id } = req.params;
    const foundProfile = await Profiles.scope('withoutPassword').findOne({ where: { id }});
    res.status(200).json(foundProfile)
});

router.put('/:id', async function(req, res) { // Update a profile
    const { id } = req.params;
    res.status(200).json('Update a profile!');
});

router.delete('/:id', async function(req, res) { // Delete a profile
    const { id } = req.params;
    res.status(200).json(`Delete a profile! ${id}`)
});

module.exports = router;