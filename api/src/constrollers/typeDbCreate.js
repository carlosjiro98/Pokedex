const {Type} = require('../db');

async function typeDbCreate ({id, name}) {
    try {
        Type.findOrCreate({
            where: {id: id},
            defaults: {
                id,
                name
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = typeDbCreate;


