require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');
const compression = require('compression');

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/loaderio-dc29a9684008006e366d2851156dc49c', (req, res) => {
  res.send('loaderio-dc29a9684008006e366d2851156dc49c');
});

app.use('/api/movies/:movieid/rating', 
  proxy({
    target: 'http://18.191.59.6/'
  })
)

app.get('/api/movies/:movieid/reviews', 
  proxy({
    target: 'http://18.191.59.6/'
  })
)
app.listen(3000, () => {
  console.log('listening at port 3000');
})

