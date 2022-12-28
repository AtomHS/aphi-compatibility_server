const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

// mongodb
mongoose
  .connect(`mongodb://mongodb-service/aphi-compatibility`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

// express
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

// fireup the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listening on port ${port}!`));
