const express = require('express');
const router = express.Router();

const presidentController = require('../controllers/president');

router.get('/', presidentController.getAll);

router.get('/:presidentId', presidentController.getPresident);

router.post('/', presidentController.create);

router.put('/:presidentId', presidentController.updatePresident);

router.delete('/:presidentId', presidentController.deletePresident);

module.exports = router;
