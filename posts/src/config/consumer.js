const NATS = require('nats');
const Model = require('../model');
const servers = ['nats://localhost:4222', 'nats://localhost:5222', 'nats://localhost:6222']

module.exports.consumer = function () {

  let nc = NATS.connect({ servers: servers, json: true });
  nc.on('connect', () => {
    nc.on('error', (err) => {
      console.log(err)
    })
    nc.subscribe('DELETE_USER_POST', (request, replyTo) => {

      Model.deleteMany({ user: request.user })
        .then(resp => {
          nc.publish(replyTo, { message: 'deleted with success!', response: resp });
        })
        .catch(err  => {
          nc.publish(replyTo, { message: 'error to delete', error: err });
        })
    });
  });
}
