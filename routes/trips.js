const express = require('express');
const rp = require('request-promise');
const userAgent = require('user-agents');
const utils = require('./utils/utils');

const tripRouter = express.Router();

const itemSchema = {
    properties: {
        title: {type: 'string' },
        price: {type: 'number' },
        amount: {type: 'number'}
    }, required: ['title', 'price', 'amount']
};


const tripSchema = {
    properties: {
        userId: {type: 'string'},
        name: {type: 'string'},
        items: {type: 'array', items: itemSchema, default: []}
    }, required : ['userId', 'name']
}


tripRouter.post('/', utils.catchAsync(async (req,res) => {
    const body = req.body;
await utils.validateAndSend(tripSchema, body);

res.json({ok: 'ok'})
}));

module.exports = tripRouter;

