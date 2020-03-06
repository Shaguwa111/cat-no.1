const express = require('express');
const rp = require('request-promise');
const userAgent = require('user-agents');
const utils = require('./utils/utils');

const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyBht451wsFWpTxs6rcZQpz-LidUFTd-hXU",
    databaseURL: "https://tealdeal.firebaseio.com",
}

firebase.initializeApp(config);

const db = firebase.database();




const tripRouter = express.Router();

const itemSchema = {
    properties: {
        name: { type: 'string' },
        price: { type: 'number' },
        quantity: { type: 'number' },
        img: { type: ['string', 'null']},
        size: { type: ['string', 'null']}
    }, required: ['name', 'price', 'quantity', 'img']
};


const tripSchema = {
    properties: {
        createdAt: {type: 'number'},
        userId: { type: ['string', 'number'] },
        name: { type: 'string' },
    }, required: ['userId', 'name']
}


tripRouter.post('/', utils.catchAsync(async (req, res) => { 
    const body = {...req.body, userId: req.userId, createdAt: Date.now()};
    await utils.validate(tripSchema, body);
    const id = await db.ref('/trips').push().key
    await db.ref(`/trips/${id}`).set(body);
    const snapshot = await db.ref(`/trips/${id}`).once('value');
    const data = snapshot.val();
    if (data) data._id = id;

    res.json(utils.itemFormatted(data))
}));

tripRouter.delete('/:id', utils.catchAsync(async (req, res) => {
    const id = req.params.id;
    await db.ref(`/trips/${id}`).remove();
    const snapshot = await db.ref('/trips').orderByChild("userId").equalTo(req.userId).once('value')
    const data = utils.format(snapshot.val());

    res.json(data)
}));

tripRouter.put('/:id', utils.catchAsync(async (req, res) => { // for changing name only {name: string}
    const id = req.params.id;
    const name = req.body.name;
    // await utils.validate(tripSchema, body);
    await db.ref(`/trips/${id}/name`).set(name)
    const snapshot = await db.ref(`/trips/${id}`).once('value')
    const data = snapshot.val();
    if (data) data._id = id;

    res.json(utils.itemFormatted(data))
}));


tripRouter.get('/', utils.catchAsync(async (req, res) => {
    const userId = req.userId;
    const snapshot = await db.ref('/trips').orderByChild("userId").equalTo(userId).once('value')
    const data = utils.format(snapshot.val());

    res.json(data)
}));

tripRouter.get('/:id', utils.catchAsync(async (req, res) => {
    const id = req.params.id;
    const snapshot = await db.ref(`/trips/${id}`).once('value')
    const data = snapshot.val();
    if (data) data._id = id;

    res.json(utils.itemFormatted(data));
}));

// for adding removing and editing items in list

tripRouter.post('/:tripId/item', utils.catchAsync(async (req, res) => {
    const body = req.body;
    const tripId = req.params.tripId;

    await utils.validate(itemSchema, body);
    await db.ref(`/trips/${tripId}/items`).push(body);
    const snapshot = await db.ref(`/trips/${tripId}`).once('value');
    const data = snapshot.val();
    if (data) data._id = tripId;

    res.json(utils.itemFormatted(data));
}));

tripRouter.delete('/:tripId/item/:id', utils.catchAsync(async (req, res) => {
    const id = req.params.id;
    const tripId = req.params.tripId;
    await db.ref(`/trips/${tripId}/items/${id}`).remove();
    const snapshot = await db.ref(`/trips/${tripId}`).once('value');
    const data = snapshot.val();
    if (data) data._id = tripId;

    res.json(utils.itemFormatted(data));
   
}));

tripRouter.put('/:tripId/item/:id', utils.catchAsync(async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const tripId = req.params.tripId;

    await utils.validate(itemSchema, body);
    await db.ref(`/trips/${tripId}/items/${id}`).update(body)
    const snapshot = await db.ref(`/trips/${tripId}`).once('value');
    const data = snapshot.val();
    if (data) data._id = tripId;

    res.json(utils.itemFormatted(data));
}));

tripRouter.put('/:tripId/item/:id/plusone', utils.catchAsync(async (req, res) => {
    const id = req.params.id;
    const tripId = req.params.tripId;

   await db.ref(`/trips/${tripId}/items/${id}/quantity`).transaction((item) => {
       return item + 1
    }, null, true)
   const snapshot = await db.ref(`/trips/${tripId}`).once('value');
    const data = snapshot.val();
    if (data) data._id = tripId;

    res.json(utils.itemFormatted(data));
}));

tripRouter.put('/:tripId/item/:id/minusone', utils.catchAsync(async (req, res) => {
    const id = req.params.id;
    const tripId = req.params.tripId;

   await db.ref(`/trips/${tripId}/items/${id}`).transaction((item) => {
       if (item !== null) {
            if (item.quantity > 0) {
            item.quantity = item.quantity - 1
       } else {
           item = null;  
       }
       }
         return item
       
    }, null, true)
   const snapshot = await db.ref(`/trips/${tripId}`).once('value');
    const data = snapshot.val();
    if (data) data._id = tripId;

    res.json(utils.itemFormatted(data));
}));

module.exports = tripRouter;

