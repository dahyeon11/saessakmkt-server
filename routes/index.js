const express = require('express');
const router = express.Router();
const saessakRouter = require('./saessakmkt')

/* GET home page. */
router.use('/saessakmkt', saessakRouter);

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;