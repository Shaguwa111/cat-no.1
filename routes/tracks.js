const express = require('express');
const rp = require('request-promise');
const userAgent = require('user-agents');
const utils = require('./utils/utils');

const firebase = require('firebase');


const db = firebase.database();


const trackRouter = express.Router();

const trackSchema = {
    properties: {
        createdAt: {type: 'number'},
        userId: { type: ['string', 'number'] },
        name: { type: 'string' },
        price: { type: 'number' },
        img: { type: ['string', 'null']},
        size: { type: ['string', 'null']}
    }, required: ['name', 'price', 'img', 'userId']
};




trackRouter.post('/', utils.catchAsync(async (req, res) => { 
    const {name, size, price, img} = req.body;
    const body = {name, size, price, img, userId: req.userId, createdAt: Date.now()};
    await utils.validate(trackSchema, body);
    const id = await db.ref('/tracks').push().key
    await db.ref(`/tracks/${id}`).set(body);
    const snapshot = await db.ref('/tracks').orderByChild("userId").equalTo(req.userId).once('value')
    const data = utils.format(snapshot.val(), false);

    res.json(data)
}));

trackRouter.delete('/:id', utils.catchAsync(async (req, res) => {
    const id = req.params.id;
    await db.ref(`/tracks/${id}`).remove();
    const snapshot = await db.ref('/tracks').orderByChild("userId").equalTo(req.userId).once('value')
    const data = utils.format(snapshot.val(), false);

    res.json(data)
}));



trackRouter.get('/', utils.catchAsync(async (req, res) => {
    const userId = req.userId;
    const snapshot = await db.ref('/tracks').orderByChild("userId").equalTo(userId).once('value')
    const data = utils.format(snapshot.val(), false);

    res.json(data)
}));



module.exports = trackRouter;

