const rp = require('request-promise');
const cheerio = require('cheerio');
const userAgent = require('user-agents');

async function getVictory(searchQuery) {

    const base = 'http://www.victoryonline.co.il/Shopping/FindProducts.aspx?Query=';

    const options = {
        uri: base + encodeURIComponent(searchQuery),
        headers: {
            'User-Agent': new userAgent().toString()
        }
    }
    try {
        const rawData = await rp(options)
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

 // getVictory('במבה').then(data => console.log(data));
