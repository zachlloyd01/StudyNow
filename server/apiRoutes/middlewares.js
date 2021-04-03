const jwt = require('jsonwebtoken');
const { Profiles } = require('../models');

/* AUTH CHECK MIDDLEWARE */
const authCheck = async function(req, res, next) {
    
    if(req.originalUrl === '/api/profiles' && req.method === 'POST') { // Signing In / Signing Up
        next();
    }
    else { // Not signing in/up, need to check auth
        try {
            const decoded = await jwt.verify(req.body.sessionToken, process.env.JWT_SECRET);
            req.body.user = { ...decoded };
            next();
        }
        catch(error) {
            if(error instanceof jwt.TokenExpiredError) { // User info is expired
                const verified = await jwt.verify(req.body.sessionToken, process.env.JWT_SECRET, { ignoreExpiration: true });
                newRefreshString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                const foundProfile = await Profiles.findOne({ where: { id: verified.id } });
                try {
                    const decodedRefresh = await jwt.verify(req.body.refreshToken, process.env.JWT_SECRET);
                    if(decodedRefresh.refresh === foundProfile.refreshToken) {
                        const newRefreshToken = await jwt.sign({ refresh: refreshString }, process.env.JWT_SECRET, { expiresIn: '7d' });
                        await Profiles.update({ refreshToken: newRefreshToken }, { where: { id: foundProfile.id } });
                        next();
                    }
                    else {
                        res.status(401).json('Not logged in!');
                    }
                }
                catch {
                    res.status(401).json('Not logged in!');
                }                
            }
            else {
                res.status(401).json('Not logged in!');
            }
        }
        
    }
    
};

const getProfileInfo = async function(req, res, next) {
    next();
}

module.exports = { authCheck, getProfileInfo }