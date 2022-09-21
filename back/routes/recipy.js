const express = require('express');
const router = express.Router();

const recipyCtrl = require('../controllers/recipy');

router.get('/', recipyCtrl.getAllRecipies);
router.get('/:id', recipyCtrl.getOneRecipy);

module.exports = router;