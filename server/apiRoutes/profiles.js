const router = require('express').Router();

router.post('/', async function(req, res) { // Create new profile
    res.status(200).json('Create a profile!');
});

router.get('/', async function(req, res) { // Retrieve all profiles
    res.status(200).json('Find a profile!');
});

router.get('/:id', async function(req, res) { // Retrieve a specific profile
    const { id } = req.params;
    res.status(200).json('Find a specific profile!');
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