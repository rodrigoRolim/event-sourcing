const express = require('express');
const Controller = require('./controller');
const Model = require('./model');

const router = express.Router();

const controller = new Controller(Model);

router.post('/', (req, res) => controller.createPost(req, res));
router.delete('/:user', (req, res) => controller.deleteAllPosts(req, res));

module.exports = router;
