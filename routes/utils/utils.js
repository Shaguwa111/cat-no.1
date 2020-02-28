const Ajv = require('ajv');
const rp = require('request-promise');

exports.catchAsync = (fn) => {
    return async (req, res, next) => {
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