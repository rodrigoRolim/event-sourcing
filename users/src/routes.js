const express = require('express');
const Controller = require('./controller');
const Model = require('./model');
const { initEventManager } = require('./config/eventManager');

const router = express.Router();

const controller = new Controller(Model, initEventManager());

router.post('/', (req, res) => controller.createUser(req, res));
router.delete('/:id', (req, res) => controller.deleteUser(req, res));

module.exports = router;
