const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyBht451wsFWpTxs6rcZQpz-LidUFTd-hXU",
    databaseURL: "https://tealdeal.firebaseio.com",
}


const app = express();
const PORT = 8080; 

app.use(cors());
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

firebase.initializeApp(config);
// require('./victory');
// require('ץ.tivtaam');

//* rouets *//
const items = require('./routes/items');
app.use('/item', items);

const trips = require('./routes/trips');
app.use('/trip', trips);

const tracks = require('./routes/tracks');
app.use('/track', tracks);



app.listen(PORT, () => {
    console.log(`up and runing on ${PORT}`);
})