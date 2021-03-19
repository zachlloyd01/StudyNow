const router = require('express').Router();

router.use('/profiles', require('./profiles'))

module.exports = router;