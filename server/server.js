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
  // res.redirect(307, `http://52.55.139.226:80${req.url}`);
  res.redirect(307, `http://18.206.196.154:80/${req.params.id}`);
});

router.all('/:id/images*', (req, res) => {
  // res.redirect(307, `http://18.188.153.185:80${req.url}`);
  res.redirect(307, `http://18.224.24.70:80${req.url}`);
});

app.get('/businesses/:id/restaurantInfo', function(req, res) {
  res.redirect(
    `http://35.183.134.103:80/restaurantInfo-service/${req.params.id}`,
  );
});

app.get('/businesses/:id/images', function(req, res) {
  // res.redirect(`http://18.188.153.185:80/images-service/${req.params.id}`);
  res.redirect(`http://18.224.24.70:80/images-service/${req.params.id}`);
});

app.get('/businesses/:id/reviews', function(req, res) {
  // res.redirect(`http://52.55.139.226:80/reviews-service/${req.params.id}`);
  res.redirect(`http://18.206.196.154:80/reviews-service/${req.params.id}`);
});

app.listen(port, () => {
  console.log(' we listening for things on the proxy');
  // console.log(url);
});
