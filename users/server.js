const setupApp = require('./src/app');
const port = 3001;

setupApp()
  .then(app => app.listen(port, () => console.log(`app running on port ${port}`)))
  .catch(error => {
    console.log(error);
    process.exit(1);
  })
