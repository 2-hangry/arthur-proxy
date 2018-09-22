const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

app.use('/businesses/:id', express.static(path.join(__dirname, '/../public')));
app.use('/api/businesses/', router);

app.use(cors());

router.all('/:id/restaurantInfo*', (req, res) => {
  res.redirect(307, `http://35.183.134.103:80${req.url}`);
});

router.all('/:id/reviews*', (req, res) => {
  res.redirect(307, `http://52.55.139.226:80${req.url}`);
});

router.all('/:id/images*', (req, res) => {
  res.redirect(307, `http://18.188.153.185:80${req.url}`);
});

app.listen(port, () => {
  console.log(' we listening for things on the proxy');
  console.log(__dirname);
});
