const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//conecction db
const mongoose = require('mongoose');

mongoose.connect(
    "DB connect"
);

mongoose.set("debug", true);

require('./models/Admin');
require('./models/Movie')


app.use('/v1', require('./routes'));

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});