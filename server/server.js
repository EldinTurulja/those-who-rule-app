const express = require('express');

// Constants
const PORT = 5000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);