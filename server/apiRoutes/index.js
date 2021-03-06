const router = require('express').Router();
const { authCheck } = require('./middlewares');

router.use(authCheck);
router.use('/profiles', require('./profiles'));
router.use('/sessions', require('./sessions'));
router.use('/tutors', require('./tutors'));
router.use('/students', require('./students'));

module.exports = router;