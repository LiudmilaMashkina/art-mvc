const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/paintings');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/:id', ctrl.update);
router.post('/', ctrl.create);

module.exports = router;