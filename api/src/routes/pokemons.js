const axios = require('axios')
const {Router} = require('express');
const router = Router();

const mainRouteParser = require('../constrollers/mainRouteParser');
const detailRouteParser = require('../constrollers/detailRouteParser');

const pokeDbCreate = require('../constrollers/pokeDbCreate');

const {Pokemon, Type} = require('../db');

router.get('/:id', async (req, res) => {
    const {id} = req.params
    let pokemon = {}
    try {
        if(+id) {
            let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            pokemon = detailRouteParser(data.data)
        } else {
            let data = await Pokemon.findByPk(id,{
                include: Type
            })
            pokemon = data;
        }
        
        res.send(pokemon)
    } catch (err) {
        res.send({err: err.message})
    }
})

router.get('/', async (req, res)=>{
    const {name} = req.query
    let allSearch = []
    if (name) {
        try {
            let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            let pokemon = detailRouteParser(data.data);
            allSearch.push(pokemon);
        } catch (err) {
            console.log(err.mesaage)
        }
        try {
            let dbPoke  = await Pokemon.findAll({
                where: {name: name},
                include: {
                    model: Type
                }
            })
            if(dbPoke.length > 0) allSearch.push(dbPoke);
            res.send(allSearch.length > 0 ? allSearch :"No se encontraron Pokemones");
        } catch (err) {
            res.send({err: err.mesaage});
        }
    } else {
        try{
            //------ Pokemones de la API -------
            let data = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=40`);
            let results = data.data.results
            let pokes = await Promise.all(
                results.map(async (e) => {
                    let pokemon = await axios.get(e.url);
                    return mainRouteParser(pokemon.data)
                })
            )
            //------ Pokemones de la DB -------
            let pokeDb = await Pokemon.findAll({
                include: {
                    model: Type,
                    attributes:["name"]
                }
            })
            let pokeDbParse = pokeDb.map((e)=>mainRouteParser(e));

            let npokes = pokes.concat(pokeDbParse);

            res.send(npokes);
        }catch(err){
            res.send({err: err.message})
        }
    }
})

router.post('/', async (req, res) => {
    let info = req.body;
    try{
        let pokemon = await pokeDbCreate(info);
        res.send(pokemon)
    }catch(err){
        res.send({error: err.mesaage})
    }
})

module.exports = router;