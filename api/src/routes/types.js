const { default: axios } = require('axios');
const { Router } = require('express');
const router = Router();

const typeDbCreate = require('../constrollers/typeDbCreate');
const { Type } = require('../db')

router.get('/', async (req, res) => {
    try {
        let data = await axios.get('https://pokeapi.co/api/v2/type');
        let types = data.data.results;
        let listOfTypes = await Promise.all(
            types.map(async (e) => {
                let type = await axios.get(e.url);
                return {id: type.data.id, name: type.data.name}
            })
        )
        listOfTypes.forEach((e)=> typeDbCreate(e))
        const allTypes = await Type.findAll();
        res.send(allTypes)
    } catch (err) {
        res.send({err: err.message})
    }
})

module.exports = router;