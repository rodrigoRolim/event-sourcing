const setupApp = require('./src/app');
const port = 3000;
const {consumer} = require('./src/config/consumer');
setupApp()
  .then(app => {
    consumer(app);
    return app
  })
  .then(app => app.listen(port, () => console.log(`app running on port ${port}`)))
  .catch(error => {
    console.log(error);
    process.exit(1);
  })
