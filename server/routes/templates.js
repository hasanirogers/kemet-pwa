const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/:name', function(request, responds) {
  const pagedata = {
    title: 'Templates',
    slug: request.params.name
  };

  return responds.render(path.join(__dirname, '../', '/views/templates/'+ request.params.name), pagedata);
});

module.exports = router;
