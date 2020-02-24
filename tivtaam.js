const rp = require('request-promise');
const cheerio = require('cheerio');
const userAgent = require('user-agents');

// GET https://www.tivtaam.co.il/v2/retailers/1062/branches/924/products?query=%D7%91%D7%9E%D7%91%D7%94

async function getVictory(searchQuery) {

    const base = 'http://www.victoryonline.co.il/Shopping/FindProducts.aspx?Query=';

    const options = {
        uri: base + encodeURIComponent(searchQuery),
        headers: {
            'User-Agent': new userAgent().toString()
        }
    }
    try {
        let rawData = await rp(options)
         rawData = (rawData.split('\n').join())
        const $ = cheerio.load(rawData);
        const products = $('li', '.ULProductList').map((i, p) => ({
            source: 'victory',
            price: $(p).find('.Price').text(),
            deal: $(p).find('.Offer').text(),
            title: $(p).find('h3 a .Prefix').text(),
            weight: $(p).find('h3 a .Suffix').text(),
            link: $(p).find('h3 a').attr('href'),
            img: $(p).find('.ImageWrp img').attr('src')
        })).get()
        return (products)

    } catch (err) {
     
        console.log(err)
    }
}

 getVictory('יוגורט').then(data => console.log(data));
