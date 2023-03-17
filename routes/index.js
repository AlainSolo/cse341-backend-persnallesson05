const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/apostle', require('./apostle'));
//router.use('/theme', require('./theme'));

module.exports = router;
