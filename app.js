const express = require('express');
const app = express();
// require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//connection db
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

mongoose.set("debug", true);

require('./models/User');
require('./models/Movie')
require('./models/Comment')
require('./config/passport')


app.use('/v1', require('./routes'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});