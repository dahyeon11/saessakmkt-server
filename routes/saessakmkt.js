const express = require('express');
const router = express.Router();
const controller = require('../controllers/saessakmkt')

/* GET links listing. */
router.get('/', controller.get);
router.post('/login', controller.login);

router.post('/auth', controller.auth);



module.exports = router;
