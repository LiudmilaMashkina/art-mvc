const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/paintings');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', ctrl.create);
console.log("I'm in routes");
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);


module.exports = router;