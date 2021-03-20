'use strict'

const router = require('express').Router();
const { Profiles } = require('../models');
const bcrypt = require('bcrypt');
const { ValidationError } = require('sequelize');

router.post('/', async function(req, res) { // Create new profile
    try { // Error handling
        const storePassword = await bcrypt.hash(req.body.password, 10);
    
        const [newProfile, created] = await Profiles.findOrCreate({
            where: {
                email: req.body.email
            },
            defaults: {
                name: req.body.name,
                email: req.body.email,
                password: storePassword,
            }
        });

        if(!created) {
            const match = await bcrypt.compare(req.body.password, newProfile.password);
            if(match) {
                res.status(200).json({id: newProfile.id, email: newProfile.email, name: newProfile.name, created});
            }
            else {
                res.status(403).json('Incorrect Password');
            }
        }
        else {
            res.status(200).json({id: newProfile.id, email: newProfile.email, name: newProfile.name, created});
        }
        
    }
    catch(err) { // If it errors, respond with an error
        if(err instanceof ValidationError) {
            // Returns "profile.name" if trying to sign into nonexistent account
            res.status(400).json(err.errors[0]['message'].split(' ')[0]);
        }
        else {
            res.status(500).json(err);
        }
        
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
    try {
        const { id } = req.params;
        const foundProfile = await Profiles.scope('withoutPassword').findOne({ where: { id }});
        res.status(200).json(foundProfile)
    } 
    catch (error) {
        res.status(500).json(error);
    }
    
});

router.put('/:id', async function(req, res) { // Update a profile
    try {
        const { id } = req.params;
        const updatedProfile = await Profiles.update(
            req.body,
            { where: { id } }
        );
        res.status(200).json({ 
            id: updatedProfile.id, 
            name: updatedProfile, 
            email: updatedProfile.email 
        });
    } 
    catch (error) {
        res.status(500).json(error);
    }
    
});

router.delete('/:id', async function(req, res) { // Delete a profile
    try {
        const { id } = req.params;
        const destroyedProfile = await Profiles.destroy({
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