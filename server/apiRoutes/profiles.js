'use strict'

const router = require('express').Router();
const { Profiles, Students, Tutors } = require('../models');
const bcrypt = require('bcrypt');
const { ValidationError } = require('sequelize');

router.post('/', async function(req, res) { // Create new profile
    const refreshString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if(req.body.name) { // Is a signup
        try {
            const storePassword = await bcrypt.hash(req.body.password, 10);
            const newProfile = await Profiles.create({
                name: req.body.name,
                email: req.body.email,
                password: storePassword   ,
                refreshToken: refreshString,
            });
            const sessionToken = await jwt.sign({ id: newProfile.id, name: newProfile.name, email: newProfile.email }, process.env.JWT_SECRET, { expiresIn: '1s' });
            const refreshToken = await jwt.sign({ refresh: refreshString }, process.env.JWT_SECRET, { expiresIn: '7d' });
            res.status(200).json({ sessionToken, refreshToken });
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
    else { // Is a login
        try {
            const foundProfile = await Profiles.findOne({
                where: {
                    email: req.body.email
                }
            });

            if(foundProfile) {
                const match = await bcrypt.compare(req.body.password, foundProfile.password);
                if(match) {
                    const sessionToken = await jwt.sign({ id: foundProfile.id, name: foundProfile.name, email: foundProfile.email }, process.env.JWT_SECRET, { expiresIn: '2h' });
                    const refreshToken = await jwt.sign(refreshString, process.env.JWT_SECRET, { expiresIn: '7d' });
                    await Profile.update(
                        { refreshToken: refreshString },
                        { where: { id: foundProfile.id } }
                    );
                    res.status(200).json({ sessionToken, refreshToken });
                }
                else {
                    res.status(401).json('Unauthorized');
                }
            }
            else {
                res.status(404).json('Profile not found');
            }
            
            
        }
        catch(err){
            console.log(err);
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
        await Profiles.destroy({
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