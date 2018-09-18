const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.listen(port, () => {
  console.log(' we listening for things on the proxy');
  console.log(__dirname);
});
