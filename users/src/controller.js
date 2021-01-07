
class Controller {
  constructor(Model, nc) {
    this.Model = Model
    this.nc = nc
  }

  createUser(req, res) {

    let model = new this.Model(req.body);
    return model.save()
      .then((resp) => {
        //console.log(resp)
        return res.status(201).send(model)
      })
      .catch((err) => res.send({message: 'error to saving'}))
  }

  deleteUser(req, res) {
    return new Promise((resolve, reject) => {
      let { params: { id } } = req
      this.nc.request('DELETE_USER_POST', { user: id }, { replyTo: 'DELETE_USER_POST' }, (msg) => {
        this.Model.deleteOne({ _id: id })
        .then(resp =>
          resolve(res.status(200).send({
            success: true,
            data: "Deleted Successfully",
            error: null,
            resp: resp
          })))
        .catch(err => reject(res.send({message: 'an error occurred'})))
     
      });
   })
  }
}

module.exports = Controller;
