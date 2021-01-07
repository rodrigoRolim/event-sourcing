const NATS = require('nats');
const servers = ['nats://localhost:4222', 'nats://localhost:5222', 'nats://localhost:6222'];
let nc = null;

module.exports.initEventManager = function () {
  let nc = NATS.connect({servers: servers, json: true});
  return nc;
}

module.exports.getEventManager = function() {
  if (nc) {
    return nc;
  }

  return new Error('Nats have not been initalized');
}