const express = require('express');
const router = express.Router();
//const security = require('..middleware/authorize.js');
//const apostleController = require('..controllers/apostles');

const apostleController = require('../controllers/apostle');

router.get('/', apostleController.getAll);


router.get('/:apostleId', apostleController.getApostle);

//router.post('/', security.checkLogin , apostleController.addApostle/create);


//router.put('/:apostleId', security.checkLogin , apostleController.updateApostle/edit);

//router.delete('/:papostleId', security.checkLogin , apostleController.deleteApostle);

router.post('/', apostleController.create);

router.put('/:apostleId', apostleController.updateApostle);

router.delete('/:apostleId', apostleController.deleteApostle);

module.exports = router;
 