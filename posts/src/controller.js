class Controller {
  constructor(Model) {
    this.Model = Model
  }

  createPost(req, res) {
    const model = new this.Model(req.body);
    
    return model.save()
      .then(() => res.status(201).send(model))
      .catch((err) => res.status(400).send(err.message))
  }

  deleteAllPosts(req, res) {
    const { params: { user } } = req;

    return this.Model.deleteMany({ user })
      .then(() => res.status(200).send({ message: 'removed with success' }))
      .catch((err) => res.send({ message: 'failed to remove'}))
  }
}

module.exports = Controller;
