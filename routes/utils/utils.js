const Ajv = require('ajv');

exports.catchAsync = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            res.json( {error: error.toString()})
        }
    };
}


exports.validateAndSend = async (schema, data, db) => {
    const ajv = new Ajv();
    let valid;
    try {
    const validate = ajv.compile(schema);
     valid = validate(data);

    } catch (err) {
        throw new Error(err)
    }



    return console.log(valid, 'now sending to db')
}