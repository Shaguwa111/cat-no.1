const express = require('express');
const rp = require('request-promise');
const userAgent = require('user-agents');
const utils = require('./utils/utils');


const itemRouter = express.Router();

itemRouter.post('/lookup', utils.catchAsync(async (req, res) => { // POST {q: <string>} // TODO: create an access to tiv taam and to merge, 
    const searchQuery = req.body.q || '';
    const supersalSearchOptions = {
        uri: `https://www.shufersal.co.il/online/he/search/results?q=${encodeURIComponent(searchQuery)}:relevance&limit=10`,
        headers: {
            'User-Agent': new userAgent().toString()
        },
        json: true
    }

    const tivTaamSearchOptions = {
        uri: `https://n2.nixale.com/q?customer=tivtaam&q=${encodeURIComponent(searchQuery)}`,
        headers: {
            'User-Agent': new userAgent().toString()
        },
        json: true
    }


   let formattedResults = [];
const superPromise = async () => {
 const results = (await rp(supersalSearchOptions)).results || [];
     return results.map(r => ({
        name: r.name,
        description: r.description,
        price: r.price.value,
        img: r.baseProductImageMedium,
        size: r.unitDescription,
        quantity: 1
    })).sort((a, b) => a.name > b.name ? 1 : -1);

}

const tivPromise = async () => {

        const results = (await rp(tivTaamSearchOptions)).products || [];
     return results.map(r => ({
        name: r.highlight_name,
        description: r.shortTitle,
        price: Number(r.price.replace('₪', '')) || 12.90,
        img: r.image,
        size: null,
        quantity: 1
    })).sort((a, b) => a.name > b.name ? 1 : -1).splice(0, 10);
}

formattedResults = await Promise.race([superPromise(), tivPromise()]);
   

    res.json(formattedResults);
}));







module.exports = itemRouter;