const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/newsRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});