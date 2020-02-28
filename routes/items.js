const express = require('express');
const rp = require('request-promise');
const userAgent = require('user-agents');
const utils = require('./utils/utils');


const itemRouter = express.Router();

itemRouter.post('/lookup', utils.catchAsync(async (req, res) => { // POST {q: <string>} // TODO: create an access to tiv taam and to merge, 
    const searchQuery = req.body.q || '';
    const supersalSearchOptions = {
        uri: `https://www.shufersal.co.il/online/he/search/results?q=${encodeURIComponent(searchQuery)}:relevance&limit=4`,
        headers: {
            'User-Agent': new userAgent().toString()
        },
        json: true
    }

    
     const results = (await rp(supersalSearchOptions)).results || [];

      res.json(results.map(r => r.name));
}));







module.exports = itemRouter;