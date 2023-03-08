const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/president', require('./president'));
router.use('/theme', require('./theme'));

module.exports = router;
