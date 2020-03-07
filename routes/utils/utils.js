const Ajv = require('ajv');
const rp = require('request-promise');

exports.catchAsync = (fn) => {
    return async (req, res, next) => {
        req.userId = req.headers['user-id'] || '';
        try {
            await fn(req, res, next);
        } catch (error) {
            res.json( {error: error.toString()})
        }
    };
}


exports.validate = async (schema, data) => {
    const ajv = new Ajv();
    let valid;
    try {
    const validate = ajv.compile(schema);
     valid = validate(data);

    } catch (err) {
        throw new Error(err)
    }

    if (!valid) {
        throw new Error('schema isn\'t valid')
    }

    return valid
}


exports.retreiveData = async (uri, res) => {
    const data = await rp({
        method: 'GET',
        uri: uri,
        json: true // Automatically stringifies the body to JSON
    });
    for (let id in data) {
        data[id]._id = id;
    }
    res.json(data);
} 

exports.format = (data, withItems = true) => {
    for (let id in data) {
        data[id]._id = id;
    }

    const values = Object.values(data || {});
    return withItems ? itemFormatted(values, true) : values;
}

const itemFormatted = (data, isArray = false) => {
    if (!data) return isArray ? [] : {};
    const formattedItems = (items) => {
        for (let id in items) {
            items[id]._id = id;
        }
    return Object.values(items || {});
    }
 if (!isArray) return {...data, items: formattedItems(data.items)};
 return data.map(d => ({...d, items: formattedItems(d.items)}));
 
}

exports.itemFormatted = itemFormatted;