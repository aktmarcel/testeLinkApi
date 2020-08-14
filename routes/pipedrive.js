const express = require('express');
const router = express.Router();
const {webhook, createDeal, getDeal} = require('../controller/index');
/* GET home page. */
router.post('/', async function(req, res, next) {
 await webhook.index(req, res);
});
router.post('/deal', async function(req, res, next) {
  await createDeal.index(req, res);
});

router.get('/deal', async function(req, res, next) {
  await getDeal.index(req, res);
});


module.exports = router;
