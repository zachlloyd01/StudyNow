const router = require('express').Router();
const jwt = require('jsonwebtoken');

/* AUTH CHECK MIDDLEWARE */
router.use(async function(req, res, next) {
    newRefreshToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if(req.originalUrl === '/api/profiles' && req.method === 'POST') { // Signing In / Signing Up
        next();
    }
    else { // Not signing in/up, need to check auth
        try {
            const decoded = await jwt.verify(req.headers.sessionToken, process.env.JWT_SECRET);
            
        }
        catch(error) {
            console.error(error);
        }
        
    }
    
});

router.use('/profiles', require('./profiles'));
router.use('/sessions', require('./sessions'));
router.use('/tutors', require('./tutors'));
router.use('/students', require('./students'));

module.exports = router;