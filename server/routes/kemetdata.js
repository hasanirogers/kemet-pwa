const express = require('express');
const router = express.Router();
const kemetdata = require('../assets/kemet.json');


router.get('/', function(request, responds) {
  responds.send(kemetdata);
});

module.exports = router;
