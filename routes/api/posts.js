var express = require('express');
var router = express.Router();
let postsCtrl = require('../../controllers/api/posts')

/* GET home page. */
router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.delete);

module.exports = router;
